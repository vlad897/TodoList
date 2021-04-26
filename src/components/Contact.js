import {Link} from "react-router-dom";
import {useContext} from "react";
import ContactContext from "../context/ContactContext";
import "./Contact.css";



const Contact = () => {

    const {contacts, deleteContact} = useContext(ContactContext);

    const contactList = contacts.map((el, index) => {
        const index1 = index + 1;
        return (
            <li key={index} className="list-group-item d-flex list-item">
                <h3>{index1}.  {el.name}</h3>
                <i onClick={() => deleteContact(el.id)} className="fas fa-trash-alt" />
                <Link to={"/detail/" + index1} className="far fa-address-card" />
            </li>
        )
    });

    return (
        <>
            <h1 className="text-center mt-5">Contact List</h1>
            <ul className="list-group mt-3">
                {contactList}
            </ul>
        </>
    );
};


export default Contact;