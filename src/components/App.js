import AddContact from './AddContact';
import React,{useState,useEffect} from 'react';
import Header from './Header.js';
import {v4 as uuid} from 'uuid';
import ContactList from './ContactList';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import ContactDetail from './ContactDetail';
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }
  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setContacts(newContactList);
  };
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setContacts(retrieveContacts)
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
return(
<div>
 <BrowserRouter>
 <Header/>
 <Routes>
 <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
 <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}/>
 <Route path="/contact/:id" element={<ContactDetail/>}/>

 </Routes>



  {/*<AddContact addContactHandler={addContactHandler}/> */}
   {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
 </BrowserRouter>
</div>
);
}export default App;
