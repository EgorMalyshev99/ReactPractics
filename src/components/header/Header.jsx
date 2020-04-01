import React, { Component } from "react";
import "./Header.css";
import logo from "../../media/logo.png";
import { Nav, Navbar, Container, NavbarBrand, NavLink, Form, FormControl, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <NavbarBrand href="/">
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
              <Nav className="mr-auto">
                <NavLink href="/"> Home </NavLink>
                <NavLink href="/about"> About us </NavLink>
                <NavLink href="/contacts"> Contacts </NavLink>
                <NavLink href="/blog"> Blog </NavLink>
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
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default Header;