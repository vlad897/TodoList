import {useState, useContext} from "react";
import {Link, Redirect} from "react-router-dom";
import ContactContext from "../context/ContactContext";
import "./Detail.css";


const Detail = (props) => {

    const [edit, setEdit] = useState(false);

    const {contacts, editContact} = useContext(ContactContext);

    const index = Number(props.match.params.index) - 1;

    if(contacts.length === 0) return <Redirect to="/" />;

    const contact = contacts[index];

    const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(contact.email);

    const confirmChange = contact.name.trim() && emailValid && contact.phone.trim();

    const editChanger = () => {
        if(confirmChange) {
            setEdit(prevValue => !prevValue);
        }
    };

    const classes = ["input"];
    if(edit) classes.push("editTrue");
    else classes.push("editFalse");

    const nameClasses = ["input"];
    if(contact.name.trim() === "") nameClasses.push("error");
    else if(edit) nameClasses.push("editTrue");
    else nameClasses.push("editFalse");

    const emailClasses = ["input"];
    if(!emailValid) emailClasses.push("error");
    else if(edit) emailClasses.push("editTrue");
    else emailClasses.push("editFalse");

    const phoneClasses = ["input"];
    if(contact.phone.trim() === "") phoneClasses.push("error");
    else if(edit) phoneClasses.push("editTrue");
    else phoneClasses.push("editFalse");

    return (
        <div className="detail mt-4">
            <h1 className="text-center mb-4">Contact #{index + 1}</h1>
            <i onClick={editChanger} className={edit ? "fa fa-check float-end" : "fa fa-edit float-end"}  />
            <div className="table-padding">
                <table className="table">
                    <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td><input onChange={e => editContact(e.target.value, index, "name")} className={nameClasses.join(" ")} value={contact.name} readOnly={!edit} type="text"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td><input onChange={e => editContact(e.target.value, index, "email")} className={emailClasses.join(" ")} value={contact.email} readOnly={!edit} type="text"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Phone:</th>
                        <td><input onChange={e => editContact(e.target.value, index, "phone")} className={phoneClasses.join(" ")} value={contact.phone} readOnly={!edit} type="text"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Address:</th>
                        <td><input onChange={e => editContact(e.target.value, index, "address")} className={classes.join(" ")} value={contact.address} readOnly={!edit} type="text"/></td>
                    </tr>
                    <tr>
                        <th scope="row">City:</th>
                        <td><input onChange={e => editContact(e.target.value, index, "city")} className={classes.join(" ")} value={contact.city} readOnly={!edit} type="text"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <button disabled={edit} className="btn btn-secondary back"><Link to="/" className="go-back">Go Back</Link></button>
            </div>
        </div>
    );
};


export default Detail;