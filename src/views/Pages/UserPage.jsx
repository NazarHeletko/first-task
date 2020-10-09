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
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  Label, CardFooter,
  Modal, ModalBody, ModalFooter
} from "reactstrap";

import FormGroupMd from '../CustomComponents/FormGroupMd'

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDemo: true,
    };
    this.toggleModalDemo = this.toggleModalDemo.bind(this);
  }
  toggleModalDemo(){
    this.setState({
      modalDemo: !this.state.modalDemo
    });
  }
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card className="card-user">
                <Form>
                  <CardHeader>
                    <div className="brief-card-information">
                      <div className="avatar-wr">
                        <div className="thumbnail img-circle">
                          <img
                            alt="..."
                            src={require("assets/img/ryan.jpg")}
                          />
                          <div className="img-actions">
                            <button className="btn-img-action" type="button">Edit</button>
                          </div>
                        </div>
                      </div>
                      <h5 className="title">Sam Separd</h5>
                    </div>
                    <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo} size="sm" centered className="modal-img-update">
                      <ModalBody>
                        <h4 className="modal-img-update-title">Profile photo</h4>
                        <div className="modal-img-update-text">
                          <p>Please upload your profile photo by tapping edit button.</p>
                        </div>
                      </ModalBody>
                      <ModalFooter className="justify-content-center">
                        <Button color="primary" className="btn-link btn-block btn-lg btn" onClick={this.toggleModalDemo}>Ok</Button>
                      </ModalFooter>
                    </Modal>
                  </CardHeader>
                  <CardBody>
                    <FormGroupMd className="md-form md-form_px-0 active">
                      <Input type="email" value="sam.separd@forpeeps.eu"/>
                      <Label>Email</Label>
                    </FormGroupMd>
                    <FormGroupMd className="md-form md-form_px-0">
                      <Input type="password" />
                      <Label>New Password</Label>
                    </FormGroupMd>
                    <FormGroupMd className="md-form md-form_px-0">
                      <Input type="password" />
                      <Label>Repeat Password</Label>
                    </FormGroupMd>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      className="btn-link btn-block btn-lg"
                    >
                      Save
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
