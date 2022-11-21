import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup';

const basicSchema = yup.object().shape({
    email : yup.string().email('please enter valid email').required('email is required'),
    age : yup.number().positive().integer().required('age is required'),
    password : yup.string().min(5).required('password is required')
})

const onSubmit = (values, actions) => {
    console.log(values, actions)
    actions.resetForm()
}

const BasicForm = () => {

    const formik = useFormik({
        initialValues : {
            email : "",
            age : "",
            password : ""
        },
        validationSchema : basicSchema,
        onSubmit,
    })

    // console.log(formik.errors)

  return (
    <div>
        <label>Email</label>
        <input type='text' className={formik.errors.email && formik.touched.email ? "input-error" : ""} name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        {formik.errors.email && formik.touched.email && <p className='text-danger' >{formik.errors.email}</p> }
        <label>Age</label>
        <input type='number' className={formik.errors.age && formik.touched.age ? "input-error" : ""} name='age' value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        {formik.errors.age && formik.touched.age && <p className='text-danger' >{formik.errors.age}</p> }
        <label>Password</label>
        <input type='password' className={formik.errors.password && formik.touched.password ? "input-error" : ""} name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        {formik.errors.password && formik.touched.password && <p className='text-danger' >{formik.errors.password}</p> }
        <button type='submit' disabled={formik.isSubmitting} onClick={formik.handleSubmit} >add</button>

    </div>
  )
}

export default BasicForm