import React, { useEffect } from 'react'
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { getRandomPrompt } from '../utils/rand';
import Fields from './FormField';
import Loader from './Loader';
import {preview} from'../assets';
import { saveAs } from 'file-saver';
import { toPng } from 'html-to-image';



const Create = () => {
  const navigate=useNavigate();
  const[form,setform]=useState({name:'',prompt:'',photo:''});
  const[generateimg,setgenerateimg]=useState(false);
  const[loading,setLoading]=useState(false);

  // image generation
  const generateimage= async()=>{
    if(form.prompt){
      try{
        setgenerateimg(true);
        const response= await fetch('http://localhost:8080/api/v1/ai',{method:'POST',headers:{'content-Type':'application/json'},body:JSON.stringify({prompt:form.prompt})})
        const data= await response.json();
        setform({form,photo :  `data:image/jpeg;base64,${data.photo}`})
       
      }catch(error){
        alert(error)
      }finally{
        setgenerateimg(false)
      }
    }else{
      alert('enter a prompt');
    }

  }
  // fetching our photo and data to community
  const handlesubmit=async(e)=>{
     e.preventDefault();
    if( form.photo){
      setLoading(true);
       try{
      const responses= await fetch('http://localhost:8080/api/v1/post',
      {method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
      await responses.json();
      navigate('/');
      // alert('done!');
    }  catch(err){
       alert(err);
      
    } finally{ 
      setLoading(false);
    }
  }else{
     alert('enter the prompt so that you can generate image')
  }  
  }

  
  const handlechange=(e)=>{
    setform({form,[e.target.name]:e.target.value})
  
  }
  // to suggest us random texts for generating image
  const handlesuprise=()=>{
    const randomprompt=getRandomPrompt(form.prompt)
    setform({form,prompt:randomprompt})
  
  
  }
  return (
   <section>
    <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>CREATE YOURS</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-[500px]:'>Create imaginative and visually stunning images</p>
      </div>
      <center><form className='mt-16 max-w-3xl'name='form' onSubmit={handlesubmit}>
        <Fields labelname='your name' type='text' name='name' placeholder="your sweet name" value={form.name} handlechange={handlechange}/><br></br>
        <Fields labelname='prompt' type='text' name='prompt'
         placeholder='a sea otter with a pearl earring" by Johannes Vermeer'
         value={form.prompt} handlechange={handlechange}
         issurpriseme
         handlesuprise={handlesuprise}
         />
         <br></br>
         <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo?
            (<img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/>)
            :
            (<img src={preview} alt='preivew' className='w-9/12 h-9/12 object-contain opacity-40 '/>)}
            {generateimg&&(<div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.22)] rounded-lg'><Loader/></div>)}
          </div>
          <div className='mt-5 flex gap-5'>
            <button type='button' onClick={generateimage} className='text-white bg-blue-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center max-w-full'>
              {generateimg? 'generating...':'Generate'}
            </button>
            
           
          </div>
          <div className='mt-5'>
            <p className='mt-3 text-[#666e75] text-[14px] float-left'> Once,you have created the image you can traverse back home</p>
            <button className='text-white bg-[#1010109c] font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-md gap-2'>{loading? 'back home...' :'Home'}</button>
          </div>
    
      </form></center>
   </section>
  )
}

export default Create;