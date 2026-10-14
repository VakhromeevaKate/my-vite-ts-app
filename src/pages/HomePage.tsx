import { NavLink } from "react-router";


export function HomePage() {
    return (
        <div>
            <NavLink to="/users">Go to users list page</NavLink>
            <div><NavLink to="/samples"> Go to samples page</NavLink></div>
            
        </div>
    )
}