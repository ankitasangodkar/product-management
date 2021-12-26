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
      searchValue: '',
      count: 1,
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
      count: this.state.count
    });

    this.setState({
      items,
      dpNumber: '',
      username: '',
      phoneNumber: '',
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

  filterNames = ({ username }) => {
    return username.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
  }

  render() {
    const {searchValue, setSearchValue} = this.state;
    return (
      <div className="App">
        <header>
          <h2> Memebers List </h2>
          <SearchBar onSearch={setSearchValue} value={searchValue} />
        </header>
        <MemberList items={this.state.items } />
        <Form handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              newDpNumber={this.state.dpNumber}
              newUsername={this.state.username}
              newPhoneNumber={this.state.phoneNumber}
        />
      </div>
    );
  }
}

export default App;
