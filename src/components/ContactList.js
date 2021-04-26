import {useContext} from "react";
import ContactContext from "../context/ContactContext";
import ContactForm from "./ContactForm";
import Contact from "./Contact";


const ContactList = () => {

    const {contacts} = useContext(ContactContext);

    return (
        <>
            <ContactForm />
            {contacts.length ? <Contact /> : <h1 className="text-center mt-4">No Contacts To Show</h1>}
        </>
    );
};


export default ContactList;