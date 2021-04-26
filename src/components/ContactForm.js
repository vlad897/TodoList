import {useContext} from "react";
import ContactContext from "../context/ContactContext";
import "./ContactForm.css";


const ContactForm = () => {

    const {
        name, setName, setNameChanged, nameClasses,
        email, setEmail, setEmailChanged, emailClasses,
        phone, setPhone, setPhoneChanged, phoneClasses,
        address, setAddress,
        city, setCity,
        handleSubmit
    } = useContext(ContactContext);

    return (
        <form onSubmit={handleSubmit} className="text-center mt-4">
            <h1>Add Contact</h1>
            <input value={name} onChange={e => {
                setName(e.target.value);
                setNameChanged(true);
            }} className={nameClasses.join(" ")} placeholder="FullName*" type="text"/>
            <input value={email} onChange={e => {
                setEmail(e.target.value);
                setEmailChanged(true);
            }} className={emailClasses.join(" ")} placeholder="Email*" type="text"/>
            <input value={phone} onChange={e => {
                setPhone(e.target.value);
                setPhoneChanged(true);
            }} className={phoneClasses.join(" ")} placeholder="Phone*" type="number"/>
            <input value={address} onChange={e => setAddress(e.target.value)} className="form-control add"
                   placeholder="Address" type="text"/>
            <input value={city} onChange={e => setCity(e.target.value)} className="form-control add" placeholder="City"
                   type="text"/>
            <button className="btn btn-secondary" type="submit">Add</button>
        </form>
    );
};


export default ContactForm;