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
                            onChange={this.props.handleInputChange} />
                    </label>
                    <label htmlFor="phoneNumber">Phone Number:
                        <input id="phoneNumber" value={this.props.newPhoneNumber} 
                        type="text" name="phoneNumber"
                        onChange={this.props.handleInputChange} />
                    </label>
                    <button className="form-submit" type="submit" value="Submit">Add Item</button>
                </form>
            </div>
        )
    }
}

export default Form;