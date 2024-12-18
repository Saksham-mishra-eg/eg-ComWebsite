import { useForm } from "react-hook-form";
import { Modal, Button } from 'rsuite'; // Keep only relevant imports from rsuite
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {useEffect, useState} from "react";
import { FaSync } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EmailFormDialog = ({ isOpen, setIsOpen, initialEmail, center }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log(initialEmail, "initialEmail");

    useEffect(() => {
        console.log(initialEmail, 'initial Email useeffect ')
    }, [initialEmail]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            conpanyName: "",
            countryCode: "",
            contactNumber: "",
            workEmail: initialEmail || '',
            message: "",
            url: typeof window !== 'undefined' ? window.location?.href : "https://dummyurl.com",
        }
    });

    const onSubmit = async (data) => {
        setLoading(true);
        const apiPayload = {
            ...data,
            firstName: data.firstName || "Home Page",
            lastName: data.lastName || "Query",
            companyName: data.companyName,
            countryCode: data.companyName,
            contactNumber: data.contactNumber,
            workEmail: data.workEmail || initialEmail,
            message: data.message || "Market Intelligence Inquiry Home Page",
        };

        try {
            const response = await fetch(
                "https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(apiPayload),
                }
            );

            const result = await response.json();

            if (response.ok) {
                navigate('/thankyou');
                setIsOpen(false);
                reset();
            } else {
                alert("Form submission failed!");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handlePhoneChange = (value, country) => {
        const dialCode = country?.dialCode || "1";
        setValue("contactNumber", value);
        setValue("countryCode", dialCode);
    };

    const handleClose = () => {
        reset();
        setIsOpen(false);
    };

    return (
        <Modal open={isOpen} onClose={handleClose} centered={center}>
            <Modal.Header>
                <Modal.Title>Contact Us</Modal.Title>
                <p className="mt-2">Fill in your details and we&apos;ll get back to you shortly.</p>
            </Modal.Header>
            <Modal.Body>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5 mt-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <fieldset className="flex flex-col gap-1">
                        <label>First Name</label>
                        <input
                            type="text"
                            {...register("firstName", { required: "First name is required" })}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.firstName ? "border-red-500" : ""
                            }`}
                            disabled={loading}
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Last Name</label>
                        <input
                            type="text"
                            {...register("lastName", {required: "Last name is required"})}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.lastName ? "border-red-500" : ""
                            }`}
                            disabled={loading}
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    </fieldset>
                    </div>
                    <fieldset className="flex flex-col gap-1">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("workEmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email",
                                },
                            })}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.workEmail ? "border-red-500" : ""
                            }`}
                            disabled={loading}
                        />
                        {errors.workEmail && <span className="text-red-500">{errors.workEmail.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Phone Number</label>
                        <PhoneInput
                            country={"us"}
                            value={watch("contactNumber")}
                            onChange={handlePhoneChange}
                            inputClass={`w-full !h-[42px] !text-base rounded-lg border border-gray-200 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.contactNumber ? "!border-red-500" : ""
                            }`}
                            inputProps={{
                                name: "contactNumber",
                                required: true,
                                disabled: loading,
                            }}
                        />
                        {errors.contactNumber &&
                            <span className="text-sm text-red-500">{errors.contactNumber.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Company Name</label>
                        <input
                            type="text"
                            {...register("companyName", {required: "Company name is required"})}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.companyName ? "border-red-500" : ""
                            }`}
                            disabled={loading}
                        />
                        {errors.companyName && <span className="text-red-500">{errors.companyName.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Message</label>
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            className={`border-gray-200 min-h-[100px] rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${
                                errors.message ? "border-red-500" : ""
                            }`}
                            rows={5}
                            disabled={loading}
                        />
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                    </fieldset>

                    <div>
                    <Button appearance="primary" type="submit" loading={loading} disabled={loading}>
                            {loading ? <FaSync className="animate-spin" /> : "Submit"}
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EmailFormDialog;
