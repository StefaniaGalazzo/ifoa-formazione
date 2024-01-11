/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import SingleCard from "../molecules/SingleCard";
import FormComment from "./FormComment";
import AddRate from "../organisms/AddRate";

export default function CardsCustom({ category }) {
  // tengo traccia dell'indice della card cliccata.
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  //posizionamento #formModal
  const ElRef = useRef(null);
  const [formModalStyle, setFormModalStyle] = useState({
    left: "",
    right: "-155%",
  });
  const [formModalArrow, setFormModalArrow] = useState("");

  //  al clic su una card viene impostato l'indice corrispondente.
  const clickHandler = (index) => {
    clickedCardIndex === null
      ? setClickedCardIndex(index)
      : setClickedCardIndex(null);
  };

  const closeForm = () => {
    setClickedCardIndex(null);
  };

  function positionFormModal() {
    const element = ElRef.current;
    let positonElRight = element.getBoundingClientRect().right;
    let windowWidth = window.innerWidth;
    if (positonElRight > windowWidth) {
      setFormModalArrow("posizionLeftBef");
      setFormModalStyle({
        ...formModalStyle,
        left: "-160%",
        right: "",
      });
    }
    if (positonElRight < windowWidth) {
      setFormModalArrow("posizionRightBef");
      setFormModalStyle({
        ...formModalStyle,
        left: "",
        right: "-160%",
      });
    }
  }

  useEffect(() => {
    if (clickedCardIndex === null) {
      return;
    }
    const fetchData = async () => {
      let bookId = category[clickedCardIndex].asin;
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDQ5ODQzNTUsImV4cCI6MTcwNjE5Mzk1NX0.L0q64Tk_9U7SfZmsm4fpTs3s_qm_ZEYpZGqYY9KWOSQ",
            },
          }
        ); // Sostituisci con l'URL effettivo della tua API
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        const result = await response.json();
        setComments(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
    positionFormModal();
  }, [clickedCardIndex]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {category.map((book, index) => (
        <div key={index} className="position-relative m-2">
          {/* se l'index della card selezionata corrisponde all'index della card mappata... */}
          {clickedCardIndex === index && (
            <div
              ref={ElRef}
              id="formModal"
              className={formModalArrow}
              style={formModalStyle}
            >
              <h5 className="mb-3">Comments:</h5>
              <div className="scroll">
                <IoCloseCircleOutline
                  onClick={closeForm}
                  size="30px"
                  color="orange"
                  className="close"
                />
                <FormComment
                  comments={comments}
                  setClickedCardIndex={setClickedCardIndex}
                />
              </div>
              <AddRate bookId={category[clickedCardIndex].asin} />
            </div>
          )}
          <SingleCard
            book={book}
            handler={() => clickHandler(index)}
            // passo la condizione come prop per il comp figlio
            clicked={clickedCardIndex === index}
          />
          {error && <h2>{error}</h2>}
        </div>
      ))}
    </div>
  );
}
