"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup.string("").required("First name is required"),
  lastName: yup.string("").required("Last name is required"),
  companyName: yup.string("").required("Company name is required"),
  email: yup
    .string("")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  details: yup.string("").required("Please enter details of request"),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      email: "",
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 5));
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      sendEmail();
      resetForm();
    },
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_gpybgdk",
        "template_v0wtheb",
        form.current,
        "pNe1Z1qeVLzNIXFdX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();

  return (
    <>
      <Paper sx={{ marginBottom: 10, border: 1 }} elevation={6}>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            id="firstName"
            name="firstName"
            label="First Name"
            type="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            sx={{ m: 1, width: "25ch" }}
            id="lastName"
            name="lastName"
            label="Last Name"
            type="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            sx={{ m: 1, width: "30ch" }}
            id="companyName"
            name="companyName"
            label="Company Name"
            type="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
          />
          <TextField
            sx={{ m: 1, width: "20ch" }}
            id="phone"
            name="phone"
            label="Phone Number"
            type="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            sx={{ m: 1, width: "30ch" }}
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ m: 1, width: "50ch" }}
            id="details"
            name="details"
            label="Details"
            type="details"
            multiline
            rows={4}
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.details && Boolean(formik.errors.details)}
            helperText={formik.touched.details && formik.errors.details}
          />
          <Button
            sx={{ m: 1 }}
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default ContactForm;
