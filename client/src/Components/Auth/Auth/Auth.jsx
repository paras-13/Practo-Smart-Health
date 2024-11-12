// import React,  { useState } from "react";
// import Register from "../Register/register";
// import Login from '../Login/login';
// import "./Auth.css";

// const Auth = () => {

//      const [state, setState] = useState(<Login />);
//      const updateContent = () => {
//         let parent = document.getElementsByClassName("first");
//       setState(
//         <Login />
//       )

//       function changeColor(blue){
//           parent.body.style.color = blue;
//       }
//       changeColor()

      
//     }

//      const updateAnother = () => {
        
//         setState(
//             <Register />
//         )
        
//     }
    

//     return (
//         <div className="auth">

//             <div className="high">
//                 <div className="first">
//                     <button  onClick={updateContent}>Login</button>
//                 </div>
//                 <div className="second">
//                     <button onClick={updateAnother}>Regsiter</button>
//                 </div>
//             </div>
//             <hr className="line"></hr>
//             <div className="body">
                 
//                  <div id="main">
//                     {state}
//                  </div>
//             </div>
//         </div>
//     )
//  }

//  export default Auth;
import React, { useState } from "react";
import Register from "../Register/register";
import Login from "../Login/login";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const updateContent = () => setIsLogin(true);
  const updateAnother = () => setIsLogin(false);

  return (
    <div className="auth">
      <div className="select-auth">
        <div className="mx-4">
          <button onClick={updateContent} className="btn btn-outline-primary">Login</button>
        </div>
        <div className="mx-4">
          <button onClick={updateAnother} className="btn btn-outline-primary">Register</button>
        </div>
      </div>
      <hr />
      <div>
        <div className="auth-area">{isLogin ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
};

export default Auth;
