import React, { useState } from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { RootState } from '../../Global/Store'


interface IuserUpdate {
    name: string;
    email:string;
    avatar: string;
    about: string;
    favorites: object []
}


const Account = () => {
    const [isEdit, setisEdit] = useState(false)
    const user = useSelector((state:RootState) => state.user)

    const costumSubmit = (data:IuserUpdate) => {
        console.log(data)
    }

    return (
        <>
            {
                user.error !== undefined ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="m-0 h4 text-center">Please login or register!</h4>
                            </div>
                        </div>
                    </div>
                )
                :
                user.user === undefined ? (<h6>loading...</h6>) : 
                (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="img-thumbnail shadow-2" src={user.user.avatar} alt=""/>
                            </div>
                            <div className="col-lg-8 bg-white shadow-2 ">
                                {
                                    user.user.favorites.length === 0 ?
                                    (<h4 className="fs-6 text-center my-2">You don't add any advert in your favorites!</h4>)
                                    :
                                    (
                                        <table className="table">
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
                            <div className="col-lg-4 mt-1">
                                <Formik
                                initialValues={{
                                    name: user.user.name,
                                    email: user.user.email,
                                    avatar: user.user.avatar,
                                    about: user.user.about,
                                    favorites: user.user.favorites
                                }}
                                onSubmit={(values:IuserUpdate, {setSubmitting}) => {
                                    setSubmitting(true)
                                    costumSubmit(values)
                                    setSubmitting(false)
                                }}
                                >
                                    {({values}) => (
                                        <Form>
                                            <ul className="list-group shadow-2 my-2">
                                                <li 
                                                className="list-group-item  d-flex     align-items-center ">
                                                    <h6 
                                                    className="h6 m-0 fs-6 text-capitalize">
                                                        Name: 
                                                    </h6>
                                                    <Field 
                                                    disabled={isEdit === false ? true : false}
                                                    name="name" 
                                                    type="input" 
                                                    as="input" 
                                                    className="input-edit ms-2 w-100" />
                                                </li>
                                                <li 
                                                className="list-group-item  d-flex     align-items-center ">
                                                    <h6 
                                                    className="h6 m-0 fs-6 text-capitalize">
                                                        Email: 
                                                    </h6>
                                                    <Field 
                                                    disabled={isEdit === false ? true : false}
                                                    name="email" 
                                                    type="input" 
                                                    as="input" 
                                                    className="input-edit ms-2 w-100" />
                                                </li>
                                                <li 
                                                className="list-group-item  d-flex     align-items-center ">
                                                    <h6 
                                                    className="h6 m-0 fs-6 text-capitalize">
                                                        About: 
                                                    </h6>
                                                    <Field 
                                                    disabled={isEdit === false ? true : false}
                                                    name="about" 
                                                    type="input" 
                                                    as="input" 
                                                    className="input-edit fst-italic ms-2 w-100" />
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
                    </div>
                )
            }
        </>
    )
}

export default Account




{/* <ul className="list-group shadow-2">
    <li className="list-group-item border-bottom d-flex align-items-center justify-content-between">
        <h6 className="h6 m-0 fs-6 text-capitalize">
            Name: 
        </h6>
        <input type="text" className="input-edit" disabled={isEdit} value="samir"/>
    </li>
    <li className="list-group-item border-bottom">
        <h6 className="h6 m-0 fs-6 text-capitalize">
            Name: {user.user.name}
        </h6>
    </li>
    <li className="list-group-item border-bottom">
        <h6 className="h6 m-0 fs-6 ">
            Email: {user.user.email}
        </h6>
    </li>
    <li className="list-group-item border-bottom d-flex align-items-center">
        <h6 className="fs-6 m-0 me-2">
            About:
        </h6>
        <p className=" m-0 fst-italic ">
            {user.user.about}
        </p>
    </li>
    <li className="list-group-item border-bottom">
        <button 
        onClick={() => setisEdit(!isEdit)}
        className={`btn w-100 ${isEdit === false ? "btn-warning" : "btn-success"} text-white`}>
            {isEdit === false ? "Edit" : "Save"}
        </button>
    </li>
</ul> */}