import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const menuItem2Id = 101;

  return (
    <nav>
      <div className="App container-fluid display-table">
        <div className="row">
          <div className="col">
            <NavLink to="/" activeClassName="current" exact>
              <li>Home</li>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NavLink to="/fruitslist" activeClassName="current" exact>
              <li>Fruits List</li>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NavLink to="/users" activeClassName="current" exact>
              <li>User Sub Nav</li>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/ticks" activeClassName="current" exact>
              <li>Ticks</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/counter" activeClassName="current" exact>
              <li>Counter</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/functionalComponentTest/100" activeClassName="current" exact>
              <li>Route Param1</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to={`/functionalComponentTest/${menuItem2Id}`} activeClassName="current" exact>
              <li>Route Param2</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/WelcomeDialog" activeClassName="current" exact>
              <li>Welcome Dialog</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/ErrorLog" activeClassName="current" exact>
              <li>Error Log</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/ErrorDialog" activeClassName="current" exact>
              <li>Error Dialog</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/ElementRefTest" activeClassName="current" exact>
              <li>ElementRefTest</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/Superhero" activeClassName="current" exact>
              <li>Superhero</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/HttpFetchCalls" activeClassName="current" exact>
              <li>HttpFetchCalls</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/ParentComponent" activeClassName="current" exact>
              <li>Child Reference</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/AnyComponent1" activeClassName="current" exact>
              <li>Subject Recieving</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/MouseTrackingTest" activeClassName="current" exact>
              <li>Mouse Tracker</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/HookListWrapper" activeClassName="current" exact>
              <li>Hook List Wrapper</li>
          </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <NavLink to="/UseEffectTest" activeClassName="current" exact>
              <li>UseEffectTest</li>
          </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;