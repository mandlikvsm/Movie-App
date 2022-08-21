import React from 'react';
import Header from './components/Header/Header';
// import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Home from './components/Home';
import Search from './components/Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import Home from './components/Home/Home';

function App() {
  return (

    <BrowserRouter>
      {/* <Header/> */}
      {/* <Search /> */}
      
    <Routes>
      <Route path="/" element={<>
        <Home /> <Search />
      </>}/>
      {/* <Route path="/login" element={<Login />}/> */}
      {/* <Route path="/signup" element={<SignUp />}/> */}
       
     
    </Routes>
    {/* <Search /> */}
  </BrowserRouter>
    
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import Registration from './Components/Registeration';


// function App() {
//   return (
//     <div className="App">
//       <div className="outer">
//         <div className="inner">
//           {/* <Registration /> */}
//           {/* <Login /> */}
//           <SignUp ></SignUp>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;