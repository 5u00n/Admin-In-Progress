import React, { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { Container, Row } from 'reactstrap';
//import Select from 'react-select';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { getFirebaseBackend } from '../../helpers/firebase_helper';

import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
const AddSchool1 = () => {


    //const [step, setStep] = useState(1);


    const [showProgress, setshowProgress] = useState(1);





    const [step, setStep] = useState(1);


    const [formData, setFormData] = useState({
        // Initialize your form fields for all steps
        step1Data: {},
        step2Data: {},
        step3Data: {},
    });


    // Define validation schemas for each step
    const validationSchemaStepOne = Yup.object().shape({
        // Your validation schema for step one
        school_name: Yup.string().required("* School name is required"),
        school_address: Yup.string().required("* School address is required"),
        country: Yup.string().required("* Country is required"),
        state: Yup.string().required("* State is required"),
        pinCode: Yup.string().required("* Pin code is required").matches(/^\d{4,6}$/, "Pin code is not valid"),
    });

    const validationSchemaStepTwo = Yup.object().shape({
        // Your validation schema for step two
        school_logo: Yup.mixed().required("* School logo is required"),
    });

    const validationSchemaStepThree = Yup.object().shape({
        // Your validation schema for step three
    });


    // Formik initialization
    const formik = useFormik({
        ///initialValues: formData,
        initialValues: {
            // ... other initial values
            school_name: '',
            school_address: '',
            country: '',
            state: '',
            pinCode: '',
            agreement:false

        },
        validationSchema: step === 1
            ? validationSchemaStepOne
            : step === 2
                ? validationSchemaStepTwo
                : validationSchemaStepThree,
        onSubmit: (values) => {   
            //console.log("values", values);        
            step === 1?nextStep(values):step === 2?nextStep(values):handleSubmit();
        },
    });

    const nextStep = (values) => {
        
        // Save current form data and go to the next step

        
        const currentStepData = values;
        setFormData({ ...formData, [`step${step}Data`]: currentStepData });
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };



    

    let navigate = useNavigate();


    const handleSubmit = () => {
        // Combine data from all steps

        const sub3Data={
            date:new Date().toLocaleDateString(),
            agreement:"true"
        }
        setshowProgress(2);
        setFormData({ ...formData, [`step${step}Data`]:sub3Data });
        const finalData = {
            ...formData.step1Data,
            ...formData.step2Data,
            ...formData.step3Data,
        };
       

        const firebaseBackend = getFirebaseBackend();

        firebaseBackend.uploadSchoolDataWithLogo(formData.step1Data, formData.step2Data.school_logo, finalData.users)
            .then((result) => {
                //console.log('School data and images uploaded:', result);
                // Handle successful upload, e.g., navigate to another page or show a success message
                navigate("/superadmin");
            })
            .catch((error) => {
                //console.error('Error uploading school data and images:', error);
                // Handle the error, e.g., show an error message to the user
            });








       console.log("finalData", finalData);
       navigate("/superadmin");
    };


    useEffect(() => {
        document.body.className = "bg-pattern";
    });


    return (
        <React.Fragment>
            <div className="bg-overlay"></div>
            <div className="acoount-content my-5 mt-5">
                <Container>
                    <Row className='mb-1'>
                        <div className='col-md-auto'>
                            <Link to={"/superadmin"} ><i className="mdi mdi-close font-size-20 text-white " aria-hidden="true"></i></Link>

                            <span className="mx-3 text-white font-size-20  "><b>Add School ( Step {step} of 3 )</b></span>
                        </div>
                    </Row>
                    {step === 1 && <FormOne next={nextStep} formik={formik} />}

                    {step === 2 && <FormTwo prev={prevStep} next={nextStep}  formik={formik} />}

                    {step === 3 && (<FormThree prev={prevStep} showProgress={showProgress} onSubmit={handleSubmit}
                        formik={formik}  />)}

                </Container>

                
            </div>
        </React.Fragment >
    );
}






export default AddSchool1;
