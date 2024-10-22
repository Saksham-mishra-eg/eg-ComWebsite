import React from 'react';

// import EmailFormDialog from "./emailforms/EmailFormDialog"
import {FaChevronRight} from "react-icons/fa";
import EmailFormDialog from "./EmailFormDialog";


const FloatingButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onSubmit=() =>{
        console.log('sbumit')
    }

    return (
        <>
            <div className="fixed bottom-10 right-0 z-[49]">
                <button
                    className="bg-[#3884C7] text-[20px] text-white p-3 rounded-l-md flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Request for Quote <FaChevronRight />
                </button>
            </div>
            <EmailFormDialog isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} center={false} />
        </>

    );
};

export default FloatingButton;
