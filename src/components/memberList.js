import React from "react";
import "../App.css";
import  memberData  from "../data";
import  Members  from "./Memebers";

class MemeberList extends React.Component {

    render() {
    
        const items = memberData && this.props.items;
        let { filterNames } = this.props;
        return (
            <div className="memberList">
                <table>
                    <thead>
                        <tr>
                            <th> Dp Number </th>
                            <th> Username </th>
                            <th> Phone Number </th>
                            <th> Status V/NV </th>
                            <th> Status A/R </th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberData.filter(filterNames).map((data, key) => {
                            return (
                                <Members 
                                    key={key}
                                    dpNumber = {data.dpNumber}
                                    username = {data.username}
                                    phoneNumber = {data.phoneNumber}
                                />
                            );
                        })}
                        {items.filter(filterNames).map((data, key) => {
                            return (
                                <Members 
                                    key={key}
                                    dpNumber = {1010 + data.count}
                                    username = {data.username}
                                    phoneNumber = {data.phoneNumber}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MemeberList;