import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  StreamTheme,
} from "@stream-io/video-react-sdk";
import { LivestreamView } from "./liveStreamView";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "682pm9spe7t3";

export default function BackStageStream() {
  const [passedClient, setClient] = useState();
  const [passedCall, setCall] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          encodeURI(
            "http://localhost:4026/api/debates/getDebators?debateID=10&nationalID=1029384756"
          ),
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0OTI3MzUxNjEiLCJpYXQiOjE3MjM0NjEzODF9.DbcLSU4XSzcKeCgputclDGroqQ3FO_iVg1tFYqWAMOg",
            },
          }
        );
        console.log(response.data);
        const debators = response.data.debators.debatorData;
        const token = response.data.debators.debator.debatorToken;
        console.log(token);
        if (debators) {
          const userId = debators.nationalID;
          const user = { id: userId, name: debators.name };

          const client = new StreamVideoClient({ apiKey, user, token });
          setClient(client);

          const callId = 10;
          const call = client.call("livestream", callId);
          console.log(passedClient);
          setCall(call);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    passedClient &&
    passedCall && (
      <StreamVideo client={passedClient}>
        <StreamCall call={passedCall}>
          <StreamTheme>
            <LivestreamView />
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    )
  );
}
