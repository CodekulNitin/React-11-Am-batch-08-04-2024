import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function ChildComponent(props) {

    const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      address: yup.string().required(),
      // age: yup.number().positive().integer().required(),
    })
    .required();

  const {
    reset,
    setValue,
    getValues,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let tempArr = [...props.tableData];
    tempArr.push(data);
    props.setTableData(tempArr);
    reset();
    props.handleClose()
  };
  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="flex justify-end">

          <button
            type="button"
            className="text-red-600 border border-red-600 p-1 rounded px-3 text-end "
            onClick={props.handleClose}
          >
            X
          </button>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2 text-center justify-center flex space-x-2">
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
            label="Midal Name"
            size="small"
            name="midalName"
            {...register("midalName")}
          />
          <div>
            <TextField
              label="Last Name"
              error={errors.lastName}
              size="small"
              {...register("lastName")}
              name="lastName"
            />
          </div>
          <div>
            <TextField
              error={errors.address}
              label="Address"
              size="small"
              name="address"
              {...register("address")}
            />
          </div>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </div>
      </form>
        </Box>
      </Modal>
    </div>
  );
}