import { BrowserRouter,Route, Router } from "react-router-dom";
import Main from "./home";

function Routerr(){
    return(
        <>
        <BrowserRouter>
        <Router>
            <Route path="/"><Main></Main></Route>
            <Route path="/about"></Route>

            </Router>
            </BrowserRouter>
        </>
    )
}
export default Routerr