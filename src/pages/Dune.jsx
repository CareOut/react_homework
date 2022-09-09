import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { getAllBooks } from "../store/actions/actions";
import {
  selectDune,
  selectDuneError,
  selectDuneLoading,
} from "../store/selectors";
import { useEffect, useCallback } from "react";
import "../styles/dune.css";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const Dune = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectDune);
  const error = useSelector(selectDuneError);
  const loading = useSelector(selectDuneLoading);

  const requestDune = () => {
    dispatch(getAllBooks());
  };

  useEffect(() => {
    requestDune();
  }, []);

  const renderDune = useCallback(
    (books) => (
      <div key={books.id} className="Book">
        <p>{books.title}</p>
        <p>{books.year}</p>
        <p>{books.author}</p>
        <Link to={books.wiki_url}>{books.wiki_url}</Link>
      </div>
    ),
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestDune}>Retry</button>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="books">{books.map(renderDune)}</div>
    </>
  );
};
