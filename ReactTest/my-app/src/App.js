import React, {Suspense, lazy} from "react";
import "./App.scss";
import Headder from "./Headder/Headder";
import Headder2 from "./Headder2/Headder2";
// import Ticks from "./Ticks";
import UseEffectTest from "./UseEffectTest";
import Counter from "./Counter";
import Nav from "./Nav";
import FruitsList from "./LinkTest/FruitsList";
import FruitDetail from "./LinkTest/FruitDetail";
import Home from "./Home";
import WelcomeDialog from "./Containment/WelcomeDialog";
import ErrorLog from "./DialogContainment/ErrorLog";
import ErrorDialog from "./DialogInheritance/ErrorDialog";
import ElementRefTest from "./ElementRefTest/ElementRefTest";
import Superhero from "./ThisBindingTest/SuperHero";
import HttpFetchCalls from "./HttpFetchCalls/HttpFetchCalls";
import ParentComponent from "./ChildReference/ParentComponent";
import RecieveRxjsMessage from "./ObservableCommunication/RecieveRxjsMessage";
import MouseTrackingTest from "./Hooks/MouseTrackingTest";
import HookListWrapper from "./Hooks/HookListWrapper";

import RouterParameterTest from "./RouterParameterTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users/Users";
import Profile from "./Users/Profile";

const TicksComponent = lazy(()=> import('./Ticks'));

var theme = {
  light: { fore: "white", back: "black" },
  dark: { fore: "brown", back: "yellow" },
};

export const ThemeContextColor = React.createContext();
export const ThemeContextObject = React.createContext();

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  render() {
    return (
      <div className="App container-fluid">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <ThemeContextObject.Provider value={theme.dark}>
              <ThemeContextColor.Provider value="Light_Theme">
                {/* value="Light_Theme"> */}
                <div className=" display-table, headder">
                  <Headder />
                  <Headder2 />
                </div>
                {/* Left Menu Section */}
                <div className="row flex-grow-1 content">
                  <div className="col-2 gx-0">
                    <Nav />
                  </div>
                  {/* Content Section */}
                  <div className="col-10 gx-0">
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/fruitslist" exact component={FruitsList} />
                      {/* <Route path="/fruitdetail/:fruitid" component={FruitDetail} /> */}
                      <Route path="/fruitdetail" component={FruitDetail} />
                      <Route path="/users" component={Users} >
                        {/* <Route path="profile" exact component={Profile} /> */}
                        {/* <Route path="account" exact component={Account} /> */}
                        {/* <Route path="*" element={<FruitDetail/>} /> */}
                      </Route>
                      <Route path="/ticks" exact component={TicksComponent} />
                      <Route path="/counter" exact component={Counter} />
                      <Route
                        path="/functionalComponentTest/:pageId"
                        component={RouterParameterTest}
                        exact
                      />
                      <Route path="/WelcomeDialog" component={WelcomeDialog} />
                      <Route path="/ErrorLog" component={ErrorLog} />
                      <Route path="/ErrorDialog" component={ErrorDialog} />
                      <Route path="/ElementRefTest" component={ElementRefTest} />
                      <Route path="/Superhero" component={Superhero} />
                      <Route path="/HttpFetchCalls" component={HttpFetchCalls} />
                      <Route
                        path="/ParentComponent"
                        component={ParentComponent}
                      />
                      <Route
                        path="/AnyComponent1"
                        component={RecieveRxjsMessage}
                      />
                      <Route
                        path="/MouseTrackingTest"
                        component={MouseTrackingTest}
                      />
                      <Route
                        path="/HookListWrapper"
                        component={HookListWrapper}
                      />
                      <Route path="/UseEffectTest" exact component={UseEffectTest} />
                    </Switch>
                  </div>
                </div>
                {/* Footer Section */}
                <div className="row footer">
                  <div className="col">25th May 2021</div>
                </div>
              </ThemeContextColor.Provider>
            </ThemeContextObject.Provider>
          </Router>
        </Suspense>
      </div>
    );
  }

  // renderTags(fruitsArray) {
  //   if (fruitsArray.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>{fruitsArray.map(fruit => <li key={fruit.id}>{fruit.name}</li>)}</ul>
  //   );
  // }
}