import { Container } from "react-bootstrap";
import ButtonsCategories from "../organisms/ButtonsCategories";
import CardsCustom from "../organisms/CardsCustom";

import { useState } from "react";

export default function CardsCategoriesTemplate() {
  const [category, setCategory] = useState([]);
  return (
    <Container fluid className="mb-5 pb-5">
      <ButtonsCategories setCategory={setCategory} />
      <CardsCustom category={category} />
    </Container>
  );
}
