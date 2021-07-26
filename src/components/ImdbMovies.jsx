import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import apiUrl from "../config/apiURL";
import movieApi from "../config/moviesApi";

export default function ImdbMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const { data, status } = await axios.get(apiUrl.popular);
    console.log(status);
    status === 200 && setMovies(data.results);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "poster_path",
      headerName: "Poster",
      width: 150,
      editable: true,
      renderCell: (movie) => {
        return (
          <img
            src={`${movieApi.imagePath}${movie.row.poster_path}`}
            width="40"
            height="auto"
            alt={movie.row.title}
          />
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "overview",
      headerName: "Overview",
      width: 400,
      editable: true,
    },
    {
      field: "vote_average",
      headerName: "Vote",
      width: 150,
      editable: true,
    },
    {
      field: "release_date",
      headerName: "Release",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div className="imdb__movies">
      <h3 className="text-center m-5">IMDB Movies</h3>
      <div style={{ height: "700px", width: "100%" }}>
        <DataGrid
          rows={movies}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
