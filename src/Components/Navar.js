import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import List from "./List";
import Contact from "./Contact";
import About from "./About";
import Insert from "./Insert";
import Update from "./Update";

export default class Navbars extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/"}>Book Inventory</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/list"}>List</Nav.Link>
                  <Nav.Link as={Link} to={"/insert"}>Insert</Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <div>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/list" element={<List/>}/>
            <Route exact path="/insert" element={<Insert/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/update/:id" element={<Update/>}/>

            </Routes>
        </div>
      </Router>
    );
  }
}
