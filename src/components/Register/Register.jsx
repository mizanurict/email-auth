/** @format */

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {

    const [errorRegister, setErrorRegister] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      const password = e.target.password.value;
      const accepted = e.target.teams.checked;
      
      
      setErrorRegister('');
      setSuccess('');

      if (password.length < 6) {
          setErrorRegister('Password should be at least 6 characters')
          return;
      }
      else if (!/[A-Z]/.test(password)) {
        setErrorRegister('Password should be at least one Uppercase characters')
        return;
      }
      else if (!accepted) {
          setErrorRegister('Please accepted teams and condition');
          return;
      }
      
      createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
              console.log(result.user);
              setSuccess('User Create Successfully')
          })
          .catch(error => {
              console.error(error.message)
              setErrorRegister(error.message)
          });
  };

  return (
    <div>
      <h1>Please Register</h1>
      <div className="my-4 p-2 mx-auto border w-1/2">
        <form className="space-y-4 relative" onSubmit={handleRegister}>
          <input className="w-full py-2 px-4 border rounded-xl" type="email" name="email" placeholder="Enter Email" required /> <br />
                  <input className="w-full py-2 px-4 border rounded-xl" type={showPassword? 'text':"password"} name="password" placeholder="Password" id="" required /> <span className=" absolute top-14 right-4 " onClick={()=>setShowPassword(!showPassword)}>{showPassword?<IoEyeOff />:<IoEye />}</span>
                  <br />
                  <div className="text-start">
                  <input type="checkbox" name="teams" id="teams" />
                  <label className="ml-2" id="teams">Accepted Our <a href="#">Teams and Condition</a> </label>
                  </div>
          <input className="w-full btn btn-secondary" type="submit" value="Submit" />
              </form>
              
              {
                  errorRegister && <p>{errorRegister }</p>
              }
              {
                  success && <p>{success} </p>
              }
      </div>
    </div>
  );
};

export default Register;
