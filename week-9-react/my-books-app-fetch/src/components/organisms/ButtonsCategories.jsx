/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import fantasy from "../../../src/data/fantasy.json";
import history from "../../../src/data/history";
import horror from "../../../src/data/horror";
import romance from "../../../src/data/romance";
import scifi from "../../../src/data/scifi";

const ButtonsCategories = ({ setCategory }) => {
  const categories = [
    {
      nome: "Fantasy",
      data: fantasy,
    },
    {
      nome: "History",
      data: history,
    },
    {
      nome: "Horror",
      data: horror,
    },
    {
      nome: "Romance",
      data: romance,
    },
    {
      nome: "SciFi",
      data: scifi,
    },
  ];

  return (
    <div className="text-center py-4">
      {categories.map((category, index) => (
        <Button
          variant="primary"
          className="mx-3"
          onClick={() => setCategory(category.data)}
          key={index}
        >
          {category.nome}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsCategories;
