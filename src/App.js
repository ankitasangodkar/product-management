import React from "react";
import './App.css';
import MemberList from "./components/memberList";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";


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

  handleChange(event) {
    // Get event value
    let searchValue = event.target.value;
    console.log(searchValue);

    // Set the state to trigger a re-rendering
    this.setState({ search: searchValue });
  }

  filterHandler = (event) => {
    let statusValue = event.target.value;
    console.log(statusValue);

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
              handleInputChange={this.handleInputChange}
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
