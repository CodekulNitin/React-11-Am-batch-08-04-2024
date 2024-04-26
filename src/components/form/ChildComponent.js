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

  console.log("props.selectedRow",props.selectedRow);
  const onSubmit = (data) => {
    if (props.selectedRow === null) {
      let tempArr = [...props.tableData];
      tempArr.push(data);
      props.setTableData(tempArr);
    } else {
      const updatedItems = props.tableData.map((item) => {
        if (item === props.selectedRow) {
          return {
            ...item,
            firstName: data.firstName,
            midalName: data.midalName,
            lastName: data.lastName,
            address: data.address,
          };
        }
        return item;
      });
      props.setTableData(updatedItems);
      props.setSelectedRow(null)
    }
    reset();
    props.handleClose();
  };

  React.useEffect(() => {
    if (props.selectedRow !== null) {
      setValue("firstName", props.selectedRow?.firstName);
      setValue("midalName", props.selectedRow?.midalName);
      setValue("lastName", props.selectedRow?.lastName);
      setValue("address", props.selectedRow?.address);
    }
  }, [props.selectedRow]);
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
              onClick={()=>{
                props.handleClose()
                props.setSelectedRow(null)
                reset()
              }}
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
                {props.selectedRow === null ?"Add" :"Update"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
