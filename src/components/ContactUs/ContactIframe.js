import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactIframe.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import 'react-phone-input-2/lib/style.css';
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    companyName: z.string().min(1, { message: "Company name is required" }),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }),
    feedback: z.string().min(1, { message: "Message is required" }),
})


function ContactIframe() {
    const [submitting, setSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    })
 

    const onSubmit = async (data) => {
        setSubmitting(true)
        try {
            const apiPayload = {
                firstName: data.firstName,
                lastName: data.lastName,
                countryCode: data.phoneNumber.slice(0, 2),
                contactNumber: data.phoneNumber.slice(2),
                workEmail: data.email,
                message: data.feedback,
                url: window.location.href,
                companyName: data.companyName,
            }
            const response = await fetch(
                "https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(apiPayload),
                }
            )
            const result = await response.json()
            if (response.ok) {
                alert("Form submitted successfully!")
            } else {
                alert("Form submission failed!")
            }
        } catch (error) {
            console.error("Form submission error:", error)
            alert("There was an error submitting the form. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={styles.ContactIframeBg}>
            <Container>
                <div className={styles.CntsctBgColr}>
                    <Row>
                        <Col md={6}>
                            <div className={styles.ContactAreas}>
                                <h3>Contact us</h3>
                                <h1>We're Just One Form Away From You. Fill in your details and our Experts are Happy to Assist!
                                </h1>
                            </div>

                            <div className={styles.wantSee}>
                                <img src="demo.png" alt="Demo Icon" />
                                <div className={styles.dSdhdemo}>
                                    <h5>Want to see <span>Dashboard</span> in action?</h5>
                                    <h1>Schedule a Demo</h1>
                                </div>
                            </div>

                            <div className={styles.IframeAreassectn}>
                                <div className="dmscn">
                                    <iframe
                                        src="https://app.squarespacescheduling.com/schedule.php?owner=24269515"
                                        title="Schedule Appointment"
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        style={{ maxHeight: 'none', overflow: 'hidden', height: '360px' }}
                                    ></iframe>
                                    <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.FomrDentnormCrer}>
                                <div className={styles.aformareasent}>
                                    <Form onSubmit={handleSubmit(onSubmit)} className={styles.modalFormhndl}>
                                        <Form.Group className="mb-3" controlId="formGroupFname">
                                            <Form.Label className={styles.formLaelCar}>First Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                {...register("firstName")}
                                                name="firstName"
                                                type="text"
                                                required
                                            />
                                            {errors.firstName && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupLname">
                                            <Form.Label className={styles.formLaelCar}>Last Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                {...register("lastName")}
                                                name="lastName"
                                                type="text"
                                                required
                                            />
                                            {errors.lastName && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupCname">
                                            <Form.Label className={styles.formLaelCar}>Company Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                {...register("companyName")}
                                                name="companyName"
                                                type="text"
                                                required
                                            />
                                            {errors.companyName && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.companyName.message}
                                                </p>
                                            )}
                                        </Form.Group>
                                        <Controller
                                            name="phoneNumber"
                                            control={control}
                                            render={({ field }) => (
                                                <PhoneInput
                                                    {...field}
                                                    country="us"
                                                    enableSearch
                                                    inputStyle={{ width: "100%", height: 48 }}
                                                    dropdownClass="absolute z-50"
                                                    dropdownStyle={{ width: "30vw", minWidth: 300 }}
                                                    containerClass="relative h-[48px]"
                                                />
                                            )}
                                        />
                                        {errors.phoneNumber && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.phoneNumber.message}
                                            </p>
                                        )}
                                        {/* <Form.Group className="mb-3" controlId="formGroupPhone">
                                            <Form.Label className={styles.formLaelCar}>Contact Number</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="phoneNumber"
                                                type="number"
                                                required
                                            /> 
                                        </Form.Group>*/}
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label className={styles.formLaelCar}>Work Email Id</Form.Label>
                                            <Form.Control
                                              {...register("email")}
                                                className={styles.formContrCaresd}
                                                name="email"
                                                type="email"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                {...register("feedback")}
                                                name="feedback"
                                                type="text"
                                                as="textarea"
                                                required
                                            />
                                            {errors.feedback && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.feedback}
                                                </p>
                                            )}
                                        </Form.Group>
                                        <button
                                            type="submit"
                                            className={`mt-4 w-full rounded-md px-6 py-3 text-sm font-bold uppercase text-white ${submitting
                                                ? "cursor-not-allowed bg-black"
                                                : "bg-dark hover:bg-blue-600"
                                                } shadow-md transition-colors duration-300 hover:shadow-lg`}
                                            disabled={submitting}
                                        >
                                            {submitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </Form>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactIframe;