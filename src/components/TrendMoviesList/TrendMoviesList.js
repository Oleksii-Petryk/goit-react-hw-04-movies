import styles from "./TrendMoviesList.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/API";

function TrendMoviesList() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    API.fetchMovies()
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.log(error.status_message);
      });
  }, []);

  return (
    <ol className={styles.list}>
      {movies &&
        movies.map(({ id, original_title, title }) => (
          <li key={id} className={styles.item}>
            <Link
              to={{
                pathname: id && `movies/${id}`,
                state: { from: { location } },
              }}
              className={styles.link}
            >
              {original_title ? original_title : title}
            </Link>
          </li>
        ))}
    </ol>
  );
}

export default TrendMoviesList;
