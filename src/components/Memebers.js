import React from "react";
import "../App.css";

const Members = ({ dpNumber, username, phoneNumber }) => {
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
        </tr>
    );
}

export default Members;