import React , { Component } from 'react';
import axios from 'axios';
import './edit-user.component.css';
import user from '../user.model';
import propp from '../propp.model';//npm install -g typescript@latest
import { Navbar, Nav, NavItem, NavDropdown, Form , Button, Row, Col } from 'react-bootstrap';

class Edit_page extends Component<propp, user>{
  constructor(props: propp){
    super(props);
      this.state= {
                name: 'enter the name',
                linkedin: 'enter the Linkedin Link',
                company: 'enter the company name',
                title: 'enter the title',
                department: 'enter the department',
                location: 'enter the location',
                experience: 'enter the experience',
                skills: [],
                user: {
                  name: '',
                  linkedin: '',
                  company: '',
                  title: '',
                  department: '',
                  location: '',
                  experience: '',
                  skills: [],
                }
              }
  }
      componentDidMount()
      {
        const api = 'https://apis.getsetmatch.com/api/candidate/profile';
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTYyOTkwNzEsIm5iZiI6MTU5NjI5OTA3MSwianRpIjoiZjYyMjk2NWUtNWMzOC00NDc0LWE5NWUtMmU4NzgyNzY5YmUwIiwiZXhwIjoxNTk2OTAzODcxLCJpZGVudGl0eSI6InRhbnVqYWtoYXJheWF0OTlAZ21haWwuY29tIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.I3NTZ7V6ylen01Fj9cPC-Ct31IVSREGKm_l3iGfKB94';
        axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          this.setState({
            user: res.data
          });  
          console.log('result is: ');
          console.log(res);
          console.log();
        })
      }
      changeHandlername = (e: any) => {
        this.setState({name: e.target.value});
      }
        changeHandlerlinkedin = (e: any) => {
          this.setState({linkedin: e.target.value});
      }
        changeHandlercompany = (e: any) => {
          this.setState({company: e.target.value});
      }
      changeHandlertitle = (e: any) => {
        this.setState({title: e.target.value});
      }
      changeHandlerdepartment = (e: any) => {
        this.setState({department: e.target.value});
      }
      changeHandlerlocation = (e: any) => {
        this.setState({location: e.target.value});
      }
      changeHandlerexperience = (e: any) => {
        this.setState({experience: e.target.value});
      }
      render(){
      return (
        <div>
              <Form className="form">
                <br></br>
              <Form.Group  as={Row} controlId="formBasicEmail">
              
              <Form.Label  className="Edit-Profile">Edit Profile</Form.Label>
              </Form.Group>  
              <Form.Group className="form-field">
             
              <Form.Group  as={Row} controlId="formBasicEmail">
                <Form.Label  column sm="3" className="text">Name <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.name} name="name" onChange = { this.changeHandlername } />
                </Col>
              </Form.Group>  
            

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3" className="text">Linkedin Profile <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.linkedin} name="linkedin" onChange={ this.changeHandlerlinkedin } />
                </Col>
              
              </Form.Group>

              <Form.Group as={Row} >
                <Form.Label column sm="3" className="text">Company Name <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.company} name="company" onChange={ this.changeHandlercompany } />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="3" className="text">Title<span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.title} name="title" onChange={ this.changeHandlertitle } />
                </Col>
              </Form.Group>
                    
              <Form.Group as={Row} >
                <Form.Label column sm="3" className="text">Department <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.department} name="department" onChange={ this.changeHandlerdepartment } />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="3" className="text"> Location <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.location} name="location" onChange={ this.changeHandlerlocation } />
                </Col>
              </Form.Group>
                    
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="text">Experience <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" type="text" placeholder={this.state.experience} name="experience" onChange={ this.changeHandlerexperience } />
                </Col>
              </Form.Group>
                    
              <Form.Group as={Row} className = "">
                <Form.Label column sm="3" className="text"> Skills  <span className="required">*</span></Form.Label>
                <Col sm="7">
                <Form.Control className="input" as="textarea" type="text" placeholder={this.state.skills} name="skills"/> 
                </Col>
              </Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit" > Save </Button>
              </Form>
            </div>
      );
   }
}

export default Edit_page;