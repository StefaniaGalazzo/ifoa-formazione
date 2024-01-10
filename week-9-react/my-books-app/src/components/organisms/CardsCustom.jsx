/* eslint-disable react/prop-types */
import SingleCard from "../molecules/SingleCard";

export default function CardsCustom({ category }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {category.map((book, indx) => {
        return <SingleCard key={indx} book={book} />;
      })}
    </div>
  );
}
