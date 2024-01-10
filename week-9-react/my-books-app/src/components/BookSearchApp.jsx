import { useState } from "react";
import booksData from "../../public/data/fantasy.json"; // Importa il file JSON con i dati dei libri

const BookSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filtra i libri in base al titolo
    const filtered = booksData.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );

    // Aggiorna lo stato con i libri filtrati
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Libri</h1>

      {/* Input per la ricerca */}
      <input
        type="text"
        placeholder="Cerca per titolo"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Lista dei libri filtrati */}
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearchApp;
