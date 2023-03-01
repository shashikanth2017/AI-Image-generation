import React ,{useState,useEffect}from 'react'
import Loader from './Loader';
import Card from './Card';
import Fields from './FormField';
import { func } from 'prop-types';
import SimpleImageSlider from "react-simple-image-slider";

// const Rendercards=({data,title})=>{
//    if(data?.length>0){
//     return data.map((post)=><Card key={post._id}{...post}/>)}
   
//    return(<h2 className='mt-5 font-bold text-[#365998a9] text-xl uppercase'>{title}</h2>)
// }

const Home = () => {
  const[loading,setLoading]=useState(false)
  const[post,setallpost]=useState();
  const[searchtext,setsearchtext]=useState('');
//  const images=[{url:"AI/src/pages/dog cat.jpeg"},{url:"AI/src/pages/download.jpeg"},{url:"AI/src/pages/donwload(1).jpeg"}]
  useEffect(()=>{
    const fetchpost= async()=>{
      setLoading(true);
      try{
        const response= await fetch('http://localhost:8080/api/v1/post',
        {method:'GET',headers:{"Content-Type":'application/json'}})
       if(response.ok){
        const result= await response.json();
        setallpost(result.data.reverse());
       }
      }catch(error){
        alert(error);
        
      } finally{ setLoading(false);}

    }
      fetchpost();
  },[]);
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>THE PAST ILLUSTRATION</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-[500px]:'>Browse through collection of imaginative and visually stunning images</p>
      </div>


      <div className="  px-2  grid-rows-1  gap-2 lg:ml-72 sm:ml-auto sm:h-auto"> 
                
                <section className="py-8 px-4">
                  <div className=" flex-wrap -mx-4">
                    <div className="md:w-1/2  px-4 grid grid-rows-2 gap-4">
                      <div className="mb-8 w-auto"><img className="rounded shadow-md" src="src/pages/balloon.jpeg" alt=""/>
                      </div>
                      <div className='mb-8'><img className="rounded shadow-md" src="src/pages/dog cat.jpeg" alt=""/></div>
                      <div className='mb-8'><img className="rounded shadow-md" src="src/pages/download.jpeg" alt=""/></div>
                      <div className='mb-8'><img className="rounded shadow-md" src="src/pages/astro.jpeg" alt=""/></div>
                      <div className='mb-8'><img className="rounded shadow-md" src="src/pages/man.jpeg" alt=""/></div>
                      <div className='mb-8'><img className="rounded shadow-md" src="src/pages/ro.jpeg" alt=""/></div>


                    </div>
                  </div>
                </section>
                </div>




      {/* <div className='mt-10'>
        {loading ?(<div className='flex justify-center items-center'><Loader/></div>):
        (<>{searchtext&&(<h2 className='font-medium text-[#666e75] mb-3'>Showing  results for <span className='text-[#222328]'>"{searchtext}"</span></h2>)}
        <div className=' grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
          {searchtext?(<Rendercards data={[]} title='NO search result found'/>):(<Rendercards data={post} title='No posts found'/>)}

        </div>
        </>)}

      </div> */}


    </section>
  )
}

export default Home;