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
  const [message, setMessage] = useState(false);

  const handleSearch = (e) => {
    let term = e.target.value;
    setSearchTerm(term);
    // prevCate è una callback
    setCategory([...fantasy, ...horror, ...romance, ...scifi, ...history]);
    setCategory((prevCategory) => {
      return prevCategory.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
    });
    setMessage(category.length === 0);
  };

  return (
    <Container fluid className="mb-5 pb-5">
      <SearchBar val={searchTerm} handler={handleSearch} wdt="300px" />
      <ButtonsCategories setCategory={setCategory} />
      {category && <CardsCustom category={category} />}
      {category.length === 0 && !message && (
        <h3 className="text-center">Search a book or select a category!</h3>
      )}
      {message && <h3 className="text-center">There are no results</h3>}
    </Container>
  );
}
