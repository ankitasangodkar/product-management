import React from "react";
import './App.css';
import MemberList from "./components/memberList";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";


//Number Validation
function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

//Username Validation
function ValidateUsername(value) {
  if (!value) return value;
  const username = value.replace(/^[a-zA-Z0-9._]*$/g, "");
}


class App extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      dpNumber: '',
      username: '',
      phoneNumber: '',
      emailId: '',
      search: '',
      status: '',
      filtered: '',
      count: 1,
      verify: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      dpNumber: this.state.dpNumber,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      emailId: this.state.emailId,
      verify: this.state.verify,
      count: this.state.count
    });

    this.setState({
      items,
      dpNumber: '',
      username: '',
      phoneNumber: '',
      emailId: '',
      verify: '',
      count: this.state.count + 1
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  //PhoneNumber
  handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    this.setState({phoneNumber:  formattedPhoneNumber});
  };

  handleInputUsername = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z(._)]+$/; //this will admit letters, numbers and dashes
    if (value.match(regex) || value === "") {
      this.setState({ username: value });
    }
  };

  handleChange(event) {
    // Get event value
    let searchValue = event.target.value;
    // Set the state to trigger a re-rendering
    this.setState({ search: searchValue });
  }

  filterHandler = (event) => {
    let statusValue = event.target.value;
    this.setState({ status: statusValue });
  }

  render() {
    let employees = this.props.data,
    searchString = this.state.search.trim().toLowerCase();

    const filterNames = ({ username, phoneNumber, emailId }) => {
      return (
        username.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
        phoneNumber.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
        emailId.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
      )
    };

    return (
      <div className="App">
        <header>
          <h2> Members List </h2>
          <SearchBar update={(e) => this.handleChange(e)} />
        </header>
        <MemberList
            items={this.state.items } 
            filterNames={filterNames} 
            statusUpdate={(e) => this.filterHandler(e)}
         />
        <Form handleFormSubmit={this.handleFormSubmit}
              handleInputUsername={this.handleInputUsername}
              handleInputChange={this.handleInputChange}
              handleInput={this.handleInput}
              newDpNumber={this.state.dpNumber}
              newUsername={this.state.username}
              newPhoneNumber={this.state.phoneNumber}
              newEmailId={this.state.emailId}
              newVerify={this.state.verify}
        />
      </div>
    );
  }
}

export default App;
