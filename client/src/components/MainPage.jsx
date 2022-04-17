import React, { Component } from "react";
import { Navbar, Welcome, Footer, Services,TheNFTS, Transactions} from "./";

class MainPage extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
            </div>
            <Services />
            <Transactions />
            <TheNFTS />
        </div>
    );
  }
}
export default MainPage;
