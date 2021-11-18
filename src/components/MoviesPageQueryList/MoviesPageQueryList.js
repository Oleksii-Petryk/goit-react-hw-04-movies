import styles from "./MoviesPageQueryList.module.css";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/API";

function MoviesPageQueryList({ movie }) {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    API.fetchMoviesByName(movie)
      .then((result) => {
        if (result.results.length !== 0) {
          setMovies(result.results);
        } else {
          Promise.reject(
            toast.error(`Movies with name "${movie}" not found. Try again!!!`)
          );
        }
      })
      .catch((error) => {
        console.log(error.status_message);
      });
  }, [movie]);

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

export default MoviesPageQueryList;
