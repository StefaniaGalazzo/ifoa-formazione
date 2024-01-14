import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";

import Home from "./components/pages/Home";
import NavBarCustom from "./components/organisms/NavBarCustom";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <NavBarCustom />
      <Home />
      <Footer />
    </>
  );
}

export default App;
