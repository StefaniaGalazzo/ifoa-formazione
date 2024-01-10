import { useState } from "react";
import { Container } from "react-bootstrap";
import ButtonsCategories from "../organisms/ButtonsCategories";
import CardsCustom from "../organisms/CardsCustom";
import fantasy from "../../../src/data/fantasy.json";
import history from "../../../src/data/history";
import horror from "../../../src/data/horror";
import romance from "../../../src/data/romance";
import scifi from "../../../src/data/scifi";
import SearchBar from "../molecules/SearchBar";

export default function CardsCategoriesTemplate() {
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    let term = e.target.value;
    setSearchTerm(term);
    // prevCate è una callback
    setCategory([...fantasy, ...horror, ...romance, ...scifi, ...history]);
    console.log(category, "category handlersearch");
    setCategory((prevCategory) => {
      return prevCategory.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
    });
  };

  return (
    <Container fluid className="mb-5 pb-5">
      <SearchBar val={searchTerm} handler={handleSearch} wdt="300px" />
      <ButtonsCategories setCategory={setCategory} />
      {category && <CardsCustom category={category} />}
      {category.length === 0 && (
        <h3 className="text-center">
          Cerca un libro o seleziona una categoria!
        </h3>
      )}
    </Container>
  );
}
