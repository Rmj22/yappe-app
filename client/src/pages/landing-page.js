import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Hero from "../components/hero"
import LoginForm from "../components/LoginForm";

function landingPage() {
    return(
        <div>
            <Hero>
                <h1>YappE</h1>
            </Hero>
            <Container style={{ marginTop: 0}}>
                <Row>
                    <Col size="md-12">

                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                       <LoginForm /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default landingPage