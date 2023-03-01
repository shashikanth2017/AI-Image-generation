import React from "react";
import { Route,BrowserRouter,Link,Routes } from "react-router-dom";
import {logo} from  './assets';
import './app.css';
// import{slogo} from './assets';
import Create from "./pages/create";
import Home from "./pages/home";

const app = () => {
  return ( 
   <BrowserRouter>
   <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
   <Link to='/'>
    <img src={logo} alt='logo'
    className="w-10 object contain"/>
   </Link>
   <Link to='/create'
   className="font-inter font-medium bg-[#454b1bbc] text-white px-4 py-2 rounded-md">create</Link>
   </header>
   <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    </Routes>
   </main>
   </BrowserRouter>
   );
}
 
export default app;
