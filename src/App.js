import logo from './logo.svg';
import React,{useState} from 'react';
import { numbers,upperCaseLetters, lowerCaseLetters,specialCharacters } from './characters';
import './App.css';
import {toast , ToastContainer} from 'react-toastify';

function App() {
  const [password , setpassword]= useState('')
  const[passwordlength, setpasswordlength] = useState(15);
  const[includeuppercase, setincludeuppercase] = useState(false);
  const[includelowercase, setincludelowercase] = useState(false);
  const[includenumber, setincludenumbers] = useState(false);
  const[includesymbols, setincludesymbols] = useState(false);

let characterList = ""

  const handleGeneratePassword= (e) =>
  {
    
   if(includelowercase){
    characterList  = characterList + lowerCaseLetters;
   }

   if(includeuppercase){
    characterList =  characterList + upperCaseLetters;
   }

   if(includenumber){
    characterList =  characterList + numbers;
   }

   if(includesymbols){
    characterList =  characterList + specialCharacters;
   }

   setpassword(createpassword(characterList))
  }

  const createpassword = (characterList) =>{
  let password="";
  const characterListlen = characterList.length

  for(let i =0; i<passwordlength;i++){
    const characterindex = Math.round(Math.random()* characterListlen);
    password = password + characterList.charAt(characterindex);
  }
  return password
  }

  const handlecopypassword = () =>{
  const textar = document.createElement('textarea');
  textar.innerHTML = password;
   document.body.appendChild(textar);
   textar.select();
   document.execCommand('copy');
   textar.remove();
  }

  return (
    <div className="App">
      <div className='container'>
        <div  className='generator'>
          <h2 className='name'>Password generator</h2>
          <div className='generator-password'>
            <h3>
              {password}
              <button onClick={handlecopypassword}  className='copy-btn'>
                <i className='far fa-clipboard'></i>
              </button>
            </h3>
          </div>

          <div className='form-group'>
            <label htmlFor='password-strength'> password Length</label>
       <input  
        defaultValue={passwordlength}
        onChange= {(e) => setpasswordlength(e.target.value)}
       type='number' 
       max="20"
        min="10"
       name='password-strength' 
       id='password-strength' />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letter'> Include Uppercase letters</label>
       <input
       checked={includeuppercase}
       onChange = {(e) => setincludeuppercase(e.target.checked)}
       type='checkbox'  
       name='uppercase-letter' 
       id='uppercase-letter' />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letter'> Include Lowercase letters</label>
       <input  
       checked={includelowercase}
       onChange={(e) => setincludelowercase(e.target.checked)}
       type='checkbox' 
       name='lowercase-letter'
        id='lowercase-letter' />
          </div>

          <div className='form-group'>
            <label htmlFor='lnclude-number'> lnclude-number</label>
       <input  
       checked={includenumber}
       onChange= {(e) => setincludenumbers(e.target.checked)}

       type='checkbox'
        name='lnclude-number'
         id="Include-number" />
          </div>

          <div className='form-group'>
            <label htmlFor='Include-symbol'> Include-symbol</label>
       <input 
         checked={includesymbols}
         onChange= {(e) => setincludesymbols(e.target.checked)}
       type='checkbox'
        name='Include-symbol' 
        id='Include-symbol' />
          </div>
              <button 
              onClick={handleGeneratePassword}
              className='generator-button'>Generate password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
