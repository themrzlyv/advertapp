import React, { useState } from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { uploadImage } from '../../helpers/Api/imageUploader'

interface Iregister {
    name: string;
    email: string;
    avatar: string;
    password: string;
    about: string;
}

const RegisterForm = () => {

    const [media, setmedia] = useState<File | undefined>()

    const validationSchema = Yup.object({
        name: Yup.string().min(3,"Title must be min 3").max(15,"Title must be max 15").required("Title is required! "),
        email: Yup.string().email("Please provide correct email").required("Email is required!"),
        avatar: Yup.string().required("Avatar is required!"),
        password: Yup.string().min(6,"Password must be min 6").required("Password is required!"),
        about: Yup.string().min(8,"About must be min 8").required("About is required")
    })

    const costumSubmit = (data:Iregister):void => {
        console.log(data)
    }



    return (
        <Formik
        initialValues={{
            name: '',
            email: '',
            avatar: '',
            password: '',
            about: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values:Iregister,{setSubmitting}) => {
            setSubmitting(true)
            costumSubmit(values)
            setSubmitting(false)
            setmedia(undefined)
        }}
        >
            {({values, isSubmitting}) => (
                <Form>
                    <div className="form-floating mb-3">
                        <Field
                        as="input"
                        type="input"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        autoComplete="off"
                        />
                        <label htmlFor="Your Name">Your Name</label>
                        <ErrorMessage component="h6" name="name" className="fs-6 my-1 text-danger is-invalid"/>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                        as="input"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        autoComplete="off"
                        />
                        <label htmlFor="Your Email">Your Email</label>
                        <ErrorMessage component="h6" name="email" className="fs-6 my-1 text-danger is-invalid"/>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                        as="input"
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Your Password"
                        autoComplete="off"
                        />
                        <label htmlFor="Your Password">Your Password</label>
                        <ErrorMessage component="h6" name="password" className="fs-6 my-1 text-danger is-invalid"/>
                    </div>
                    <div className=" mb-3">
                        <input 
                        name="avatar"
                        type="file"
                        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                            const file = event.target.files?.[0]
                            const url = await uploadImage(file)
                            setmedia(file)
                            values.avatar= url
                        }}
                        />
                        <ErrorMessage component="h6" name="avatar" className="fs-6 my-1 text-danger is-invalid"/>
                        <img className=" img-fluid" src={media ? URL.createObjectURL(media) : ""} alt="avatar"/>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                        as="input"
                        type="text"
                        name="about"
                        className="form-control"
                        placeholder="about"
                        autoComplete="off"
                        />
                        <label htmlFor="Your Password">About</label>
                        <ErrorMessage component="h6" name="about" className="fs-6 my-1 text-danger is-invalid"/>
                    </div>
                    <div className="form-floating mb-3">
                        <button 
                        disabled={isSubmitting}
                        className="btn bg-success text-white shadow-5"
                        type="submit">
                            Register
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm
