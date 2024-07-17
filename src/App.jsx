import { useContext } from "react";
import { ApiContext } from "./hooks/ApiContext";
import CardList from "./components/CardList";
import Button from "./components/UI/Button";

import "./App.css";
import FilterOptions from "./components/FilterOptions";

function App() {
  const { isLoading, isError, error, data, isPlaceholderData, nextPage, prevPage, page } = useContext(ApiContext);

  return (
    <div className="main-container">
      <div className="box-title">
        <img className="logo" src="./Rick_and_Morty.webp" alt="logo" />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <FilterOptions />
          <CardList />
          <div className="button-group">
            <Button onClick={prevPage} IsDisabled={page === 1} className="btn-prev">
              Atras
            </Button>

            <Button onClick={nextPage} IsDisabled={!data?.info?.next} className="btn-next">
              Siguiente
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
