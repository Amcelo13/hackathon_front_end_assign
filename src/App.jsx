import Home from "./components/Home";
import Add from "./components/Add";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";

function App() {
  return(
    <BrowserRouter>
      <CssBaseline/>
      <Routes>
           <Route path='/' index element= {<Home/>}/>
           <Route path='add' index element= {<Add/>}/>
           {/* <Route path='' index element= {<Add/>}/> */}

     </Routes>

    </BrowserRouter>
  );
}

export default App;
