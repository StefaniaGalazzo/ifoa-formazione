import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favorite-actions"; // Assicurati di creare questo file actions.js
import Job from "./Job";
import { Link } from "react-router-dom";

const MainSearch = ({ favorites, removeFromFavorites, addToFavorites }) => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //redux
  const isCompanyInFavorites = (company) => {
    return favorites.some((favCompany) => favCompany._id === company._id);
  };

  const handleToggleFavorites = (company) => {
    if (isCompanyInFavorites(company)) {
      removeFromFavorites(company);
    } else {
      addToFavorites(company);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to={`/favorites-companies`}>
            Go to Favorite Companies {">>"}
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((company) => (
            <div key={company._id}>
              <Job
                data={company}
                icon={
                  <button onClick={() => handleToggleFavorites(company)}>
                    {isCompanyInFavorites(company)
                      ? "Rimuovi dai preferiti"
                      : "Aggiungi ai preferiti"}
                  </button>
                }
              ></Job>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
// Mappa anche lo stato delle aziende preferite
const mapStateToProps = (state) => ({
  companies: state.companies,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (company) => dispatch(addToFavorites(company)),
  removeFromFavorites: (company) => dispatch(removeFromFavorites(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
