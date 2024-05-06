import React, { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CreateNewItemModal from "./CreateNewItemModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

function ItemMaster() {
  const [tableData, setTableData] = useState([]);
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleOpen = () => setOpenNewItemModal(true);
  const handleClose = () => setOpenNewItemModal(false);
  console.log("tableData", tableData);

  const handleChangeQty = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];
    console.log("tableData", tableData, tempObj, index);

    let discoutedAmt =
      (Number(row["disc%"]) * Number(e.target.value) * Number(row.price)) / 100;
    tempObj.qty = Number(e.target.value);
    tempObj.totalAmt = Number(e.target.value) * Number(row.price);
    tempObj.netAmt =
      Number(e.target.value) * Number(row.price) -
      Number(discoutedAmt) +
      Number(row.gstAmt);
    temp[index] = tempObj;
    setTableData(temp);
  };

  return (
    <div>
      <div className="text-end m-2">
        <CommonButton
          type="button"
          label="+ Add New"
          className="bg-blue-900 text-white"
          onClick={handleOpen}
        />
      </div>
      <div className="px-2">
        {tableData.length > 0 ? (
          <TableContainer
            component={Paper}
            sx={{ height: 300, border: "1px solid lightgray" }}
            className=""
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow sx={{ background: "lightgray" }}>
                  <TableCell>Actions</TableCell>
                  <TableCell>ItemName</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>TotalAmt</TableCell>
                  <TableCell>Disc%</TableCell>
                  <TableCell>DiscAmt</TableCell>
                  <TableCell>Gst%</TableCell>
                  <TableCell>GstAmt</TableCell>
                  <TableCell>NetAmt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedRow(row);
                          setOpenNewItemModal(true);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row["itemName"]}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <input
                        defaultValue={row["qty"]}
                        name="qty"
                        className="border rounded w-20 text-center"
                        onChange={(e) => {
                          handleChangeQty(e, row, index);
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <input
                        defaultValue={row["price"]}
                        name="price"
                        className="border rounded w-20 text-center"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.totalAmt}
                    </TableCell>
                    <TableCell>
                      <input
                        defaultValue={row["disc%"]}
                        name="disc%"
                        className="border rounded w-20 text-center"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        defaultValue={row["discAmt"]}
                        name="discAmt"
                        className="border rounded w-20 text-center"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        defaultValue={row["gst%"]}
                        name="gst%"
                        className="border rounded w-20 text-center"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        defaultValue={row["gstAmt"]}
                        name="gstAmt"
                        className="border rounded w-20 text-center"
                      />
                    </TableCell>
                    <TableCell>{row.netAmt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p className="text-center  my-28">No Record Found...</p>
        )}
      </div>

      {openNewItemModal && (
        <CreateNewItemModal
          open={openNewItemModal}
          handleClose={handleClose}
          setTableData={setTableData}
          tableData={tableData}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </div>
  );
}

export default ItemMaster;
