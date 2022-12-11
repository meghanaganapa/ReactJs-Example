import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";


const ContactDetail=(props)=>{
const name=localStorage.getItem('Name');
const email=localStorage.getItem('Email');



return (
    <div className='main' style={{marginTop:"200px"}}>
        <div className='ui card centered'>
            <div className='image'>
                <img src='https://www.bing.com/images/search?view=detailV2&ccid=%2fVoTfUzE&id=89A24D493F004F5F1DA156F1D75B83FD842DBF44&thid=OIP._VoTfUzENldEmDbFEcQi4QHaHa&mediaurl=https%3a%2f%2fpic.onlinewebfonts.com%2fsvg%2fimg_24787.png&exph=980&expw=980&q=download+images+user&simid=608042106769186325&FORM=IRPRST&ck=34311F3130D8BD6D139B78BE4E8349D0&selectedIndex=21'/>
            </div>
            <div className='content'>
                <div className='Header'>{name}</div>
                <div className='description'>{email}</div>
            </div>
            <div className='center-div'>
              <Link to="/" > <button className='ui button blue center'>Back to Contact List</button></Link>
            </div>
        </div>
    </div>
   
);
}

export default ContactDetail;