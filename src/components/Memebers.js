import React, { useState, useEffect } from "react";
import "../App.css";

const Members = ({ dpNumber, username, phoneNumber , verify }) => {

    const [ value, setValue ] = useState("select");

    useEffect(() => {
        getLocalTodos();
      },[]);
   
     useEffect(() => {
       saveLocalTodos();
     }, [ value ]);

      //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem('value', JSON.stringify(value))
    };

    const getLocalTodos = () => {
        let todoLocal = JSON.parse(localStorage.getItem('value'));
        setValue(todoLocal);
    };

    const statusHandler = (e) => {
        setValue(e.target.value)
    }

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
                <h4>{verify}</h4>
            </td>
            <td className={`${value}`}>
                <select onChange={statusHandler} name="todos">
                    <option value="select">Select</option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                </select>
            </td>
        </tr>
    );
}

export default Members;