import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      location:"",
      isSubmitted: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {

   
          return(
           
        <React.Fragment>
        <div className="row row-content">
          <div className="col-12">
            <h2>Create User</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="username" md={2}>
                  User Name:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="mobile" md={2}>
                  Mobile:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="mobile"
                    value={this.state.mobile}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="work" md={2}>
                  Work:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="work"
                    name="work"
                    placeholder="work"
                    value={this.state.work}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="timeZone" md={2}>
                  Time Zone:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="timeZone"
                    name="timeZone"
                    placeholder="timeZone"
                    value={this.state.timeZone}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="location" md={2}>
                  Location:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row tag="fieldset">
                <Col md={10}>
                  <Label>Type:</Label>
                </Col>
                <FormGroup check>
                  <Col md={10}>
                    <Label check>
                      <Input type="radio" name="radio1" /> XPO/Internal
                    </Label>
                  </Col>
                </FormGroup>
                <FormGroup check>
                  <Col md={10}>
                    <Label check>
                      <Input type="radio" name="radio1" /> Other/External
                    </Label>
                  </Col>
                </FormGroup>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="employer" md={2}>
                  Employer:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="employer"
                    name="employer"
                    placeholder="employer"
                    value={this.state.employer}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="employeeId" md={2}>
                  Employee Id:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    placeholder="employeeId"
                    value={this.state.employeeId}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="badgeId" md={2}>
                  Badge Id:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="badgeId"
                    name="badgeId"
                    placeholder="badgeId"
                    value={this.state.badgeId}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastPasswordChange" md={2}>
                  Last Password Change:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastPasswordChange"
                    name="lastPasswordChange"
                    placeholder="lastPasswordChange"
                    value={this.state.lastPasswordChange}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="passwordReset" md={2}>
                  Password Reset:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="passwordReset"
                    name="passwordReset"
                    placeholder="passwordReset"
                    value={this.state.passwordReset}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="comment" md={2}>
                  Comment:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="commentHistory" md={2}>
                  Comment History:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="commentHistory"
                    name="commentHistory"
                    placeholder="commentHistory"
                    value={this.state.commentHistory}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="status" md={2}>
                  Status:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="status"
                    name="status"
                    placeholder="status"
                    value={this.state.status}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="requestId" md={2}>
                  Request Id:
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="requestId"
                    name="requestId"
                    placeholder="requestId"
                    value={this.state.requestId}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            {this.state.isSubmitted}
          </div>
        </div>
   
        </React.Fragment>
      );
    
    
  }
}

export default CreateUser;
