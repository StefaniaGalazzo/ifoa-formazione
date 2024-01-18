import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favorite-actions"; //
import { Link } from "react-router-dom";

const PageFavorite = ({ favorites, removeFromFavorites }) => {
  // Gestisce la logica del click sul pulsante "Rimuovi dai preferiti"
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
    <div>
      <h2>Favorite companies</h2>
      <Link to={`/`}>Home {">>"}</Link>
      <ul>
        {favorites.map((company) => (
          <li key={company._id}>
            {company.company_name}
            <button onClick={() => handleToggleFavorites(company)}>
              {isCompanyInFavorites(company)
                ? "Rimuovi dai preferiti"
                : "Aggiungi ai preferiti"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// collego lo stato e le azioni di redux al comp
const mapStateToProps = (state) => ({
  companies: state.companies,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (company) => dispatch(addToFavorites(company)),
  removeFromFavorites: (company) => dispatch(removeFromFavorites(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageFavorite);
