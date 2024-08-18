import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  useCallStateHooks,
  ParticipantView,
  StreamTheme,
  CallControls,
} from "@stream-io/video-react-sdk";
import { LivestreamPlayer } from "@stream-io/video-react-sdk";
import { LivestreamView } from "./liveStreamView";
import { ViewerStream } from "./ViewerStream/ViewerStream";

const apiKey = "682pm9spe7t3";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcyMzg5NjU1NCwiZXhwIjoxNzIzOTgyOTU0LCJ1c2VyX2lkIjoiYmFzaWwwIiwicm9sZSI6ImFkbWluIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV9mYjAzN2FkZS1iMTgzLTQ2Y2YtODBjMi1hODMzZTY0MDBjZDgiXX0.LO-vmlPLUD8X81Trfrqf0vRMKlRpdbndZSZmjQp-MQ0";
const userId = "basil0";
const callId = "12379941";
const user = { id: userId, name: "test" };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);
export default function BackStageStream() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <LivestreamView />
        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  );
}
