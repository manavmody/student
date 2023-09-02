import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Login = () => {

    const { addData } = useAppContext();

    const someData = "This is some data to be sent to the context";

    const sendDataToContext = () => {
        addData(someData, 'Login');
      };

  return (
    <div className="login-container">
    <div className="sidebar">
      <div className="branding">
        <h1>My Brand</h1>
      </div>
    </div>
    <div className="login-form">
      <div className="above-login-form">
        <h1>Welcome to Our Website</h1>
        <p>Please log in to access your account.</p>
      </div>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
        <Link to="student-data">
            <button type="submit" onClick={sendDataToContext}>Submit</button>
        </Link>
          
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;