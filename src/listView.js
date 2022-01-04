import React from "react";

class ListView extends React.Component {
    render() {
      const { items } = this.props;
  
      if (!items.length) {
          return (<div>Loading...</div>);
      }
  
  
      return  (
        <div>
            <h2> Member Details </h2>
            <hr></hr>
          <h1>{items.username}</h1>
          <p>{items.emailId}</p>
        </div>
      );
    }
  }

export default ListView;