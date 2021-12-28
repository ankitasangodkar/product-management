import React from "react";
import "../App.css";
import  memberData  from "../data";
import  Members  from "./Memebers";
import Checkbox from "./Checkbox";


class MemeberList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: memberData,
            categories: {
                verify: false,
                notVerify: false
            }
        }
    };

    handleChange2 = e => {
        const { name } = e.target;
    
        this.setState(prevState => {
          return {
            categories: {
              ...prevState.categories,
              [name]: !prevState.categories[name]
            }
          };
        });
    };

    render() {
    
        const items = memberData && this.props.items;
        let { filterNames } = this.props;

        const checkedProducts = Object.entries(this.state.categories)
        .filter(category => category[1])
        .map(category => category[0]);
      const filteredProducts = this.state.products.filter(({ category }) =>
        checkedProducts.includes(category)
      );

        return (
            <div className="memberList">
                <table>
                    <thead>
                        <tr>
                            <th> Dp Number </th>
                            <th> Username </th>
                            <th> Phone Number </th>
                            <th> Status V/NV 
                            <Checkbox
                                id="1"
                                title="verify"
                                name="verify"
                                checked={this.state.categories.verify}
                                handleChange2={this.handleChange2}
                            />
                            <Checkbox
                                id="2"
                                title="non-Verify"
                                name="notVerify"
                                handleChange2={this.handleChange2}
                                checked={this.state.categories.notVerify}
                            />
                            </th>
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
                                    verify = {data.verify}
                                    products={
                                        filteredProducts.length === 0
                                          ? this.state.products
                                          : filteredProducts
                                      }
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