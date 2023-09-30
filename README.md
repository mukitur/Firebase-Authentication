# React Authentication with Firebase

Live Link:

## What we includes:

1.

### Validation:

1. length must be 6 charecter long and should be one Capital letter

if (password.length < 6) {
setRegisterError('password should be minimum 6 character length');
return;
} else if (!/[A-Z]/.test(password)) {
setRegisterError('Password must contain at least one UpperCase letter');
return;
}

### Toggle Show icon button to show input password or not

step-1: const [showPassword, setShowPassword] = useState(false); // initially dont show

step-2: we will channge input type from text and password.
if type="text" //Show the password
if type = "password" //Dont show the password

CODE IS: <input
type={showPassword ? 'text' : 'password'}
placeholder="password"
className="input input-bordered"
name="password"
required
/>

Step-3: Add an icon from react icon that if we click show then pasword will show .... toggle
CODE IS: <span onClick={() => setShowPassword(!showPassword)}>
Show
</span>

Step-4: we can use icon and toggle the shoe text by conditional rendering
CODE IS: {showPassword ? <FaEyeSlash /> : <FaEye />}

The TOTAL CODE IS:
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const [showPassword, setShowPassword] = useState(false);
<input
type={showPassword ? 'text' : 'password'}
placeholder="password"
className="input input-bordered"
name="password"
required
/>
<span
className="relative -top-8 -right-72 "
onClick={() => setShowPassword(!showPassword)} >
{/_ Show _/}
{showPassword ? <FaEyeSlash /> : <FaEye />}
</span>

### Added Terms & Conditions Checkbox below register Button

Step-1: Create input type checkbox

 <div className="flex gap-2 items-center">
                    <input type="checkbox" name="terms" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Accept Terms & Conditions
                      </a>
                    </label>
                  </div>
Step2:   const termsAccepted = e.target.terms.checked;
Step3: else if (!termsAccepted) {
      setRegisterError('Please accept our terms & condition');
      return;
    }

### Forget Password /Reset Password

Step1:
<label className="label">
<a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
Forgot password?
</a>
</label>
Step2:
const emailRef = useRef(null);

Step3: email input field add ref={emailRef}
step4:
const handleForgetPassword = () => {
// console.log('send reset email');
const email = emailRef.current.value;
// console.log(email);
if (!email) {
alert('please set an email address');
return;
} else if (
!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
) {
console.log('please enter a valid email');
return;
}
// send validation email
sendPasswordResetEmail(auth, email)
.then(() => {
alert('please check your email');
})
.catch((error) => {
console.log(error);
});
};

### Send email verification

Step1: register.jsx file inside the following function createUserWithEmailAndPassword
// Send verification email
sendEmailVerification(result.user).then(() => {
alert('please check your email and verify your account');
});

Step-2:
login.jsx page e
signInWithEmailAndPassword(auth, email, password)
.then((result) => {
const user = result.user;
console.log(user);
if (result.user.emailVerified) {
setLoginSuccess('User Login Successfully');
} else {
alert('Please verify email fitrst');
}
})
.catch((error) => {
console.error(error);
setloginError(error.message);
});
};
