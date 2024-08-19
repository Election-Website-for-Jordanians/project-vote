import {
  useCallStateHooks,
  ParticipantView,
  CallParticipantsList,
  useCall,
  useParticipantViewContext,
  CallControls,
  LivestreamLayout,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useContext, useEffect } from "react";
<<<<<<< HEAD
// import { Context } from "../contextprovider./contextProvider";
=======

>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
import { Button } from "@material-tailwind/react";
import startButton from "./assets/start.png";
import stopButton from "./assets/stop.png";
import micButton from "./assets/mic.png";
import camButton from "./assets/cam.png";
import { useState } from "react";
import { Chip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { PaginatedGridLayout } from "@stream-io/video-react-sdk";

export const LivestreamView = () => {
  const navigate = useNavigate();
  const {
    useIsCallLive,
    useCallState,
    useParticipantCount,
    useCameraState,
    useMicrophoneState,
  } = useCallStateHooks();
  const { microphone, isMute: isMicMute } = useMicrophoneState();
  const { camera, isMute } = useCameraState();
  const isCallLive = useIsCallLive();
  const callState = useCallState();
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();
  const call = useCall();
  const [micState, setMic] = useState(isMicMute);

  useEffect(() => {
    (async () => {
      console.log(isCallLive);
      if (!isCallLive) await call.join({ create: true });
    })();
  }, [call, isCallLive]);
  const handleGoLive = async () => {
    if (isCallLive) {
      await call.stopLive();
    } else await call.goLive();
  };
  const handleCamera = async () => {
    if (isMute) {
      await camera.enable();
    } else {
      await camera.disable();
    }
  };

  const handleMicrophone = async () => {
    console.log(isMicMute);
    if (isMicMute) {
      await microphone.enable();
      setMic(isMicMute);
    } else {
      setMic(isMicMute);
      await microphone.disable();
    }
  };
  return (
    <>
      <div className="flex flex-col ">
        <p className="mt-10 ml-10 text-[2rem]">Stream Staging</p>

        <div className="w-full">
          <PaginatedGridLayout
            floatingParticipantProps={{ position: "bottom-right" }}
            showSpeakerName={true}
          />
        </div>

        <CallControls />
      </div>

      <button
        onClick={() => {
          navigate("/viewer");
        }}
      >
        asdas
      </button>
    </>
  );
};

const ParticipantDetails = () => {
  const { participant } = useParticipantViewContext();

  return (
    <div title={participant.name}>
      <span>{participant.name}</span>
    </div>
  );
};

const CustomVideoPlaceHolder = () => {
  const { participant } = useParticipantViewContext();
  return (
    <>
      <div className="w-full bg-gray-900">
        <img
          className="w-full h-full rounded-full"
          src={participant.image}
          alt={participant.userId}
        />
      </div>
    </>
  );
};
