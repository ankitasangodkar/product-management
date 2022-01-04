import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div id="form">
                <h4> Add a new record </h4>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label htmlFor="username">Username:
                        <input id="username" value={this.props.newUsername} 
                            type="text" name="username"
                            onChange={this.props.handleInputUsername} required />
                    </label>
                    <label htmlFor="emailId">Email Id:
                        <input id="emailId" value={this.props.newEmailId} 
                        type="text" name="emailId"
                        onChange={this.props.handleInputChange} required />
                    </label>
                    <label htmlFor="phoneNumber">Phone Number:
                        <input id="phoneNumber" value={this.props.newPhoneNumber} 
                        type="phone" name="phoneNumber"
                        onChange={this.props.handleInput} required  maxLength="10" />
                    </label>
                    <div className="radioGroup">
                    <label><input type="radio" name="status"  value="verified" 
                        checked={this.props.newRadioStatus === 'verified'} 
                        onChange={this.props.onStatusChanged} required />
                        Verified</label>
                    <label><input type="radio" name="status" value="non-verified"  
                        checked={this.props.newRadioStatus === 'non-verified'} 
                        onChange={this.props.onStatusChanged} required />
                        Non Verified</label>
                    </div>
                    <button className="form-submit" type="submit" value="Submit">Add Item</button>
                </form>
            </div>
        )
    }
}

export default Form;