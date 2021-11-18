import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../services/API";
import styles from "./MoviesDetails.module.css";
import { v4 as uuidv4 } from "uuid";

const MoviesDetails = () => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.fetchMoviesById(movieId)
      .then((result) => {
        if (result.length !== 0) {
          setMovie(result);
        } else {
          Promise.reject(
            toast.error(`There is no information about "${movieId}"`)
          );
        }
      })
      .catch((error) => {
        console.log(error.status_message);
      });
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={styles.container}>
          <img
            className={styles.img}
            src={`${imgPath}${movie.poster_path}`}
            alt={`${movie.original_title}`}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>
              {movie.original_title}({movie.release_date.slice(0, 4)})
            </h1>
            <p>
              <span className={styles.score}>User Score:</span>
              {`${movie.vote_average * 10}%`}
            </p>
            <h2>Overview</h2>
            <p className={styles.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map((genre) => (
                <span key={uuidv4()} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
