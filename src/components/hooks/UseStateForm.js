import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function UseStateForm() {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      // age: yup.number().positive().integer().required(),
    })
    .required();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let firstNameValue = watch("firstName")


  const [firstName, setFirstName] = useState("");  //
  const [lasttName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [tableData, setTableData] = useState([]);

  // const handleAddData = () => {
  //   let tempArr = [...tableData];
  //   if (firstName !== "" && lasttName !== "" && address !== "") {
  //     let tempObj = {
  //       "First Name": firstName,
  //       "Middle Name": middleName,
  //       "Last Name": lasttName,
  //       Address: address,
  //     };
  //     tempArr.push(tempObj);
  //     setTableData(tempArr);
  //     setFirstName("");
  //     setMiddleName("")
  //     setLastName("")
  //     setAddress("")
  //     setIsRequired(false);
  //   } else {
  //     setIsRequired(true);
  //   }
  // };
  
  const onSubmit = (data) =>{
    console.log("formData",data)
  }

  console.log("firstNameValue",firstNameValue);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-20 text-center justify-center flex space-x-2">
          <div>
            <TextField
            error={errors.firstName}
              label="First Name"
              size="small"
              name="firstName"
              {...register("firstName")}
       
            />
   
          </div>
          <TextField
            value={middleName}
            label="Midal Name"
            size="small"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <div>
            <TextField
              value={lasttName}
              label="Last Name"
              size="small"
              {...register("lastName")}

              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {isRequired && lasttName === "" ? (
              <p className="text-red-600">Last Name Is Required</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <TextField
              value={address}
              label="Address"
              size="small"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            {isRequired && address === "" ? (
              <p className="text-red-600">Address Is Required</p>
            ) : (
              ""
            )}
          </div>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </div>
      </form>
      {tableData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ background: "lightgray" }}>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row["First Name"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["Middle Name"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["Last Name"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.Address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p className="text-center  my-28">No Record Found...</p>
      )}
    </>
  );
}

export default UseStateForm;
