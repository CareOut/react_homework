import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { getAllBooks } from "../store/duneRequest";
import {
  selectDune,
  selectDuneError,
  selectDuneLoading,
} from "../store/selectors";
import { useEffect, useCallback } from "react";
import "../styles/dune.css";

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
        <p>{books.wiki_url}</p>
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

  return <div>{books.map(renderDune)}</div>;
};
