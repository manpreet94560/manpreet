import { Outlet,Link } from "react-router-dom"
// import Link from "next/link"
function Main(){
    return(
        <>
        <h1>Hello yes
            </h1>
            <Link to={'/about'}><h2>hnji</h2></Link>
            

            <Outlet></Outlet>
            </>
            
    )
}
export default Main