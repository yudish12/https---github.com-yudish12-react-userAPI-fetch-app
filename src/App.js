// import logo from './logo.svg';
import reactDom from 'react-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
const  App =  () => {
    // const [Item,setItem] = useState(null);
    // const [loading,setLoading] = useEffect(false);

 const itemFunction = async()=>{
      try{
         const data = await axios
         .get('https://reqres.in/api/users?page=1')
         .then(res=>{
           const user = (res.data.data);
           console.log(user);
          //  setItem(res.data);
           user.forEach(element => {
             const div  = document.createElement("div");
             div.classList.add("border");
             div.innerHTML=`<img src="${element.avatar}" style/>
             <ReactBootstrap.Spinner animation="border"/>
             <h6 className="display-1 h-6">${element.first_name}  ${element.last_name}</h6>
             <p className="fs-3">Contact ${element.first_name}  ${element.last_name} at mail ID: ${element.email}</p>`
             document.querySelector(".display-6").innerHTML="GITHUB USERS INFO"
             document.querySelector(".users").appendChild(div);
            });
          });
      }catch(e){
          console.log(e);
      }
    }


  // useEffect(()=>{
  //   itemFunction()
  // },[]);
  return (
    
    <div className="App">
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
        <button class="btn btn-outline-success" onClick={itemFunction} type="submit">Search</button>
    </div>
  </div>
</nav>
       <div className='Card'>
      <h1 className='display-1'>Hello Everyone</h1>
        <div class="container">
          
        <h6 className='display-6'>Currently no users are added</h6>
  <div class="row row-cols-3 users">
    
  </div>
</div>
      </div>
    </div>
  );
  
}

export default App;
