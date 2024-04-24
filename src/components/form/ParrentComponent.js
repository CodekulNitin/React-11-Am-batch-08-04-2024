import { Button } from "@mui/material";
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

function ParrentComponent(props) {
  const [openChildComponent, setOpenChildeComponent] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="p-2 text-end">
      {props?.userName}
      <Button
        type="button"
        variant="contained"
        onClick={() => setOpenChildeComponent(true)}
      >
        Add New
      </Button>

      {tableData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ background: "lightgray" }}>
                <TableCell>Actions</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Midal Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    setSelectedRow(row);
                  }}
                >
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["firstName"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["midalName"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["lastName"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p className="text-center  my-28">No Record Found...</p>
      )}

      <ChildComponent
        open={openChildComponent}
        handleClose={() => setOpenChildeComponent(false)}
        setTableData={setTableData}
        tableData={tableData}
      />
    </div>
  );
}

export default ParrentComponent;
