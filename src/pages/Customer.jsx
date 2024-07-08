import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const VISIBLE_FIELDS = [
  "title",
  "company",
  "director",
  "year",
  "cinematicUniverse",
];

export default function Customer() {
  function useMovieData() {
    const data = [
      {
        id: 0,
        title: "Inception",
        company: "Warner Bros",
        director: "Christopher Nolan",
        year: 2010,
        cinematicUniverse: "No",
      },
      {
        id: 1,
        title: "The Matrix",
        company: "Warner Bros",
        director: "Lana Wachowski",
        year: 1999,
        cinematicUniverse: "Yes",
      },
      {
        id: 2,
        title: "Interstellar",
        company: "Paramount Pictures",
        director: "Christopher Nolan",
        year: 2014,
        cinematicUniverse: "No",
      },
      {
        id: 3,
        title: "Avengers: Endgame",
        company: "Marvel Studios",
        director: "Anthony Russo",
        year: 2019,
        cinematicUniverse: "Yes",
      },
      {
        id: 3,
        title: "The Last of Us",
        company: "Domino Studios",
        director: "jacque Russo",
        year: 2023,
        cinematicUniverse: "Yes",
      },
    ];
    return data;
  }
  const data = useMovieData();

  const columns = React.useMemo(
    () =>
      Object.keys(data[0])
        .filter((field) => VISIBLE_FIELDS.includes(field))
        .map((field) => ({
          field,
          headerName: field.charAt(0).toUpperCase() + field.slice(1),
        })),
    [data]
  );

  return (
    <>
      {" "}
      <div className="bg-slate-50 rounded-lg">
        <Box sx={{ height: 600, width: 800 }}>
          <DataGrid
            rows={data} // Modifier cette ligne pour passer les données comme des lignes
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      </div>
    </>
  );
}
