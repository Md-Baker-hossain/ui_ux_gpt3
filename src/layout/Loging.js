import React, { useState } from 'react'
import '../App.css'

const Loging = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [first_name, setFirst_name] = useState("")

    const [email, setEmail] = useState("")
    // const [emailError, setEmailError] = useState("")
    
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    


     const handleSubmit = (e) => {
        e.preventDefault();
        
        // if (emailError) {
        //   e.target.email.focus();
        //   return;
         if (passwordError) {
          e.target.password.focus();
          return;
        }else if (confirmPasswordError){
          // e.target.name.value
          e.target.confirm_password.focus();
        }
    };


    const handleFirstName = (e) => {
        const firstNameInput = e.target.value;
        setFirst_name(firstNameInput)

        if (firstNameInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
          } else if (!/.+[A-Z]+./.test(firstNameInput)) {
            setPasswordError("Password must contain at least one capital letter");
          } else {
            setPasswordError("");
          }

    }

    const handleEmail = (e) => {
        const emailInput = e.target.value
        setEmail(emailInput)
        // if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)){
        //     setEmailError("Please provide a valid email")
        // }else {
        //     setEmailError("");
        //   }
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else if (!/.+[A-Z]./.test(passwordInput)) {
           setPasswordError("Password must contain at least one capital letter");
          
        } else {
          setPasswordError("");
        }

    }

    const handleConfirmPassword = (e) => {
      const confirmPasswordInput = e.target.value;
      setConfirmPassword(confirmPasswordInput);
      if(confirmPasswordInput != password){
        setConfirmPasswordError("Confirm Password do not match");
      }else {
        setConfirmPasswordError("");
      }
    }

    const showPasswordDetail =() => {
      setShowPassword(true);
    }



  return (
   <form onSubmit = {   handleSubmit } >
 
<div className="section__padding_lg">
        <div>
            <label htmlFor="first_name" className="block  mb-4 text-sm font-medium text-xl text-white">First name</label>
            <input 
            type="text" 
            id="first_name"
            name="first_name"
            value= {first_name}
            onChange={handleFirstName}
             className="bg-gray-50 border border-gray-300 text-slate-100text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-4 text-sm font-medium text-xl text-white">Last name</label>
            <input 
            type="text" 
            id="last_name" 
            name='last_name'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
       
        <div>
            <label htmlFor="phone" className="block mb-4 text-sm font-medium text-xl text-white">Phone number</label>
            <input 
            type="tel" 
            id="phone"
            name='phone' 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="01*******"  required/>
            {/* pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" */}
        </div>
        <div className="mb-2">
        <label htmlFor="email" className="block mb-4 text-sm font-medium text-xl text-white">Email address</label>
        <input 
        type="email" 
        id="email"
        name="email"
        value={email}
        onChange={handleEmail} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
        
    </div> 
    <div className="mb-4">
        <label htmlFor="password" className="block mb-4 text-sm font-medium text-xl text-white">Password</label>
        <input 
        type={showPassword ? "text" : "password"} 
        id="password"
        name='password' 
        value={password}
        onChange={handlePassword} 
        className= {`  bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500   w-full p-2.5   dark:placeholder-gray-400 ${
          password
            ? passwordError
              ? "border-red-500"
              : "border-green-500"
            : "border-gray-300 focus:border-blue-600"
        }`} placeholder="•••••••••" required/>
          {passwordError && <span className="error-text">{passwordError}</span>}
          <button 
          type="button"
          onClick={showPasswordDetail} 
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">show password</button>

    </div> 
    <div className="mb-4">
        <label htmlFor="confirm_password" className="block mb-4 text-sm font-medium text-xl text-white">Confirm password</label>
        <input 
        type="password" 
        id="confirm_password" 
        name='confirm_password'
        value={confirmPassword}
        onChange={handleConfirmPassword}
        className={`  bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500   w-full p-2.5   dark:placeholder-gray-400 ${
          confirmPassword
            ? confirmPasswordError
              ? "border-red-500"
              : "border-green-500"
            : "border-gray-300 focus:border-blue-600"
        }`} placeholder="•••••••••" required/>
        {confirmPasswordError && <span className="error-text">{confirmPasswordError}</span>}
    </div> 
    <div className="flex items-center justify-center ">
        <div className="flex items-center h-5">
        <input 
        id="remember" 
        type="checkbox"
        name='checkbox' 
        value="" 
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-xl text-white">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
       
    </div>
   
  <div className='flex items-center justify-center mb-4 bg-blue-800'>
  <button type="submit" className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Submit</button>
 
  </div>
</form>


  )
}

export default Loging