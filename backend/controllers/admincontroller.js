// controllers/admincontroller.js
const { LocalListing, PartyListing, Candidate, Citizen } = require('../models');

exports.getLocalListingsWithCandidates = async (req, res) => {
  try {
    const localListings = await LocalListing.findAll({
      include: [
        {
          model: Candidate,
          as: 'candidates',
          attributes: { exclude: ['partyID'] },
          include: [
            {
              model: Citizen,
              attributes: ['name'],
              as: 'citizenInfo'
            }
          ]
        }
      ]
    });
    res.json(localListings);
  } catch (error) {
    console.error('Error fetching local listings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getPartyListingsWithCandidates = async (req, res) => {
  try {
    const partyListings = await PartyListing.findAll({
      include: [
        {
          model: Candidate,
          as: 'candidates',
          attributes: { exclude: ['listingID'] },
          include: [
            {
              model: Citizen,
              attributes: ['name'],
              as: 'citizenInfo'
            }
          ]
        }
      ]
    });
    res.json(partyListings);
  } catch (error) {
    console.error('Error fetching party listings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.removeCandidateFromListing = async (req, res) => {
    const { candidateID, listingType } = req.body;
    try {
      const candidate = await Candidate.findByPk(candidateID);
      if (!candidate) {
        return res.status(404).json({ error: 'Candidate not found' });
      }
  
      if (listingType === 'local') {
        await candidate.update({ localListingID: 0 });
      } else if (listingType === 'party') {
        await candidate.update({ partylistingID: 0 });
      } else {
        return res.status(400).json({ error: 'Invalid listing type' });
      }
  
      res.json({ message: 'Candidate removed from listing successfully' });
    } catch (error) {
      console.error('Error removing candidate from listing:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };