import { useState } from "react";
import Button from "./components/molecules/Button/Button";
import Image from "./components/molecules/Button/atoms/Image/Image";
import "./App.css";

function App() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="container">
      <Button
        type="button"
        clickHandler={() => {
          setShowImage(!showImage);
        }}
        text="Mostra l'immagine nascosta"
      />
      {showImage && (
        <Image
          src="https://images.unsplash.com/photo-1704293763686-7070c47a1412?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="questa è un'immagine random"
          width="200px"
        />
      )}
    </div>
  );
}

export default App;
