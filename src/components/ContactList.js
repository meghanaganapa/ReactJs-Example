import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';


const ContactList=(props)=>{

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    
    const renderCOntactList= props.contacts.map((contact)=>{
        return(
            
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    });
        return <div className='main'>
              <h2>Contact List</h2> 
              <Link to="/add"><button className='ui button blue' >Add Contact</button></Link>
              
        <div className='ui celled list'>
          
            {renderCOntactList}
        </div>
        </div> ;
  
}
export default ContactList;
