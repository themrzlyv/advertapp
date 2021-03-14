import React, { useState } from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Global/Store'
import { updateUser } from '../../Global/Actions/User/userAction'


export interface IuserUpdate {
    name: string | undefined;
    email:string | undefined;
    avatar: string | undefined;
    about: string | undefined;
    favorites: object [] | undefined;
}


const Account = () => {

    const dispatch = useDispatch()

    const [isEdit, setisEdit] = useState(false)
    const userControl = useSelector((state:RootState) => state.user)
    const user = useSelector((state:RootState) => state.user.user)

    const costumSubmit = (data:IuserUpdate) => {
        dispatch(updateUser(data))
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required!").max(15,"Title must be max 15!"),
        email: Yup.string().email().required("Please provide correct email!"),
        about: Yup.string().required("About is required!").min(8,"About must be min 8!")
    })

    return (
        <>
            {
                userControl.error !== undefined ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="m-0 h4 text-center">Please login or register!</h4>
                            </div>
                        </div>
                    </div>
                )
                :
                userControl.user === undefined ? (<h6>loading...</h6>) : 
                (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 bg-white shadow-2">
                                <img className="img-fluid " src={user?.avatar} alt=""/>
                                <div>
                                    <Formik
                                    initialValues={{
                                        name: user?.name,
                                        email: user?.email,
                                        avatar: user?.avatar,
                                        about: user?.about,
                                        favorites: user?.favorites
                                    }}
                                    onSubmit={(values:IuserUpdate, {setSubmitting}) => {
                                        setSubmitting(true)
                                        costumSubmit(values)
                                        setSubmitting(false)
                                    }}
                                    validationSchema={validationSchema}
                                    >
                                        {({values}) => (
                                            <Form>
                                                <ul className="list-group  my-2">
                                                    <li 
                                                    className="list-group-item  d-flex     align-items-center flex-wrap justify-content-between">
                                                        <h6 
                                                        className="h6 m-0 fs-6 text-capitalize">
                                                            Name: 
                                                        </h6>
                                                        <Field 
                                                        disabled={isEdit === false ? true : false}
                                                        name="name" 
                                                        type="input" 
                                                        as="input" 
                                                        className="input-edit ms-2 w-75" />
                                                        <ErrorMessage component="h6" name="name" className="fs-6 my-1 text-danger is-invalid"/>
                                                    </li>
                                                    <li 
                                                    className="list-group-item  d-flex     align-items-center flex-wrap justify-content-between">
                                                        <h6 
                                                        className="h6 m-0 fs-6 text-capitalize">
                                                            Email: 
                                                        </h6>
                                                        <Field 
                                                        disabled={isEdit === false ? true : false}
                                                        name="email" 
                                                        type="input" 
                                                        as="input" 
                                                        className="input-edit ms-2 w-75" />
                                                        <ErrorMessage component="h6" name="email" className="fs-6 my-1 text-danger is-invalid"/>
                                                    </li>
                                                    <li 
                                                    className="list-group-item  d-flex     align-items-center flex-wrap justify-content-between">
                                                        <h6 
                                                        className="h6 m-0 fs-6 text-capitalize">
                                                            About: 
                                                        </h6>
                                                        <Field 
                                                        disabled={isEdit === false ? true : false}
                                                        name="about" 
                                                        type="input" 
                                                        as="input" 
                                                        className="input-edit fst-italic ms-2 w-75" />
                                                        <ErrorMessage component="h6" name="about" className="fs-6 my-1 text-danger is-invalid"/>
                                                    </li>
                                                    <li className="list-group-item border-bottom">
                                                        <button 
                                                        type={isEdit === true ? "button" : "submit"}
                                                        onClick={() => setisEdit(!isEdit)}
                                                        className={`btn w-100 ${isEdit === false ? "btn-warning" : "btn-success"} text-white`}>
                                                            {isEdit === false ? "Edit" : "Save"}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div className="col-lg-8  bg-white shadow-2 ">
                                {
                                    user?.favorites.length === 0 ?
                                    (<h4 className="fs-6 text-center my-2">You don't add any advert in your favorites!</h4>)
                                    :
                                    (
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Account