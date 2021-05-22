import React from 'react'
import { useHistory } from 'react-router-dom'
 
export default function Home (){
    const history = useHistory()
    const potluckLogin = () => {
        history.push('/login')
    }

    
   return(
       <div className='home-container' onSubmit={onSubmit}>
       <div className='home-body'>
           <h2>Welcome to Potluck Planner</h2>
           <p>Gather friends for dinner parties!</p>
           <p>Explore food, history and culture</p><br/>
           <img className='home-image' src='https://static.wixstatic.com/media/ac3b13_4ee0b6394f2943e0aed8da4a5389690b~mv2.png/v1/crop/x_0,y_0,w_1024,h_526/fill/w_450,h_233,al_c,q_85,usm_0.66_1.00_0.01/Vegetables-and-fruit-on-world-map-small-.webp' alt='pot-luck' />
       </div>
       <div className='container'>
       <label>Name
           <input type='text' value={value.name} onChange={onChange} name='name' placeholder='Name' maxLength='30' />
       </label>
       <label>Email
           <input type='text' value={value.email} onChange={onChange} name='name' placeholder='Email' maxLength='50' />
       </label>
       <label>Password
           <input type='text' value={value.password} onChange={onChange} name='password' placeholder='Password' maxLength='50' />
       </label>
       <button onClick={potluckLogin}>Login</button>
       </div>
   </div>
   )
  
}
