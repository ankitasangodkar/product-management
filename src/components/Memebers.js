import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom';


const Members = ({ dpNumber, username, phoneNumber, emailId , verify }) => {
    const localNotes = localStorage.getItem("textareaValue");
    const statusValue = localStorage.getItem("value");

    const [ value, setValue ] = useState(statusValue);
    const [ textareaValue, setTextareaValue] = useState(localNotes);

    const statusHandler = (e) => {
        localStorage.setItem('value', e.target.value)
        setValue(e.target.value)
    }

    const textareaHandler = (e) => {
        localStorage.setItem('textareaValue', e.target.value)
        setTextareaValue(e.target.value)
    }

    const options = [
        { key: 'key-1', text: 'select' },
        { key: 'key-2', text: 'accept' },
        { key: 'key-3', text: 'reject' }
    ]


    return (
        
        <tr>
            <td>
                <h4>{dpNumber}</h4>
            </td>
            <td>
                <h4>{username}</h4>
            </td>
            <td>
                <h4>{phoneNumber}</h4>
            </td>
            <td>
                <h4>{emailId}</h4>
            </td>
            <td>
                <h4>{verify}</h4>
            </td>
            <td>
                <select value={value} onChange={statusHandler} name="todos">
                {options.map(o =>
                    <option key={o.key} value={o.key}>{o.text}</option>)
                }
                </select>
                <p>op:{value}</p>
                {value === "key-3" && <textarea placeholder="specify reason" value={textareaValue}
                 onChange={textareaHandler} />}
            </td>
            <td><Link to={{pathname: `./listView/${username}`}}>View</Link></td>
        </tr>
    );
}

export default Members;