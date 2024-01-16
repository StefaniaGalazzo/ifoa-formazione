import { useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import trailer from "../../assets/media/trailer.mp4";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      console.log("play");
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handlePause = () => {
    if (videoRef.current.play) {
      console.log("pause");
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Container
      fluid
      className="p-0 overflow-hidden position-relative"
      style={{ height: "80vh" }}
    >
      <Button
        variant="light"
        className="text-uppercase fw-bold fs-5 position-absolute px-4 py-2"
        style={{ bottom: "80px", left: "80px", zIndex: "20" }}
      >
        <div className="d-flex align-items-center gap-2 ">
          <FaPlay />
          Continua a guardare
        </div>
      </Button>
      <div
        onMouseEnter={() => handlePlay()}
        onMouseLeave={() => handlePause()}
        style={{ opacity: isPlaying ? "0.3" : "1" }}
        className="overlay"
      ></div>
      <video ref={videoRef} width="100%" height="auto">
        <source src={trailer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}
    </Container>
  );
}
