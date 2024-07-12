import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../components/SideBar/Index";
import NavBar from "../components/Navbar/Index";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Dumbbell } from "lucide-react";

const VISIBLE_FIELDS = [
  "id",
  "name",
  "age",
  "sexe",
  "weight",
  "goals",
  "subscription",
  "delaiRestant",
];

export default function Customer() {
  const [isOpen, setIsOpen] = useState(true);
  function useMovieData() {
    const data = [
      {
        id: 0,
        name: "Alice",
        age: 30,
        sexe: "F",
        weight: 55,
        goals: "Lose weight",
        subscription: "Premium",
        delaiRestant: "15 Jours",
      },
      {
        id: 1,
        name: "Bob",
        age: 25,
        sexe: "M",
        weight: 70,
        goals: "Build muscle",
        subscription: "Gold",
        delaiRestant: "24 Jours",
      },
      {
        id: 2,
        name: "Charlie",
        age: 35,
        sexe: "M",
        weight: 65,
        goals: "Stay fit",
        subscription: "Silver",
        delaiRestant: "29 Jours",
      },
      {
        id: 3,
        name: "Ben",
        age: 21,
        sexe: "M",
        weight: 65,
        goals: "Stay fit",
        subscription: "Build",
        delaiRestant: "10 Jours",
      },
      {
        id: 4,
        name: "Arnold",
        age: 23,
        sexe: "M",
        weight: 60,
        goals: "Build muscle",
        subscription: "Silver",
        delaiRestant: "5 Jours",
      },
      {
        id: 5,
        name: "Ohrel",
        age: 30,
        sexe: "M",
        weight: 75,
        goals: "Stay fit",
        subscription: "Premium",
        delaiRestant: "24 Jours",
      },
      {
        id: 6,
        name: "Danielle",
        age: 20,
        sexe: "F",
        weight: 60,
        goals: "Stay fit",
        subscription: "Gold",
        delaiRestant: "21 Jours",
      },
      {
        id: 7,
        name: "Christian",
        age: 20,
        sexe: "M",
        weight: 80,
        goals: "Stay fit",
        subscription: "Silver",
        delaiRestant: "19 Jours",
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
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <SideBar />}
      <div
        className={`${
          !isOpen
            ? " bg-gray-50 rounded-3xl mb-4 mt-20"
            : " bg-gray-50 rounded-3xl border-slate-50 mb-4 mt-[5rem] lg:ml-[15rem]"
        }`}
      >
        <Typography variant="h6" gutterBottom align="center">
          Liste des clients
          <Box sx={{ height: "80vh", width: 950 }}>
            <DataGrid
              rows={data}
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
        </Typography>
      </div>
    </>
  );
}
