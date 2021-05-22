import React from 'react'
import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().required('username is required').min('username must be at least 2 characters'),
    password: yup.string().required('password is required').min('password must be at least 6 characters')
})
 
export default function Home (props) {
    const { values, login, errors, disabled } = props

    const onChange = event => {
        const { placeholder, value, name, type } = event.target
        const valueToUse = type === 'text' ? placeholder : value
        setHomeErrors(name, valueToUse)
        setHome({ ...Home, [name] : valueToUse })
    }
        
    const onSubmit = event => {
        event.preventDefault()
        login()
    }

   return(
       <div className='home-container'>
       <div className='home-body'>
           <h2>Welcome to Potluck Planner</h2>
           <p>Gather friends for dinner parties!</p>
           <p>Explore food, history and culture</p><br/>
           <img className='home-image' src='https://static.wixstatic.com/media/ac3b13_4ee0b6394f2943e0aed8da4a5389690b~mv2.png/v1/crop/x_0,y_0,w_1024,h_526/fill/w_450,h_233,al_c,q_85,usm_0.66_1.00_0.01/Vegetables-and-fruit-on-world-map-small-.webp' alt='pot-luck' />
       </div>
       <div className='container' onSubmit={onSubmit}>
       <div style = {{color: 'red'}}>
           <div>{errors.username}</div><div>{errors.password}</div>
       </div>
       <label>Username
           <input type='text' value={values.username} onChange={onChange} name='name' placeholder='Username' maxLength='50' />
       </label>
       <label>Password
           <input type='text' value={values.password} onChange={onChange} name='password' placeholder='Password' maxLength='50' />
       </label>
       <button to='/login' disabled={disabled} id='login-button'>Login</button>
       </div>
   </div>
   )
  
}
