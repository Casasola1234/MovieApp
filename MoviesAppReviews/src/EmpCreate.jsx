import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[movie,moviechange]=useState("");
    const[review,reviewchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={name,movie,review,active};
      

      fetch("http://localhost:3500/reviews",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/reviews/listreview');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[500px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Create Review</h1>
              <form
                onSubmit={handlesubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                 
                  value={id} disabled="disabled" className="p-2 my-2 bg-gray-700 rouded" placeholder="ID"/>
                
                <input
                  required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)}
                  className='p-2 my-2 bg-gray-700 rouded'
                  type='text'
                  placeholder='User Name'
                  
                />
                {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                <input
                  value={movie} onChange={e=>moviechange(e.target.value)}
                  className='p-2 my-2 bg-gray-700 rouded'
                  type='text'
                  placeholder='Movie'
                  
                />
                <input
                  value={review} onChange={e=>reviewchange(e.target.value)}
                  className='p-5 my-2 bg-gray-700 rouded'
                  type='text'
                  placeholder='Review'
                  
                />
                <input
                  checked={active} onChange={e=>activechange(e.target.checked)} 
                  className='p-1 my-2 bg-gray-700 rouded'
                  
                  type='checkbox'
                  placeholder='Active'
                  
                />
                  <label  className="form-check-label">Is Active</label>
                


                
                <button className='bg-green-600 py-3 my-6 rounded font-bold' type="submit">
                  Save
                </button>        
                  
                  <Link to='/reviews/listreview'>Back</Link>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmpCreate;