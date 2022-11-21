import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./form.css";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import { DropDown } from "../DropDown";
import axios from "axios";
import Select from "react-select";
import * as yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import validator from "validator";
import ScrollToTop from 'react-scroll-to-top';

const companySize = [
  { value: "1 - 50", label: "1 - 50" },
  { value: "51 - 100", label: "51 - 100" },
  { value: "101 - 500", label: "101 - 500" },
  { value: "501 - 1000", label: "501 - 1000" },
  { value: "1001 - 5000", label: "1001 - 5000" },
  { value: "5001 - 10000", label: "5001 - 10000" },
];

const roles = [
  { value: "1 - 5", label: "1 - 5" },
  { value: "6 - 10", label: "6 - 10" },
  { value: "11 - 20", label: "11 - 20" },
  { value: "21 - 50", label: "21 - 50" },
  { value: "50+", label: "50+" },
];

const devRoles = [
  { value: "Devops Engineer", label: "Devops Engineer" },
  { value: "React JS Developer", label: "React Js Developer" },
  { value: "Node JS Developer", label: "Node JS Developer" },
  { value: "Full Stack Developer", label: "Full Stack Developer" },
  { value: "Java Spring Boot Developer", label: "Java Spring Boot Developer" },
];

const validate = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("email is invalid").required("email is required"),
  contactnumber: yup
    .number("contact number can include numbers only")
    .required("contact number is required"),
  companyname: yup.string().required("company name is required"),
  companysize: yup.string().required("company size is required"),
  roles: yup.string().required("roles is required"),
  websitelink: yup
    .string()
    .url("url is invalid")
    .required("website link is required"),
  lookingfor: yup.string().required("Developer roles is required"),
  budget: yup.string().required("budget is required"),
  aboutus: yup.string().required("about us is required"),
  comments: yup.string().required("comments is required"),
});



const Form = () => {
  const [err, setErr] = useState({
    name: "",
    email: "",
    contactnumber: "",
    companyname: "",
    websitelink: "",
    companysize: "",
    roles: "",
    lookingfor: "",
    budget: "",
    aboutus: "",
    comments: "",
  });

  const [data, setData] = useState([]);

  const [id, setId] = useState(0);

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setFieldData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const ApiCallOnNext = () => {
    axios
      .post(`http://localhost:8080/api/formdata/userdetails/${id}`, values)
      .then((res) => setId(res.data.id))
      .then((res) => setData([...res.data]))
      .catch((err) => console.log(err));
  };

  const [toggleErr, setToggleErr] = useState(0);
  const [count, setCount] = useState(0)


  const onSubmit = () => {
    console.log("first");
    axios.post(`http://localhost:8080/api/formdata/visitordata/${id}`, values)
      .then((res) => setData([...res.data]))
      .catch((err) => console.log(err));
  };

  const OnToggle = () => {
    setToggleErr(1)
  }

  const { values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactnumber: "",
      companyname: "",
      websitelink: "",
      companysize: "",
      roles: "",
      lookingfor: "",
      budget: "",
      aboutus: "",
      comments: "",
    },
    validationSchema: validate,
    onSubmit
  });

  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    companyname: "",
    websitelink: "",
    companysize: "",
    roles: "",
    lookingfor: "",
    budget: "",
    aboutus: "",
    comments: "",
  });


  useEffect(() => {
    setFieldData(values);
  }, []);


  const handleField = (val, identity) => {
    if (!val && identity == "name") {
      setErr((prev) => ({ ...prev, name: "name is required" }));
    } else if (val && identity == "name") {
      setErr((prev) => ({ ...prev, name: "" }));
      ApiCallOnNext();
    }

    if (identity == "email") {
      if (val && !validator.isEmail(val)) {
        setErr((prev) => ({ ...prev, email: "email is not valid" }));
      } else if (!val) {
        setErr((prev) => ({ ...prev, email: "email is required" }));
      } else {
        setErr((prev) => ({ ...prev, email: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "contactnumber") {
      if (val && !validator.isNumeric(val)) {
        setErr((prev) => ({
          ...prev,
          contactnumber: "contact number is not valid",
        }));
      } else if (!val) {
        setErr((prev) => ({
          ...prev,
          contactnumber: "contact number is required",
        }));
      } else {
        setErr((prev) => ({ ...prev, contactnumber: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "companyname") {
      if (!val) {
        setErr((prev) => ({
          ...prev,
          companyname: "company name is required",
        }));
      } else {
        setErr((prev) => ({ ...prev, companyname: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "websitelink") {
      if (val && !validator.isURL(val)) {
        setErr((prev) => ({ ...prev, websitelink: "url is not valid" }));
      } else if (!val) {
        setErr((prev) => ({
          ...prev,
          websitelink: "website link is required",
        }));
      } else {
        setErr((prev) => ({ ...prev, websitelink: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "companysize") {
      if (!val) {
        setErr((prev) => ({
          ...prev,
          companysize: "company size is required",
        }));
      } else {
        setErr((prev) => ({ ...prev, companysize: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "roles") {
      if (!val) {
        setErr((prev) => ({ ...prev, roles: "roles is required" }));
      } else {
        setErr((prev) => ({ ...prev, roles: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "lookingfor") {
      if (!val) {
        setErr((prev) => ({
          ...prev,
          lookingfor: "Developer roles is required",
        }));
      } else {
        setErr((prev) => ({ ...prev, lookingfor: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "budget") {
      if (!val) {
        setErr((prev) => ({ ...prev, budget: "budget is required" }));
      } else {
        setErr((prev) => ({ ...prev, budget: "" }));
        ApiCallOnNext();
      }
    }

    if (identity == "aboutus") {
      if (!val) {
        setErr((prev) => ({ ...prev, aboutus: "about us is required" }));
      } else {
        setErr((prev) => ({ ...prev, aboutus: "" }));
        ApiCallOnNext();
      }
    }
  };


  console.log(values)

  const concatUrl = (val) => {
    let urlStart = "https://";

    if (val && count == 0) {
      values.websitelink = urlStart + values.websitelink;
    }
    setCount(1)
  };


  return (
    <form className="fields-data" onSubmit={handleSubmit}>
      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>1</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="name">Name *</label>
        </div>
        <input
          type="text"
          id="name"
          className={
            errors.name && touched.name
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
          placeholder="Type your answer here..."
        />
        {errors.name && touched.name && (
          <p className="text-danger error-message">{errors.name}</p>
        )}
        {toggleErr == false && err.name && (
          <p className="text-danger error-message">{err.name}</p>
        )}

        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.name, "name")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data" id="next-two">
        <div className="field-title">
          <div className="field-count">
            <p>2</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="email">Email *</label>
        </div>
        <input
          type="text"
          id="email"
          className={
            errors.email && touched.email
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="Type your answer here..."
        />
        {errors.email && touched.email && (
          <p className="text-danger error-message">{errors.email}</p>
        )}
        {toggleErr == false && err.email && (
          <p className="text-danger error-message">{err.email}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.email, "email")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>3</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="contact-number">Contact Number *</label>
        </div>
        <input
          type="text"
          id="contact-number"
          className={
            errors.contactnumber && touched.contactnumber
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.contactnumber}
          name="contactnumber"
          placeholder="Type your answer here..."
        />
        {errors.contactnumber && touched.contactnumber && (
          <p className="text-danger error-message">{errors.contactnumber}</p>
        )}
        {toggleErr == false && err.contactnumber && (
          <p className="text-danger error-message">{err.contactnumber}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.contactnumber, "contactnumber")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>4</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="company-name">Company Name *</label>
        </div>
        <input
          type="text"
          id="company-name"
          className={
            errors.companyname && touched.companyname
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.companyname}
          name="companyname"
          placeholder="Type your answer here..."
        />
        {errors.companyname && touched.companyname && (
          <p className="text-danger error-message">{errors.companyname}</p>
        )}
        {!toggleErr && err.companyname && (
          <p className="text-danger error-message">{err.companyname}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.companyname, "companyname")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>5</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="website-link">Website/Main Platform Link *</label>
        </div>
        <input
          type="text"
          id="website-link"
          className={
            errors.websitelink && touched.websitelink
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.websitelink}
          name="websitelink"
          placeholder="https://"
        />
        {errors.websitelink && touched.websitelink && (
          <p className="text-danger error-message">{errors.websitelink}</p>
        )}
        {!toggleErr && err.websitelink && (
          <p className="text-danger error-message">{err.websitelink}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => {
            concatUrl(values.websitelink);
            handleField(values.websitelink, "websitelink");
          }}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>6</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="company-size">Company Size *</label>
        </div>

        <Select
          name="companysize"
          className={
            errors.companysize && touched.companysize
              ? "select-input-error field-data-input"
              : "field-data-input"
          }
          placeholder="Type or select an option"
          options={companySize}
          onChange={(event) => {
            setFieldValue('companysize', event.value)
          }}
        />
        {errors.companysize && touched.companysize && (
          <p className="text-danger error-message">{errors.companysize}</p>
        )}
        {!toggleErr && err.companysize && (
          <p className="text-danger error-message">{err.companysize}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.companysize, "companysize")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>7</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="roles">
            How many roles do you need to hire for? *
          </label>
        </div>
        <Select
          name="roles"
          className={
            errors.roles && touched.roles
              ? "select-input-error field-data-input"
              : "field-data-input"
          }
          placeholder="Type or select an option"
          options={roles}
          onChange={(event) => {
            setFieldValue('roles', event.value)
          }}
        />
        {errors.roles && touched.roles && (
          <p className="text-danger error-message">{errors.roles}</p>
        )}
        {!toggleErr && err.roles && (
          <p className="text-danger error-message">{err.roles}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.roles, "roles")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>8</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="dev-role">Looking For? *</label>
        </div>

        <Select
          name="lookingfor"
          className={
            errors.lookingfor && touched.lookingfor
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          placeholder="Type or select an option"
          options={devRoles}
          onChange={(event) => {
            setFieldValue('lookingfor', event.value)
          }}
        />
        {errors.lookingfor && touched.lookingfor && (
          <p className="text-danger error-message">{errors.lookingfor}</p>
        )}
        {!toggleErr && err.lookingfor && (
          <p className="text-danger error-message">{err.lookingfor}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.lookingfor, "lookingfor")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>9</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="budget">What is your expected hourly budget? *</label>
        </div>
        <input
          type="text"
          id="budget"
          className={
            errors.budget && touched.budget
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.budget}
          name="budget"
          placeholder="Type your answer here..."
        />
        {errors.budget && touched.budget && (
          <p className="text-danger error-message">{errors.budget}</p>
        )}
        {!toggleErr && err.budget && (
          <p className="text-danger error-message">{err.budget}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.budget, "budget")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>10</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="about-us">How did you hear about us? *</label>
        </div>
        <input
          type="text"
          id="about-us"
          className={
            errors.aboutus && touched.aboutus
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.aboutus}
          name="aboutus"
          placeholder="Type your answer here..."
        />
        {errors.aboutus && touched.aboutus && (
          <p className="text-danger error-message">{errors.aboutus}</p>
        )}
        {!toggleErr && err.aboutus && (
          <p className="text-danger error-message">{err.aboutus}</p>
        )}
        <button
          className="field-next-btn btn"
          type="button"
          onClick={() => handleField(values.aboutus, "aboutus")}
        >
          <p>Next</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>

      <div className="field-data">
        <div className="field-title">
          <div className="field-count">
            <p>11</p>
            <p>
              <HiArrowSmRight className="field-arrow" />
            </p>
          </div>
          <label htmlFor="comments">
            Anything else you'd like us to know? *
          </label>
        </div>
        <input
          type="text"
          id="comments"
          className={
            errors.comments && touched.comments
              ? "input-error field-data-input no-outline"
              : "field-data-input no-outline"
          }
          onChange={handleChange}
          value={values.comments}
          name="comments"
          placeholder="Type your answer here..."
        />
        {errors.comments && touched.comments && (
          <p className="text-danger error-message">{errors.comments}</p>
        )}
        <button className="field-next-btn btn" type="submit" onClick={() => {OnToggle(); handleField()}}>
          <p>Submit</p>
          <p>
            <AiOutlineCheck className="field-check-btn" />
          </p>
        </button>
      </div>
    </form>
  );
};

export default Form;
