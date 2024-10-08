import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  LivestreamPlayer,
  StreamTheme,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

const apiKey = "682pm9spe7t3";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcyMzg5NjU1NCwiZXhwIjoxNzIzOTgyOTU0LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV9mYjAzN2FkZS1iMTgzLTQ2Y2YtODBjMi1hODMzZTY0MDBjZDgiXX0.V2zzv7TmjjpkoCBRIMJ3bMxTVlIcEAgcNhRgYo4qjR0";

const callId = "12379941";
const user = { type: "anonymous" };

const client = new StreamVideoClient({ apiKey, user, token });

export const ViewerStream = () => {
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();
  console.log(participants);
  return (
    <StreamVideo client={client}>
      <StreamTheme>
        {participants.map((p) => {
          return (
            <LivestreamPlayer
              key={p.sessionId}
              participant={p}
              layoutProps={{
                enableFullScreen: true,
                showLiveBadge: true,
                showDuration: true,
                showSpeakerName: true,
                showParticipantCount: true,
              }}
              callType="livestream"
              callId={callId}
            />
          );
        })}
      </StreamTheme>
    </StreamVideo>
  );
};
