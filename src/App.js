import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import BackForWard from './Components/BackForWard/BackForWard';
import {DropDown} from './Components/DropDown'
import BasicForm from './Components/BasicForm';

function App() {
  return (
    <div className="App">
      <div className='form' >
      <Form />
      </div>
      <div className='backforbuttons'>
        <BackForWard />
      </div>
{/* <BasicForm /> */}


    </div>
  );
}

export default App;






// import React, { useState } from 'react'
// import styled from 'styled-components';
// import './form.css'
// import { BsCheck2 } from 'react-icons/bs';
// import {AiOutlineCheck} from 'react-icons/ai'
// import { HiArrowSmRight } from 'react-icons/hi'
// import { DropDown } from '../DropDown';
// import axios from 'axios';
// import Select from 'react-select';
// import * as yup from 'yup'
// import {ErrorMessage, Formik} from 'formik';

// var height = window.innerHeight

// // const FormContent = styled.div`
// // border : 1px solid black;
// // width : 100%;
// // height : ${height};
// // display: flex;
// // align-items: center;
// // justify-content: center;
// // `

// const companySize = [
//     { value: '1 - 50', label: '1 - 50' },
//     { value: '51 - 100', label: '51 - 100' },
//     { value: '101 - 500', label: '101 - 500' },
//     { value: '501 - 1000', label: '501 - 1000'},
//     { value: '1001 - 5000', label: '1001 - 5000' },
//     { value: '5001 - 10000', label: '5001 - 10000' }
// ];

// const roles = [
//     { value: '1 - 5', label: '1 - 5' },
//     { value: '6 - 10', label: '6 - 10' },
//     { value: '11 - 20', label: '11 - 20' },
//     { value: '21 - 50', label: '21 - 50'},
//     { value: '50+', label: '50+' }
// ];

// const devRoles = [
//   { value: 'Devops Engineer', label: 'Devops Engineer' },
//   { value: 'React JS Developer', label: 'React Js Developer' },
//   { value: 'Node JS Developer', label: 'Node JS Developer' },
//   { value: 'Full Stack Developer', label: 'Full Stack Developer'},
//   { value: 'Java Spring Boot Developer', label: 'Java Spring Boot Developer' }
// ];
 
// const initialValues = {
//   name : "",
//     email : "",
//     contactnumber : "",
//     companyname : "",
//     websitelink : "",
//     companysize : "",
//     roles : "",
//     lookingfor : "",
//     budget : "",
//     aboutus : "",
//     comments : ""
// }

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//      errors.name = 'Required';
//   }
//   if (!values.email) {
//      errors.email = 'Required';
//   }
//   if (!values.contactnumber) {
//      errors.contactnumber = 'Required';
//   }
//   if (!values.companyname) {
//      errors.companyname = 'Required';
//   }
//   if (!values.websitelink) {
//     errors.websitelink = 'Required';
//   }
//   if (!values.companysize) {
//   errors.companysize = 'Required';
//   }
//   if (!values.roles) {
//     errors.roles = 'Required';
//   }
//   if (!values.lookingfor) {
//     errors.lookingfor = 'Required';
//   }
//   if (!values.budget) {
//     errors.budget = 'Required';
//   }
//   if (!values.aboutus) {
//     errors.aboutus = 'Required';
//   }
//   if (!values.comments) {
//     errors.comments = 'Required';
//   }
//   return errors;
// }

// // const handleSubmit = (values, setSubmitting) => {
// //   setTimeout(() => {
// //      alert(JSON.stringify(values, null, 2));
// //      setSubmitting(false);
// //   }, 400);
// // }

// const Field = () => {


//   const [fieldData, setFieldData] = useState({
//     name : "",
//     email : "",
//     contactnumber : "",
//     companyname : "",
//     websitelink : "",
//     companysize : "",
//     roles : "",
//     lookingfor : "",
//     budget : "",
//     aboutus : "",
//     comments : ""
//   })

//   const [count, setCount] = useState(1)

//   const [data, setData] = useState([])

//   const [id, setId] = useState(0)


//   const handleChange = (e) => {

//     const {name, value} = e.target

//     setFieldData(prevData => ({
//       ...prevData,
//       [name] : value
//     }))
    
//   }

//   const handleCompanySize = (e) => {
//     setFieldData(prevData => ({
//       ...prevData,
//       companysize : e.value
//     }))
//   }

//   const handleRoles = (e) => {
//     setFieldData(prevData => ({
//       ...prevData,
//       roles : e.value
//     }))
//   }

//   const handleLookingFor = (e) => {
//     setFieldData(prevData => ({
//       ...prevData,
//       lookingfor : e.value
//     }))
//   }

//   const concatUrl = () => {
//     let urlStart = 'https://'
//     setFieldData(prevData => ({
//       ...prevData,
//       websitelink : `${urlStart}${prevData.websitelink}`
//     }))
//   }


//   console.log(data)

//   const handleField = (e) => {
//     axios.post(`http://localhost:8080/api/formdata/userdetails/${id}`,fieldData)
//     .then(res => setId(res.data.id))
//     .then(res => setData([...res.data]))
//     .catch(err => console.log(err))
//   }

//   const handleClick = () => {

//     // axios.post(`http://localhost:8080/api/formdata/userdetails/${id}`,fieldData)
//     // .then(res => setData([...res.data]))
//     // .catch(err => console.log(err))

//     axios.post(`http://localhost:8080/api/formdata/visitordata/${id}`,fieldData)
//     .then(res => setData([...res.data]))
//     .catch(err => console.log(err))
//   }

//   const validate = yup.object({
//     name : yup.string().required('Required'),
//     email : yup.string().email('email is invalid').required('Required'),
//     contactnumber : yup.string().required('Required'),
//     companyname : yup.string().required('Required'),
//     companySize : yup.string().required('Required'),
//     roles : yup.string().required('Required'),
//     websitelink : yup.string().url('url is invalid').required('Required'),
//     lookingfor : yup.string().required('Required'),
//     budget : yup.string().required('Required'),
//     aboutus : yup.string().required('Required'),
//     comments : yup.string().required('Required')
//   })

//   return (
        

//           <Formik
//             initialValues={initialValues}
//             validationSchema={validate}
//             >
//             {
//               formik => (
//                 <div className='fields-data'>


//                     <div className='field-data'>
//                         <div className='field-title'>
//                             <div className='field-count' >
//                               <p>{count}</p>
//                               <p><HiArrowSmRight className='field-arrow' /></p>
//                             </div>
//                             <label htmlFor="name">Name *<span></span></label>
//                         </div>
//                       <input type="text" id='name' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.name} name='name' placeholder='Type your answer here...' required />
//                       <ErrorMessage name='name' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data' id='next-two'>
//                         <div className='field-title'>
//                           <div className='field-count' >
//                             <p>2</p>
//                             <p><HiArrowSmRight className='field-arrow' /></p>
//                           </div>
//                           <label htmlFor="email">Email *</label>
//                         </div>
//                       <input type="text" id='email' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.email} name='email' placeholder='Type your answer here...' />
//                       <ErrorMessage name='email' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                           <div className='field-count' >
//                             <p>3</p>
//                             <p><HiArrowSmRight className='field-arrow' /></p>
//                           </div>
//                           <label htmlFor="contact-number">Contact Number *</label>
//                       </div>
//                       <input type="text" id='contact-number' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.contactnumber} name='contactnumber' placeholder='Type your answer here...' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>4</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="company-name">Company Name *</label>
//                       </div>
//                       <input type="text" id='company-name' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.companyname} name='companyname' placeholder='Type your answer here...' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>5</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="website-link">Website/Main Platform Link *</label>
//                       </div>
//                       <input type="text" id='website-link' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.websitelink} name='websitelink' placeholder='https://' />
//                       <button className='field-next-btn btn' onClick={() => {concatUrl(); handleField()}} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>6</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="company-size">Company Size *</label>
//                       </div>
//                       <Select name='companysize' className='field-data-input' placeholder="Type or select an option"  options={companySize} onChange={handleCompanySize} />

//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>


//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                             <p>7</p>
//                             <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="roles">How many roles do you need to hire for? *</label>
//                       </div>
//                       <Select name='roles' className='field-data-input' placeholder="Type or select an option"  options={roles} onChange={handleRoles} />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>8</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="dev-role">Looking For? *</label>
//                       </div>
//                       <Select name='lookingfor' className='field-data-input' placeholder="Type or select an option"  options={devRoles} onChange={handleLookingFor} />

//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>9</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="budget">What is your expected hourly budget? *</label>
//                       </div>
//                       <input type="text" id='budget' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.budget} name='budget' placeholder='Type your answer here...' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>10</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="about-us">How did you hear about us? *</label>
//                       </div>
//                       <input type="text" id='about-us' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.aboutus} name='aboutus' placeholder='Type your answer here...' />
//                       <button className='field-next-btn btn' onClick={handleField} >
//                         <p>Next</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>

//                     <div className='field-data'>
//                       <div className='field-title'>
//                         <div className='field-count' >
//                           <p>11</p>
//                           <p><HiArrowSmRight className='field-arrow' /></p>
//                         </div>
//                         <label htmlFor="comments">Anything else you'd like us to know? *</label>
//                       </div>
//                       <input type="text" id='comments' className='field-data-input no-outline' onChange={handleChange}  value={formik.values.comments} name='comments' placeholder='Type your answer here...' />
//                       <button className='field-next-btn btn' onClick={() => { handleClick(); handleField();}} >
//                         <p>Submit</p>
//                         <p><AiOutlineCheck className='field-check-btn' /></p>
//                       </button>
//                     </div>


//                 </div>
//               )
// }
// </Formik>
//   )
// }

// export default Field


