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
