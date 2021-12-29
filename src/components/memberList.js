import React from "react";
import "../App.css";
import  memberData  from "../data";
import  Members  from "./Memebers";


class MemeberList extends React.Component {
    constructor(props){
        super(props);
        this.inputCheck=this.inputCheck.bind(this);
        this.inputCheck1=this.inputCheck1.bind(this);
        this.state = {
            verified: false,
            nonverified: false,
        }
    };

    inputCheck = () => {
        this.setState({ verified: !this.state.verified });
    }
    inputCheck1 = () => {
        this.setState({ nonverified: !this.state.nonverified });
    }

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
                            <th> Email Id </th>
                            <th> Status V/NV 
                            <label className="labelName"><input id="verify" type="checkbox" onChange={this.inputCheck} />
                               Verified</label>
                            <label className="labelName"><input id="notVerify" type="checkbox" onChange={this.inputCheck1} />
                               Non-Verified</label>
                            </th>
                            <th> Status A/R </th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberData.filter(filterNames).map((data, key) => {
                            const filterPass = this.state.verified;
                            const filterPass1 = this.state.nonverified;
                            
                            //const temp = ((!filterPass) || (filterPass && filterPass == data.verified));
                            //console.log((filterPass) ||(!filterPass && !filterPass == data.verified));

                            if(((!filterPass) || (filterPass && filterPass == data.verified)) && ((!filterPass1) || (filterPass1 && filterPass1 == data.nonverified))) {
                                return (
                                    <Members 
                                        key={key}
                                        dpNumber = {data.dpNumber}
                                        username = {data.username}
                                        phoneNumber = {data.phoneNumber}
                                        emailId = {data.emailId}
                                        verify = {data.verify}
                                    />
                                );
                            }

                        })}
                        {items.filter(filterNames).map((data, key) => {
                            return (
                                <Members 
                                    key={key}
                                    dpNumber = {1010 + data.count}
                                    username = {data.username}
                                    phoneNumber = {data.phoneNumber}
                                    emailId = {data.emailId}
                                    verify = "--"
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