import React, { useState } from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { postData } from '../../helpers/Api/fetchData'
import { useToasts } from 'react-toast-notifications'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'


interface Ilogin {
    email: string;
    password: string;
}

const LoginForm:React.FC = () => {

    const [isVisible, setisVisible] = useState(false)

    const {addToast} = useToasts()

    const validationSchema = Yup.object({
        email: Yup.string().email("Please provide correct email").required("Email is required!"),
        password: Yup.string().min(6,"Password must be min 6").required("Password is required!"),
    })

    const costumSubmit = async (data:Ilogin):Promise<string | void> => {
        const result = await postData(`/api/user/login` , data)
        if(result.error){
            return addToast(result.error , {appearance:'error',autoDismiss: true,})
        }
        return window.location.href = "/"
    }



    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values:Ilogin,{setSubmitting}) => {
            setSubmitting(true)
            costumSubmit(values)
            setSubmitting(false)
        }}
        >
            {({values, isSubmitting}) => (
                <Form>
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
                    <div className="form-floating mb-3 position-relative">
                        <Field
                        as="input"
                        type={isVisible === false ? "password" : "text"}
                        name="password"
                        className="form-control"
                        placeholder="Your Password"
                        autoComplete="off"
                        />
                        {
                            isVisible === false ? (<AiOutlineEye onClick={() => setisVisible(!isVisible)} fontSize={18} className="input-icon"/>)
                            :
                            (<AiOutlineEyeInvisible onClick={() => setisVisible(!isVisible)} fontSize={18} className="input-icon"/>)
                        }
                        
                        <label htmlFor="Your Password">Your Password</label>
                        <ErrorMessage component="h6" name="password" className="fs-6 my-1 text-danger is-invalid"/>
                    </div>
                    <div className="form-floating mb-3">
                        <button 
                        disabled={isSubmitting}
                        className="btn bg-success text-white shadow-5"
                        type="submit">
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm
