import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginError, setloginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('login clicked');
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // Reset Error
    setloginError('');
    setLoginSuccess('');

    // Validation
    if (password.length < 6) {
      setloginError('password should be minimum 6 character length');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setloginError('Password must contain at least one UpperCase letter');
      return;
    }
    // login user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setLoginSuccess('User Login Successfully');
      })
      .catch((error) => {
        console.error(error);
        setloginError(error.message);
      });
  };

  //   Forget Password/Reset Password
  const handleForgetPassword = (e) => {
    console.log('send reset email');
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {loginSuccess && <p className="text-green-700">{loginSuccess}</p>}
            <h4>
              Are you New please{' '}
              <Link className="text-blue-800 " to="/register">
                Register
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
