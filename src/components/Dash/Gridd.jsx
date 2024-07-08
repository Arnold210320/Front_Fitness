import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const VISIBLE_FIELDS = [
  "title",
  "company",
  "director",
  "year",
  "cinematicUniverse",
];

export default function Gridd() {
  function useDemoData() {
    const data = [
      { id: 0, value: 10, label: "Classique", color: "blue" },
      { id: 1, value: 30, label: "Selfworkout", color: "red" },
      { id: 2, value: 35, label: "Build muscle", color: "white" },
      { id: 3, value: 10, label: "Premium", color: "black" },
    ];
    return data;
  }

  const data = useDemoData();

  return (
    <>
      <Typography variant="h6" gutterBottom align="center">
        Liste de presence
        <Box sx={{ height: 400, width: 1 }}>
          <DataGrid
            rows={data}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            columns={[
              { field: "label", headerName: "Nom et prenom", width: 250 },
              { field: "color", headerName: "Arrivee", width: 250 },
            ]}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      </Typography>
    </>
  );
}
