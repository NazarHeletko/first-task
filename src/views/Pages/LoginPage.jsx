/*!

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
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Input,
  Button,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import FormGroupMd from '../CustomComponents/FormGroupMd'


//verification code input
import ReactCodeInput from 'react-verification-code-input';


// core components
import nowLogo from "assets/img/fp-logo-full.svg";

import bgImage from "assets/img/auth-bg.jpg";
import { REDO_VERIFICATION } from "actions/auth";

import countries from '../../countries/CountryCodes'

const images = require.context('../../assets/img/new_flags', true);

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
      login: {
        countryCode: {
          dial_code: countries[0].dial_code, 
          flag: images('./'+ countries[0].code + '.svg'),
          code: countries[0].code
        },
        number: "",
        numberState: "",
        password: "",
        passwordState: "",
        passcode: "",
        passcodeState: "",
        message: "",
        isSendDisabled: true
      },
      step: "step_1",
      passcode: "111111",
      attempts: 5,
      errorMessage: ''
    };
  }

//if component recieves props
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps)
    if (nextProps.error && nextProps.error !== this.props.error) {
      this.setState({errorMessage: nextProps.error, loading: false})
    }
    if (!nextProps.verification_started && !nextProps.confirm_started && !nextProps.passcode_started) {
      console.log("step 1")
      this.setState({ step: "step_1" });
    } else if (nextProps.verification_started && !nextProps.confirm_started && !nextProps.passcode_started) {
      console.log("step 2")
      this.setState({ step: "step_2" });
    } else {
      console.log("step 3")
      this.setState({ step: "step_3" });
    }
  }

  loginCountryCode = (country) => {
    let login = this.state.login;
    login["countryCode"] = {
      dial_code: country.dial_code.replace(' ', ''), 
      flag: images('./'+ country.code + '.svg'),
      code: country.code}
    this.setState({login, errorMessage: ''})
  }

  toggleCountryCode = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    })
  }

  loginNumber = (e) => {
    let login = this.state.login;
    login["number"] = e.target.value;
    let numberRex = /^([0-9]{7,})/;
    this.setState({errorMessage: ''})
    if (numberRex.test(e.target.value)) {
      login["numberState"] = "has-success";
      login["isSendDisabled"] = false;
    } else {
      login["numberState"] = "has-danger";
      login["isSendDisabled"] = true;
    }
    this.setState({login});
  }

  loginPassword = (code) => {
    let login = this.state.login;
    this.setState({errorMessage: ''})
    login["password"] = code;
    if (code.length === 6) {
      login["passwordState"] = "has-success";
    } else {
      login["passwordState"] = "has-danger";
    }
    this.setState({login});
  }

  loginPasscode = (code) => {
    let login = this.state.login;
    login["passcode"] = code;
    this.setState({errorMessage: ''})
    if (code.length === 6) {
      login["passcodeState"] = "has-success";
    } else {
      login["passcodeState"] = "has-danger";
    }
    this.setState({login});
  }

  resetVerification() {
    this.props.dispatch({
      type: REDO_VERIFICATION,
      data: undefined,
    });
  }

  loginSubmit = async () => {
    let login = this.state.login;
    switch(this.state.step) {
      case "step_1":
        if (login["numberState"] !== "has-success") {
          login["numberState"] = "has-danger";
        } else {
          login["numberState"] = "";
          this.props.startVerification((login["countryCode"].dial_code + login.number).split("+")[1]);
        }
        break;

      case "step_2":
        if (login["passwordState"] !== "has-success") {
          login["passwordState"] = "has-danger";
        } else {
          login["passwordState"] = "";
          this.props.confirmVerification((login["countryCode"].dial_code + login.number).split("+")[1], login.password);
        }
        break;

      case "step_3":
        if (this.state.attempts === 1) {
          window.location.reload();
        }
        else if (login["passcodeState"] !== "has-success" 
        || login["passcode"] !== this.state.passcode ) {
          this.setState({
            attempts: this.state.attempts - 1
          })
          login["passcodeState"] = "has-danger";
          this.setState({errorMessage: 'incorrect passcode'})
        } else {
          login["passcodeState"] = "";
          this.props.confirmPasscode(login.passcode);
        }
        break;

      default:
        break;
    }
    this.setState({login});
  }

  componentDidMount() {
    document.body.classList.add("login-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("login-page");
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div className="content">
          <div className="login-page">
            <Container>
              <Card className="card-login auth-card">
                <Form className="auth-form was-validated-form">
                  <CardHeader>
                    <div className="logo-container">
                      <img src={nowLogo} alt="now-logo"/>
                    </div>
                  </CardHeader>
                  <CardBody id="loginBody" className="pt-0">
                    {this.state.step === "step_1" &&
                      <FormGroupMd
                        className={"md-form has-label " + this.state.login.numberState}
                      >
                        <div className={"login-phone-inputs" + (this.state.errorMessage && " error")}>
                        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggleCountryCode}>
                          <DropdownToggle caret>
                            <img src={this.state.login["countryCode"].flag} alt="Country flag"/>
                            {this.state.login["countryCode"].dial_code}
                          </DropdownToggle>
                          <DropdownMenu right>
                            { countries.sort((a, b) => {
                              return a.dial_code > b.dial_code ? 1 : -1
                            }).map((country, index) => {
                              if (country.code !== this.state.login["countryCode"].code) {
                                return (
                                  <DropdownItem key={index} onClick={() => this.loginCountryCode(country)}>
                                    <img src={images('./'+ country.code + '.svg')} alt="Country flag"/>
                                    {country.dial_code}
                                  </DropdownItem>
                                )
                              } return null
                            })}
                          </DropdownMenu>
                        </Dropdown>
                        <div className="phone-number">
                          <Input
                              value={this.state.login["number"]}
                              id="phoneInput"
                              type="tel"
                              onChange={e => this.loginNumber(e)}
                              placeholder="Phone number"
                            />
                        </div>
                        </div>
                        {this.state.errorMessage &&
                          <div className="verification-error">{this.props.error}</div>
                        }
                      </FormGroupMd>
                    }

                    {this.state.step === "step_2" &&
                      <FormGroupMd
                        className={"md-form has-label " + this.state.login.passwordState}
                      >
                        <ReactCodeInput 
                          type="number"
                          fields={6}
                          onChange={this.loginPassword}
                          className="password"
                          fieldWidth={51}
                          fieldHeight={60}
                          autoFocus={true}
                          onComplete={this.loginSubmit}
                        />
                        {this.state.errorMessage ?
                          <div className="verification-error">{this.props.error}</div>
                          :
                          <p className="code-hint text-center">Please type verification code sent to {this.state.login["number"]}</p>
                        }
                      </FormGroupMd>
                    }

                    {this.state.step === "step_3" &&
                      <FormGroupMd
                        className={"md-form has-label " + this.state.login.passcodeState}
                      >
                        <ReactCodeInput 
                          type="number"
                          fields={6}
                          onChange={this.loginPasscode}
                          className="passcode"
                          fieldWidth={51}
                          fieldHeight={60}
                          autoFocus={true}
                          onComplete={this.loginSubmit}
                          values={this.state.login["passcode"].split('')}
                        />
                        {this.state.errorMessage ?
                          <div className="passcode-error text-danger">Incorrect passcode. {this.state.attempts} attempts remaining</div>
                          :
                          <p className="code-hint text-center">Please enter your passcode</p>
                        }
                      </FormGroupMd>
                    }
                  </CardBody>

                  <CardFooter id="loginFooter" className="text-center">
                    {this.state.step === "step_1" &&
                    <>
                      {this.props.querying ?
                        (<i className="fpp-icon-spinner spinner"/>)
                        :
                        (!this.state.errorMessage && 
                          <Button
                            disabled={this.state.login["isSendDisabled"]}
                            color="primary"
                            className="btn-link btn-block btn-lg"
                            onClick={e => this.loginSubmit(e)}
                          >
                            Send code
                            </Button>
                        )
                      }
                    </>
                    }
                    {this.state.step === "step_2" &&
                      <>
                        {this.props.querying ?
                          (<i className="fpp-icon-spinner spinner"/>)
                          :
                          (!this.state.errorMessage && 
                            <Button
                          color="primary"
                          className="btn-link btn-lg"
                          onClick={e => this.resetVerification(false)}
                        >
                          Resend code
                        </Button>
                          )
                        }
                      </>
                    }
                    {this.state.step === "step_3" && this.props.querying &&
                      <i className="fpp-icon-spinner spinner"/>
                    }

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

export default LoginPage;
