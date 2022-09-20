import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/card.css";
import { useFormik } from "formik";

function Validate2() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      w3review: "",
      ad2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      box: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validate: (values) => {
      console.log("errors:", formik.errors);
      let errors = {};
      if (values.fname == "") errors.fname = "Fname is Required";
      if (values.fname.length < 8)
        errors.fname = "Minimum length is 8 characters";
      if (values.lname == "") errors.lname = "Lname is Required";
      if (values.lname.length < 8)
        errors.lname = "Minimum length is 8 characters";
      if (values.w3review.length < 32)
        errors.w3review = "Minimum length is 32 characters";
      if (values.city == "") errors.city = "cannot be left empty";
      if (values.zip == "") errors.zip = "Cannot be left empty";
      if (values.zip.length !== 6 || isNaN(values.zip))
        errors.zip = "Enter 6 digit number only ";
      if (values.country == "") errors.country = "cannot be left empty";
      if (document.getElementById("box").checked == false)
        errors.box = "Cannot be left empty";

      return errors;
    },
  });
  console.log(formik.values);
  return (
    <div id="contain">
      <form onSubmit={formik.handleSubmit}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <h1 id="p">Checkout</h1>
              <h2 id="p2">Shipping address</h2>
              <TableRow>
                <TableCell>
                  <label htmlFor="fname" id="p4">
                    First name<span id="p6">*</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={formik.handleChange}
                    value={formik.values.fname}
                  />
                  {formik.errors.fname ? (
                    <div style={{ color: "red" }}>{formik.errors.fname}</div>
                  ) : null}
                </TableCell>
                <TableCell>
                  <label htmlFor="lname" id="p4">
                    Last name<span id="p6">*</span>
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    onChange={formik.handleChange}
                    value={formik.values.lname}
                  />
                  {formik.errors.lname ? (
                    <div style={{ color: "red" }}>{formik.errors.lname} </div>
                  ) : null}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <label htmlFor="w3review" id="p5">
                    Address Line 1<span id="p6">*</span>
                  </label>
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    onChange={formik.handleChange}
                    value={formik.values.w3review}
                  ></textarea>
                  {formik.errors.w3review ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.w3review}{" "}
                    </div>
                  ) : null}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <label htmlFor="ad2" id="p5">
                    Address Line 2
                  </label>
                  <textarea
                    id="ad2"
                    name="ad2"
                    rows="4"
                    cols="50"
                    onChange={formik.handleChange}
                    value={formik.values.ad2}
                  ></textarea>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell>
                <label htmlFor="city" id="p4">
                  City<span id="p6">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {formik.errors.city ? (
                  <span style={{ color: "red" }}>{formik.errors.city}</span>
                ) : null}
              </TableCell>
              <TableCell>
                <label htmlFor="state" id="p4">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />
              </TableCell>
            </TableRow>
            <br />
            <TableRow>
              <TableCell>
                <label htmlFor="zip" id="p4">
                  Postal code<span id="p6">*</span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                />
                {formik.errors.zip ? (
                  <span style={{ color: "red" }}>{formik.errors.zip}</span>
                ) : null}
                <br />{" "}
              </TableCell>
              <TableCell>
                <label htmlFor="country" id="p4">
                  Country<span id="p6">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
                {formik.errors.country ? (
                  <span style={{ color: "red" }}>{formik.errors.country}</span>
                ) : null}
                <br />
              </TableCell>{" "}
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  id="box"
                  name="box"
                  value={formik.values.box}
                />
                <label for="box">
                  use this address for payment details<span id="p6">*</span>
                </label>
                {formik.errors.box ? (
                  <span style={{ color: "red" }}>{formik.errors.box}</span>
                ) : null}
                <br></br>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableRow></TableRow>
              <TableCell id="p8">
                <button id="p7" type="submit">
                  Next
                </button>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
}
export default Validate2;
