import React from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'


interface IPostDataType {
    title:string;
    image:any;
    consored:boolean;
    language: string [];
    tags:string ;
}


const AddPostForm:React.FC = () => {

    const uploadimage = async (file: any):Promise<any>  => {
        const data =  new FormData()
        data.append('file',file)
        data.append('upload_preset',"blogApp")
        data.append('cloud_name',"themrzlyv")
        const res = await fetch("https://api.cloudinary.com/v1_1/themrzlyv/image/upload",{
            method:"POST",
            body:data
        })
        const res2  = await res.json()
        return res2.url
    }

    const costumSubmit = (data:IPostDataType) => {
        console.log(data)
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required! ").max(15,"Title must be max 15! "),
        language: Yup.array().required("Choose languages")
    })

    return (
        <div>
            <Formik 
            initialValues={{
                title: '', 
                image: '', 
                consored: false, 
                language: [], 
                tags: ''
            }}
            onSubmit={(values:IPostDataType, {setSubmitting}) => {
                setSubmitting(true)
                costumSubmit(values)
                setSubmitting(false)
            }}
            validationSchema={validationSchema}
            >
                {({ values, isSubmitting , setFieldValue}) => (
                    <Form>
                        <div className="form-floating mb-3">
                            <Field 
                            name="title" 
                            type="input" 
                            as="input" 
                            className="form-control" 
                            placeholder="title"/>
                            <label htmlFor="title">Title</label>
                            <ErrorMessage component="h6" className="fs-6 text-warning" name="title" />
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            name="image"
                            type="file"
                            onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                                const file = event.target.files?.[0]
                                const url = await uploadimage(file)
                                values.image = url
                            }}
                            />
                        </div>
                        <div className=" mb-3">
                            <Field 
                            id="consored"
                            className="form-check-input me-2"
                            name="consored" 
                            type="checkbox" 
                            as="input" 
                            />
                            <label 
                            className="form-check-label" 
                            htmlFor="consored">
                                Is Consored
                            </label>
                        </div>
                        <div className=" mb-3">
                            <Field 
                            value="eng"
                            id="eng"
                            className="form-check-input me-2"
                            name="language" 
                            type="checkbox" 
                            as="input" 
                            />
                            <label 
                            className="form-check-label" 
                            htmlFor="eng">
                                English
                            </label>

                            <Field 
                            value="aze"
                            id="aze"
                            className="form-check-input ms-3 me-2"
                            name="language" 
                            type="checkbox" 
                            as="input" 
                            />
                            <label 
                            className="form-check-label" 
                            htmlFor="aze">
                                Azerbaijan
                            </label>

                            <Field 
                            value="russian"
                            id="rus"
                            className="form-check-input ms-3 me-2"
                            name="language" 
                            type="checkbox" 
                            as="input" 
                            />
                            <label 
                            className="form-check-label" 
                            htmlFor="rus">
                                Russian
                            </label>
                            <ErrorMessage component="h6" className="fs-6 text-warning" name="language" />
                        </div>
                        <div className=" mb-3">
                            <Field 
                            name="tags"
                            type="select"
                            as="select"
                            >
                                <option value="">Choose one of tags</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="full stack">Full stack</option>
                            </Field>
                        </div>
                        <div className="form-floating mb-3">
                            <button 
                            disabled={isSubmitting}
                            className="btn btn-outline-success" 
                            type="submit">
                                Add
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddPostForm
