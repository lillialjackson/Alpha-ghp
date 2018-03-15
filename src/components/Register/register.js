import React from 'react';
import './register.css'

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      experienceLevel: {},
      location: ''
    };
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value.toLowerCase().trim()})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value.toLowerCase().trim()})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onExperienceLevelChange = (event) => {
    this.setState({experienceLevel: event.target.value})
  }

  onLocationChange = (event) => {

    this.setState({location: event.target.value.toLowerCase().trim()})
  }


  onSubmitSignIn = () => {
    fetch('https://damp-forest-34333.herokuapp.com/register',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        experienceLevel: this.state.experienceLevel,
        location: this.state.location
      })
    })
    .then(response => response.json())
    .then(user => {
      if (this.state.email === '' || this.state.password === '' || this.state.username === '' ||
          this.state.experienceLevel === '' || this.state.location === '' ) {
        return alert('Please fill in all fields to register');
      } else {
        alert(`Thank you ${this.state.username} for registering for Alpha!`);
        return this.props.onRouteChange('signin');
      }
    })
    .catch(err => {
      alert('Could not register user!');
    })
  }

  render(){
  return (
    // begin registration form
      <div className = 'form'>

        <h1> Setup Your Profile! </h1>

          <div className = 'basicinfo'>
              <div> <br />
                <label htmlFor="username"> Username: </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange = {this.onUsernameChange}
                  required
                  />
                  <br />
                  <label htmlFor="email"> Email: </label>
                  <input type="email"
                    name="email"
                    onChange = {this.onEmailChange}
                    required /><br />
                  <label htmlFor="password">Password: </label>
                  <input type="password"
                     name="psw"
                     id = 'password'
                     onChange = {this.onPasswordChange}
                     required /> <br />
               </div>
              <div>
                <label htmlFor="location">Location: </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange = {this.onLocationChange}
                  placeholder = 'city'
                  />
              </div> <br />


              <div>
                <label htmlFor="experience"> Experience Level: </label>
                <select onChange = {this.onExperienceLevelChange}>
                  <option value="none">--</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="elite">Elite</option>
                </select>
              </div><br />

              <button onClick ={this.onSubmitSignIn} className= 'button'> Submit </button>

            </div>


      </div>




  )

}



}
export default Register;
