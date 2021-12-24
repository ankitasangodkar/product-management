import React from "react";
import "../App.css";
import  memberData  from "../data";
import  Members  from "./Memebers";


const MemeberList = () => {
    return (
        <div className="memberList">
            <table>
                <thead>
                    <tr>
                        <th> Dp Number </th>
                        <th> Username </th>
                        <th> Phone Number </th>
                    </tr>
                </thead>
                <tbody>
                    {memberData.map((data, key) => {
                        return (
                            <Members 
                                key={key}
                                dpNumber = {data.dpNumber}
                                username = {data.username}
                                phoneNumber = {data.phoneNumber}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MemeberList;