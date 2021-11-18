import QueryMovies from "../../components/QueryMovies";
import MoviesPageQueryList from "../../components/MoviesPageQueryList/MoviesPageQueryList";
import { useHistory, useLocation } from "react-router";

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();

  const locationQuery = new URLSearchParams(location.search).get("query");

  const onChange = (nameMovie) => {
    history.push({
      ...location,
      search: `query=${nameMovie}`,
    });
  };

  return (
    <>
      <QueryMovies onSubmit={onChange} />
      {locationQuery && <MoviesPageQueryList movie={locationQuery} />}
    </>
  );
};

export default MoviesPage;
