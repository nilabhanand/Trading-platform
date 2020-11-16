import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Articles from "./components/Articles";
import Markets from "./components/Markets";
import Tweets from "./components/Tweets";
import Newsdata from "./components/Newsdata";
import Charts from "./components/Charts";
import "./App.css";
import Typography from "@material-ui/core/Typography";

//import { Tabs, Tab } from "react-bootstrap"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ height: 100 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class App extends Component {
  state = {
    activeTab: 0
  };

  handleChange = (event, value) => {
    this.setState({ activeTab: value });
  };
  render() {
    const { activeTab } = this.state;

    return (
      <div className="appdiv">
        <AppBar position="static">
          <Tabs
            className="tabscolor"
            value={activeTab}
            onChange={this.handleChange}
            centered
          >
            <Tab label="Terminal" />
            <Tab label="Markets" />
            <Tab label="Economic News" />
            <Tab label="Tweets" />
            <Tab label="Charts" />
          </Tabs>
          {activeTab === 0 && (
            <TabContainer> 
              {" "}
              <Newsdata />{" "}
            </TabContainer>
          )}
          {activeTab === 1 && (
            <TabContainer>
              {" "}
              <Markets />{" "}
            </TabContainer>
          )}
          {activeTab === 2 && (
            <TabContainer>
              <Articles />
            </TabContainer>
          )}
          {activeTab === 3 && (
            <TabContainer>
              <Tweets />
            </TabContainer>
          )}

        </AppBar>
      </div>
    );
  }
}

export default App;
