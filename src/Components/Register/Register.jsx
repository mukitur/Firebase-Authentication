import { createUserWithEmailAndPassword } from '@firebase/auth';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSiubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;

    // reset error
    setRegisterError('');
    // reset success
    setRegisterSuccess('');

    // check password length is 6 or greater then 6
    if (password.length < 6) {
      setRegisterError('password should be minimum 6 character length');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password must contain at least one UpperCase letter');
      return;
    } else if (!termsAccepted) {
      setRegisterError('Please accept our terms & condition');
      return;
    }

    // Create User
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password, termsAccepted)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegisterSuccess(`User  Created Successfully`);
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">You can also register with:</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleFormSiubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <span
                    className="relative -top-8 -right-52 md:-right-72 "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* Show */}
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" name="terms" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Accept Terms & Conditions
                      </a>
                    </label>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              {registerError && <p className="text-red-700">{registerError}</p>}
              {registerSuccess && (
                <p className="text-green-700">{registerSuccess}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
