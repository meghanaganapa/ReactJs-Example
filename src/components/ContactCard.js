import React from 'react';
import {Link} from 'react-router-dom';

const ContactCard=(props)=>{
    let {id,name,email}=props.contact
    console.log(props);
    
    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);

return (
    <div className='item'>
    <div className='content'>
    <Link to={{pathname:`/contact/${id}`}}>
        <div className='header'>{name}</div>
        <div>{email}</div>
        </Link>
    </div>
    
    <i className='trash alternate outline icon' style={{color:'red',marginTop:"7px"}} onClick={()=>props.clickHandler(id)}></i>
</div>
);
}

export default ContactCard;