import React, {useEffect} from "react";
import './App.css';
import MemberList from "./components/memberList";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ListView from './listView';


//Number Validation
// function formatPhoneNumber(value) {
//   if (!value) return value;
//   const phoneNumber = value.replace(/[^\d]/g, "");
//   const phoneNumberLength = phoneNumber.length;

//   if (phoneNumberLength < 4) return phoneNumber;
//   // the formatted number
//   if (phoneNumberLength < 7) {
//     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
//   }
//   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
//     3,
//     6
//   )}-${phoneNumber.slice(6, 10)}`;
// }

// //Username Validation
// function ValidateUsername(value) {
//   if (!value) return value;
//   const username = value.replace(/^[a-zA-Z0-9._]*$/g, "");
// }

// // getting the values of local storage
// const getDatafromLS=()=>{
//   const data = localStorage.getItem('items');
//   if(data){
//     return JSON.parse(data);
//   }
//   else{
//     return []
//   }
// }

class App extends React.Component {

  userData;

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
      radioStatus: '',
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
      radioStatus: this.state.radioStatus,
      count: this.state.count
    });

    localStorage.setItem("items", JSON.stringify(items));


    this.setState({
      items,
      dpNumber: '',
      username: '',
      phoneNumber: '',
      emailId: '',
      verify: '',
      radioStatus: '',
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
    const onlyDigits =  e.target.value.replace(/\D/g, "");
    this.setState({phoneNumber: onlyDigits});
  };

  handleInputUsername = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z._]+$/; //this will admit letters, numbers and dashes
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

  onStatusChanged = (event) =>  {
    let statusValue = event.target.value;
    this.setState({ radioStatus: statusValue });
  }

  filterHandler = (event) => {
    let statusValue = event.target.value;
    this.setState({ status: statusValue });
  }

  componentWillMount() {
    // load items array from localStorage, set in state
    let itemsList = localStorage.getItem('items')
    if (itemsList) {
      this.setState({
       items: JSON.parse(itemsList)
      })
    }
  }
  componentDidUpdate() {
    // on each update, sync our state with localStorage
    localStorage.setItem('items', JSON.stringify(this.state.items))
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
        <Router>          
          <Routes>
            <Route path="/product-management" element={
              <div>
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
                  newRadioStatus={this.state.radioStatus}
                  onStatusChanged={this.onStatusChanged}
                />
              </div>
            } />
            <Route exact path="/product-management/listview" element={
            <ListView 
            items={this.state.items } 
            />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
