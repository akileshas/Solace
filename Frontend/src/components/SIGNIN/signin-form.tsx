import React , {useState}from 'react';
import '../SIGNIN/sigin.css';
import icons from '../../assets/icons';
//import images from '../../assets/images';

const SignInForm = () => {
    const [formData , setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        agreeTerms: false
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

    return (
      
        <div className="signup-container">
          <h1>Welcome to Solace.</h1>
          <h2>Register an new account!</h2>
          <form >
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                // className="last-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="form-row">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                // className='confirm-password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeTerms">Agree the terms & conditions</label>
            </div>
            <button type="submit" className="signup-button">signup</button>
            <button type="button" className="google-signup">
              <img src={icons.icon8} alt="Google Icon" /> sign up with google
            </button>
          </form>
        </div>
      );
    };
    
    export default SignInForm;
