import React, { useState } from "react";
import styles from "./QueryMovies.module.css";
import { toast } from "react-toastify";

export default function QueryMovies({ onSubmit }) {
  const [searchMovies, setSearchMovies] = useState("");

  const handleSearchChange = (e) => {
    setSearchMovies(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMovies.trim() === "") {
      return toast.error("Please enter name of requested movies");
    }

    onSubmit(searchMovies);
    setSearchMovies("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchMovies}
          onChange={handleSearchChange}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
