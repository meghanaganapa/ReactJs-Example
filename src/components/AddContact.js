import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

class AddContact extends React.Component{

    state={
        name:'',
        email:'',
    
    };
    
   
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==='' || this.state.email===''){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''});
        window.history.back();
    }
    render(){
        
        return(
            
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} ></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input>
                    </div>
                    <button className='ui button blue' >Add</button>
                </form>
            </div>
            
        );
    }
}

export default AddContact;