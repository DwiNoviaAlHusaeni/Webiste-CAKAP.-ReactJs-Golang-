import '../App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import PKM2 from './foto/PKM2.png';
import facebook from './foto/facebook.png';
import google from './foto/google.png';
import user from './foto/user.png';
import padlock from './foto/padlock.png'
import telephone from './foto/telephone.png';
import envelope from './foto/envelope.png'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [telp, setTelp] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = () => {
        const data = {
          name: name,
          email: email,
          telp: telp,
          password: password
        }
    
        console.log(data)
    
        Axios.post("http://localhost:8000/api/register", data).then(() => {
          console.log("success")
        }).catch(err => {
          console.log(err)
        })
        
        alert("Register Berhasil");
      setRedirect(true);
    }
    if (redirect) {
      window.location = "/Login"
}
    
    useEffect(() => {
        console.log(name)
    }, [name])

  return (
    <div class="min-h-screen py-20 bg-gray-100" >
      <div class="container mx-auto">
        <div class="flex w-8/12 bg-white rounded-[70px] mx-auto shadow-lg overflow-hidden">
          <div class="w-1/2  bg-gradient-to-r from-cyan-500 to-blue-500">
            <img src={PKM2} class="h-64 w-64 mx-auto mt-28" />
            <h1 class="text-center text-white text-lg mt-8 font-bold">Let's Get Started</h1>
          </div>
          <div class="w-1/2 py-17 px-12">
            <h2 class="text-center mb-4 mt-8 text-[30px] text-[#5DA7DB] font-bold">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-2 mt-4 text-gray-500 text-xs text-center">
                <p>Or Sign In With</p>
              </div>
              <div class="mb-10 grid grid-cols-2 gap-2">
                <div class="border border-gray-400 hover:bg-gray-200 py-1 px-3 rounded-lg text-gray-600 text-center flex items-center cursor-pointer">
                  <img src={google} class="h-5 mr-3 ml-6" />
                  Google
                </div>
                <div class="border border-gray-400 hover:bg-gray-200 py-1 px-3 rounded-lg text-gray-600 text-center flex items-center cursor-pointer">
                  <img src={facebook} class="h-6 mr-3 ml-3" />
                  facebook
                </div>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-full flex items-center">
                <img src={user} class="h-5 mr-3" />
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required placeholder='Enter your username' class="outline-none w-96"></input>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-full flex items-center mt-3">
                <img src={envelope} class="h-5 mr-3" />
                <input type="email"  id="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder='Enter your email' class="w-96 outline-none"></input>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-full flex items-center mt-3">
                <img src={telephone} class="h-5 mr-3" />
                <input type="number"  id="telp" value={telp} onChange={(event) => setTelp(event.target.value)} required placeholder='Enter your phone' class="w-96 outline-none"></input>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-full flex items-center mt-3">
                <img src={padlock} class="h-5 mr-3" />
                <input type="password"  id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder='Enter your password' class="w-96 outline-none"></input>
              </div>
              <div class="mt-7">
                <button class="w-full bg-[#5DA7DB] hover:bg-[#4385b4] py-2 rounded-xl text-white font-bold text-lg">Create</button>
              </div>
              <a href="/Login">
                <div class="mb-5 mt-4 text-[#5DA7DB] hover:text-[#4385b4] text-sm text-center font-bold underline underline-offset-2 cursor-pointer">
                  <p>Sign In</p>
                </div>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


