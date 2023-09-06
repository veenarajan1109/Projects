import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Home from "./home";
import Veena from "./veena";
import Edit from "./edit";
import IndexContext from "../usecontext/indexContext";
export default function RouteBrowse()
{
    return(
        <>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/secondpage" element={<Veena/>}/>
            <Route path="/edit" element={<Edit></Edit>}/>
            <Route path="/usecontext" element={<IndexContext/>}/>

        </Routes>
    </BrowserRouter>
        
        
        </>
    )
}