import {useState} from "react";
import ContactContext from "./ContactContext";


const ContactState = ({children}) => {

    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [nameChanged, setNameChanged] = useState(false);
    const [email, setEmail] = useState("");
    const [emailChanged, setEmailChanged] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneChanged, setPhoneChanged] = useState(false);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const addContact = (contact) => {
        const newContacts = [...contacts, contact];
        setContacts(newContacts);
    };

    const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && emailValid && phone) {
            addContact({
                name,
                email,
                phone,
                address,
                city,
                id: Date.now()
            });
            setName("");
            setNameChanged(false);
            setEmail("");
            setEmailChanged(false);
            setPhone("");
            setPhoneChanged(false);
            setAddress("");
            setCity("");
        } else {
            setNameChanged(true);
            setEmailChanged(true);
            setPhoneChanged(true);
        }
    };

    const deleteContact = (contactId) => {
        const filteredContacts = contacts.filter(el => el.id !== contactId);
        setContacts(filteredContacts);
    };

    const editContact = (value, index, type) => {
        const newContact = contacts[index];
        newContact[type] = value;

        const newContacts = [...contacts];
        newContacts[index] = newContact;

        setContacts(newContacts);
    };

    const nameClasses = ["form-control add first-input"];
    if(name.trim()) nameClasses.push("is-valid");
    else if (nameChanged && name.trim() === "") nameClasses.push("is-invalid");
    else nameClasses.splice(1);
    const emailClasses = ["form-control add"];
    if(emailValid) emailClasses.push("is-valid");
    else if (emailChanged && !emailValid) emailClasses.push("is-invalid");
    else emailClasses.splice(1);
    const phoneClasses = ["form-control add"];
    if(phone.trim()) phoneClasses.push("is-valid");
    else if (phoneChanged && phone.trim() === "") phoneClasses.push("is-invalid");
    else phoneClasses.splice(1);

    return (
        <ContactContext.Provider value={{
            contacts, setContacts,
            name, setName, nameChanged, setNameChanged, nameClasses,
            email, setEmail, emailChanged, setEmailChanged, emailClasses,
            phone, setPhone, phoneChanged, setPhoneChanged, phoneClasses,
            address, setAddress,
            city, setCity,
            handleSubmit, addContact, deleteContact, editContact}}>
            {children}
        </ContactContext.Provider>
    );
};


export default ContactState;