import { useEffect, useState } from "react";
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
    const filteredCategory = [
      ...fantasy,
      ...horror,
      ...romance,
      ...scifi,
      ...history,
    ].filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));

    setCategory(filteredCategory);
    setMessage(filteredCategory.length === 0);
  };

  useEffect(() => {
    debounce(handleSearch, 800);
  }, [category.length, searchTerm]);

  return (
    <Container fluid className="mb-5 pb-5">
      <SearchBar val={searchTerm} handler={handleSearch} wdt="300px" />
      <ButtonsCategories setCategory={setCategory} />
      {category.length !== 0 && <CardsCustom category={category} />}
      {category.length === 0 && !message && (
        <h3 className="text-center">Search a book or select a category!</h3>
      )}
      {message && <h3 className="text-center">There are no results</h3>}
    </Container>
  );

  // funzione di debounce
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
}
