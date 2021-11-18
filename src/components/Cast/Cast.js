import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/API";
import styles from "./Cast.module.css";

const Cast = ({ movieId }) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.fetchMoviesCast(movieId)
      .then((result) => {
        if (result.cast.length !== 0) {
          setCast(result.cast);
        } else {
          Promise.reject(
            toast.error(`Movies with name "${movieId}" not found. Try again!!!`)
          );
        }
      })
      .catch((error) => {
        console.log(error.status_message);
      });
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast &&
        cast.map(
          (person) =>
            person.profile_path && (
              <li className={styles.castItem} key={person.id}>
                <img
                  className={styles.image}
                  src={`${imgPath}${person.profile_path}`}
                  alt={person.name}
                  width="150"
                />
                <p>{person.name}</p>
              </li>
            )
        )}
    </ul>
  );
};

export default Cast;
