import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { Redirect } from "react-router-dom"



class SuperheroNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        power_level: "",
        place_of_birth: "",
        hobbies: "",
        image_url: ""
      },
      submitted: false
    }
  }
    handleChange = (e) => {
      let { form } = this.state
      form[e.target.name] = e.target.value
      this.setState({ form: form })
    }
  
    handleSubmit = () => {
      this.props.createNewSuperhero(this.state.form)
      this.setState({ submitted: true })
    }
  
  render() {
    return (
      <>
      <Container>
      <Form>
      {/* <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="E-Mail Address" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup> */}
      <FormGroup>
        <Label for="exampleText">Name</Label>
        <Input
          type="string"
          name="name"
          value={ this.state.form.name }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Birth Place</Label>
        <Input
          type="string"
          name="place_of_birth"
          value={ this.state.form.place_of_birth }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Power Level</Label>
        <Input
          type="sting"
          name="power_level"
          value={ this.state.form.power_level }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Hobbies</Label>
        <Input
          type="textarea"
          name="hobbies"
          value={ this.state.form.hobbies }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Image URL</Label>
        <Input
          type="string"
          name="image_url"
          value={ this.state.form.image_url }
          onChange={ this.handleChange }
          />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}
      <Button
            onClick={ this.handleSubmit }>
              Submit
      </Button>
    </Form>
    </Container>
       { this.state.submitted && <Redirect to="/superheroindex" /> }
    </>
    )
  }
}
export default SuperheroNew