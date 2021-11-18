import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/API";
import styles from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchMoviesReviews(movieId)
      .then((result) => {
        if (result.length !== 0) {
          setReviews(result.results);
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
    <ul className={styles.reviewsList}>
      {reviews.length !== 0 ? (
        reviews.map((review) => (
          <li className={styles.reviewsItem} key={review.author}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
