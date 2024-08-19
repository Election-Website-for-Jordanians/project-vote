// // In services/thresholdCalculator.js
// In services/thresholdCalculator.js
// services/thresholdCalculator.js

// services/thresholdCalculator.js

const { LocalListing, localListingInformation } = require("../models");
const { Op } = require("sequelize");

async function calculateThresholds() {
  try {
    const thresholds = {
      zarqa: await calculateThresholdForIds([1, 2, 3, 4, 5]),
      ammanFirst: await calculateThresholdForIds([6, 7, 8]),
      ammanSecond: await calculateThresholdForIds([9, 10, 11]),
    };

    return thresholds;
  } catch (error) {
    console.error("Error calculating thresholds:", error);
    throw error;
  }
}

async function calculateThresholdForIds(ids) {
  const listings = await localListingInformation.findAll({
    where: {
      localListingID: {
        [Op.in]: ids,
      },
    },
  });

  const listingIds = [
    ...new Set(
      listings
        .map((listing) => listing.dataValues.localListingID)
        .filter((id) => id != null)
    ),
  ];

  const localListings = await LocalListing.findAll({
    where: { listingID: { [Op.in]: listingIds } },
  });

  const totalVotes = localListings.reduce(
    (sum, listing) => sum + (listing.votingCount || 0),
    0
  );

  return totalVotes * 0.07;
}

async function getPassedListings() {
  const thresholds = await calculateThresholds();

  const ammanFirstListings = await checkPassedListings(
    [6, 7, 8],
    thresholds.ammanFirst
  );

  const zarqaListings = await checkPassedListings(
    [1, 2, 3, 4, 5],
    thresholds.zarqa
  );
  const ammanSecondListings = await checkPassedListings(
    [9, 10, 11],
    thresholds.ammanSecond
  );

  return {
    zarqa: zarqaListings,
    ammanFirst: ammanFirstListings,
    ammanSecond: ammanSecondListings,
  };
}

async function checkPassedListings(ids, threshold) {
  const listings = await LocalListing.findAll({
    where: {
      listingID: {
        [Op.in]: ids,
      },
    },
    attributes: ["listingID", "Name", "votingCount"],
  });

  return listings.map((listing) => ({
    ...listing.toJSON(),
    passedThreshold: listing.votingCount > threshold,
    message:
      listing.votingCount > threshold
        ? "هذه القائمة تخطت العتبة ودخلت مرحلة التنافس"
        : "",
  }));
}

async function calculateRatioForListInRegion(region, listName) {
  try {
    console.log(`Calculating ratio for ${listName} in ${region}`);

    const thresholds = await calculateThresholds();
    const regionThreshold = thresholds[region];
    console.log(`Threshold for ${region}: ${regionThreshold}`);

    const passedListings = await getPassedListings();
    const regionListings = passedListings[region];
    console.log(`Region Listings for ${region}:`, regionListings);

    const totalVotesForRegionPassed = regionListings.reduce((sum, listing) => {
      const passed = listing.votingCount > regionThreshold;
      console.log(
        `${listing.Name}: votes=${listing.votingCount}, passed=${passed}`
      );
      return passed ? sum + listing.votingCount : sum;
    }, 0);
    console.log(
      `Total votes for passed listings in ${region}: ${totalVotesForRegionPassed}`
    );

    const specificList = regionListings.find(
      (listing) => listing.Name === listName
    );
    if (!specificList) {
      console.log(`List "${listName}" not found in region ${region}`);
      return "0.0"; // or handle this case as appropriate for your application
    }
    console.log(`Specific list found:`, specificList);

    const specificListVotes = specificList ? specificList.votingCount : 0;
    console.log(`Votes for ${listName}: ${specificListVotes}`);

    const ratio =
      totalVotesForRegionPassed > 0
        ? ((specificListVotes / totalVotesForRegionPassed) * 100 * 10) / 100
        : 0;
    console.log(
      `Calculated ratio bbbbbbbbbb for ${listName}: ${ratio.toFixed(1)}`
    );

    return ratio.toFixed(1);
  } catch (error) {
    console.error(
      `Error calculating the ratio for ${listName} in ${region}:`,
      error
    );
    throw error;
  }
}

module.exports = {
  calculateThresholds,
  getPassedListings,
  calculateRatioForListInRegion,
};

// const { LocalListing, localListingInformation } = require("../models");
// const { Op } = require("sequelize");

// async function calculateThresholds() {
//   try {
//     const thresholds = {
//       zarqa: await calculateThresholdForIds([1, 2, 3, 4, 5]),
//       ammanFirst: await calculateThresholdForIds([6, 7, 8]),
//       ammanSecond: await calculateThresholdForIds([9, 10, 11]),
//     };

//     return thresholds;
//   } catch (error) {
//     console.error("Error calculating thresholds:", error);
//     throw error;
//   }
// }

// async function calculateThresholdForIds(ids) {
//   const listings = await localListingInformation.findAll({
//     where: {
//       localListingID: {
//         [Op.in]: ids,
//       },
//     },
//   });

//   const listingIds = [
//     ...new Set(
//       listings
//         .map((listing) => listing.dataValues.localListingID)
//         .filter((id) => id != null)
//     ),
//   ];

//   const localListings = await LocalListing.findAll({
//     where: { listingID: { [Op.in]: listingIds } },
//   });

//   const totalVotes = localListings.reduce(
//     (sum, listing) => sum + (listing.votingCount || 0),
//     0
//   );

//   return totalVotes * 0.07;
// }

// async function getPassedListings() {
//   const thresholds = await calculateThresholds();

//   const zarqaListings = await checkPassedListings(
//     [1, 2, 3, 4, 5],
//     thresholds.zarqa
//   );
//   const ammanFirstListings = await checkPassedListings(
//     [6, 7, 8],
//     thresholds.ammanFirst
//   );
//   const ammanSecondListings = await checkPassedListings(
//     [9, 10, 11],
//     thresholds.ammanSecond
//   );

//   return {
//     zarqa: zarqaListings,
//     ammanFirst: ammanFirstListings,
//     ammanSecond: ammanSecondListings,
//   };
// }

// async function checkPassedListings(ids, threshold) {
//   const listings = await LocalListing.findAll({
//     where: {
//       listingID: {
//         [Op.in]: ids,
//       },
//     },
//     attributes: ["listingID", "Name", "votingCount"],
//   });

//   return listings.map((listing) => ({
//     ...listing.toJSON(),
//     passedThreshold: listing.votingCount > threshold,
//     message:
//       listing.votingCount > threshold
//         ? "هذه القائمة تخطت العتبة ودخلت مرحلة التنافس"
//         : "",
//   }));
// }

// async function calculateKaramaSeatRatio() {
//   try {
//     // Fetching thresholds and passed listings
//     const thresholds = await calculateThresholds();
//     const zarqaPassedListings = (await getPassedListings()).zarqa;

//     // Extract the votes for the Karama list from the thresholds (assuming it's part of zarqa)
//     const karamaListing = zarqaPassedListings.find(
//       (listing) => listing.Name === "قائمة الكرامة"
//     );
//     const karamaVotes = karamaListing ? karamaListing.votingCount : 0; // Use the threshold value here for dynamic calculation
//     console.log("thresholds.zarqa", thresholds.zarqa);
//     // Calculate the total votes for Zarqa that passed the threshold
//     const totalVotesForZarqaPassed = zarqaPassedListings.reduce(
//       (sum, listing) =>
//         listing.passedThreshold ? sum + listing.votingCount : sum,
//       0
//     );
//     console.log("totalVotesForZarqaPassed", totalVotesForZarqaPassed);

//     // Apply the formula
//     const ratio = ((karamaVotes / totalVotesForZarqaPassed) * 100 * 10) / 100;

//     return ratio;
//   } catch (error) {
//     console.error("Error calculating Karama seat ratio:", error);
//     throw error;
//   }
// }

// module.exports = {
//   calculateThresholds,
//   getPassedListings,
//   calculateKaramaSeatRatio,
// };
