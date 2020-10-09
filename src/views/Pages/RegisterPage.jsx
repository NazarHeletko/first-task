/*

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Form,
  Input,
  Button, Label
} from "reactstrap";

import FormGroupMd from '../CustomComponents/FormGroupMd'

// core components
import nowLogo from "assets/img/fp-logo-full.svg";

import bgImage from "assets/img/auth-bg.jpg";

import googleQrCode from "assets/img/google-qr-code.svg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        nameState: "",
        passwordState: "",
        confirmState: "",
        googleAuthenticatorCodeState: "",
        name: "",
        password: "",
        confirm: "",
        googleAuthenticatorCode: ""
      }
    };
  }

  registerName(e) {
    var register = this.state.register;
    register["name"] = e.target.value;
    if (/[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
      register["nameState"] = "has-success";
    } else {
      register["nameState"] = "has-danger";
    }
    this.setState({register});
  }

  registerPassword(e) {
    var register = this.state.register;
    register["password"] = e.target.value;
    if (e.target.value.length > 0) {
      register["passwordState"] = "has-success";
    } else {
      register["passwordState"] = "has-danger";
    }
    if (register["password"] === register["confirm"]) {
      register["confirmState"] = "has-success";
    } else {
      register["confirmState"] = "has-danger";
    }
    this.setState({register});
  }

  registerConfirm(e) {
    var register = this.state.register;
    register["confirm"] = e.target.value;
    if (register["password"] === register["confirm"]) {
      register["confirmState"] = "has-success";
    } else {
      register["confirmState"] = "has-danger";
    }
    this.setState({register});
  }

  registerGoogleAuthenticatorCode(e) {
    var register = this.state.register;
    register["googleAuthenticatorCode"] = e.target.value;
    if (/[0-9]/.test(e.target.value)) {
      register["googleAuthenticatorCodeState"] = "has-success";
    } else {
      register["googleAuthenticatorCodeState"] = "has-danger";
    }
    this.setState({register});
  }

  registerSubmit(e) {
    var register = this.state.register;
    if (register["nameState"] !== "has-success")
      register["nameState"] = "has-danger";
    if (register["passwordState"] !== "has-success")
      register["passwordState"] = "has-danger";
    if (register["confirmState"] !== "has-success")
      register["confirmState"] = "has-danger";
    if (register["googleAuthenticatorCodeState"] !== "has-success")
      register["googleAuthenticatorCodeState"] = "has-danger";
    this.setState({register});
  }

  componentDidMount() {
    document.body.classList.add("register-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("register-page");
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="register-page">
            <Container>
              <Card className="card-signup auth-card">
                <Form className="auth-form">
                  <CardHeader>
                    <div className="logo-container">
                      <img src={nowLogo} alt="now-logo"/>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <FormGroupMd
                      className={"md-form has-label " + this.state.register.nameState}
                    >
                      <Input
                        type="text"
                        onChange={e => this.registerName(e)}
                        required
                      />
                      <Label>Name</Label>
                    </FormGroupMd>
                    <FormGroupMd
                      className={
                        "md-form has-label " + this.state.register.passwordState
                      }
                    >
                      <Input
                        type="password"
                        autoComplete="password"
                        onChange={e => this.registerPassword(e)}
                        required
                      />
                      <Label>Password</Label>
                    </FormGroupMd>
                    <FormGroupMd
                      className={
                        "md-form has-label " + this.state.register.confirmState
                      }
                    >
                      <Input
                        type="password"
                        autoComplete="password"
                        onChange={e => this.registerConfirm(e)}
                        required
                      />
                      <Label>Repeat password</Label>
                    </FormGroupMd>
                    <FormGroupMd
                      className="text-center google-qr"
                    >
                      <div className="mb-2">
                        <img src={googleQrCode} alt="Google QR Code"/>
                      </div>
                      QR for Google Authenticator app
                    </FormGroupMd>
                    <FormGroupMd
                      className={
                        "md-form has-label " + this.state.register.googleAuthenticatorCodeState
                      }
                    >
                      <Input
                        type="text"
                        onChange={e => this.registerGoogleAuthenticatorCode(e)}
                        required
                      />
                      <Label>Google Authenticator code</Label>
                    </FormGroupMd>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      className="btn-link btn-block btn-lg"
                      onClick={e => this.registerSubmit(e)}
                      disabled
                    >
                      Sign up
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Container>
          </div>
        </div>
        <div
          className="full-page-background"
          style={{backgroundImage: "url(" + bgImage + ")"}}
        />
      </>
    );
  }
}

export default RegisterPage;
