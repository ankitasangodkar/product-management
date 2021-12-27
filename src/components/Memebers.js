import React, { useState } from "react";
import "../App.css";

const Members = ({ dpNumber, username, phoneNumber, statusUpdate }) => {
    const getInitialState = () => {
        const value = "select";
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChange1 = (e) => {
        setValue(e.target.value);
    };

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
                <h4>verified</h4>
            </td>
            <td className={`${value}`}>
                <select onChange={handleChange1} name="todos">
                    <option>Select</option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                </select>
            </td>
        </tr>
    );
}

export default Members;