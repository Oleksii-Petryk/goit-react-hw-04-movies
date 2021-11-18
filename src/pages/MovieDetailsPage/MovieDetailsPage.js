import {
  NavLink,
  useRouteMatch,
  Route,
  useParams,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import MoviesDetails from "../../components/MoviesDetails";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  const onGoBack = () => {
    history.push(location.state.from.location);
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={onGoBack}>
        back to previous page
      </button>
      <MoviesDetails />
      <div className="info">
        <ul>
          <li key={uuidv4()}>
            <NavLink
              className={styles.button}
              to={{
                pathname: `${url}/cast`,
                state: { from: { location } },
              }}
            >
              Cast
            </NavLink>
          </li>

          <li key={uuidv4()}>
            <NavLink
              className={styles.button}
              to={{
                pathname: `${url}/reviews`,
                state: { from: { location } },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
