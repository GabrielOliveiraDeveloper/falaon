import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterInitFinish from './pages/RegisterInitFinish'
import RegisterPage from "./pages/RegisterPage";
import SucessPage from "./pages/SucessPage";
import LoginPage from "./pages/LoginPage";
import DoneUser from "./pages/DoneUser";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import ChangeEmail from "./pages/ChangeEmail";
import ChangePessoal from "./pages/ChangePessoal";
import MyAccount from "./pages/MyAccount";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import AddA from "./pages/AddA";
import How from "./pages/How";
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="adm" element={<AdminPanel/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route index path="/registerInit" element={<RegisterPage/>}/>
                <Route path="/sucess" element={<SucessPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/doneUser" element={<DoneUser/>}/>
                <Route path="/finish" element={<RegisterInitFinish/>} ></Route>
                <Route path="/info" element={<Infos/>} ></Route>
                <Route path="/changeemail" element={<ChangeEmail/>} ></Route> 
                <Route path="/changePessoal" element={<ChangePessoal/>} ></Route>
                <Route path="/myaccount" element={<MyAccount/>} ></Route>
                <Route path="*" element={<h1>404 - Not Found</h1>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/adda" element={<AddA/>} />
                <Route path="/how" element={<How/>} /> 
            </Routes>
        </BrowserRouter>
  )
}


export default App;