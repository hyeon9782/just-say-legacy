import React, { useRef, useState } from "react";
import axios from "axios";

const TTS = () => {
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <button disabled={isLoading}>
        {isLoading ? "Loading..." : "Play Audio"}
      </button>
      <audio ref={audioRef} controls></audio>
    </>
  );
};

export default TTS;