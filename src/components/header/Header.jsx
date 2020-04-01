import React, { Component } from "react";
import "./Header.css";
import logo from "../../media/logo.png";
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contacts from "../../pages/contacts/Contacts";
import Blog from "../../pages/blog/Blog";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="/ReactPractics/#/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="logo"
              />
              Egor's site
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav defaultActiveKey="/" className="navigation mr-auto">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/about"> About us </NavLink>
                <NavLink to="/contacts"> Contacts </NavLink>
                <NavLink to="/blog"> Blog </NavLink>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Что ищем?"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Искать</Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default Header;
