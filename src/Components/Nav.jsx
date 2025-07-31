import { Link, useLocation } from 'react-router-dom';

function Nav(){
    const location = useLocation();
    
    return(

        <nav>
            <Link to="/" className={location.pathname === "/" ? "current" : ""}>Home</Link>
            <Link to="/cst300" className={location.pathname === "/cst300" ? "current" : ""}>CST300</Link>
            <Link to="/cst338" className={location.pathname === "/cst338" ? "current" : ""}>CST338</Link>
            <Link to="/cst363" className={location.pathname === "/cst363" ? "current" : ""}>CST363</Link>
            <Link to="/cst311" className={location.pathname === "/cst311" ? "current" : ""}>CST311</Link>
            <Link to="/cst336" className={location.pathname === "/cst336" ? "current" : ""}>CST336</Link>
            <Link to="/cst462" className={location.pathname === "/cst462" ? "current" : ""}>CST462S</Link>
            <Link to="/cst383" className={location.pathname === "/cst383" ? "current" : ""}>CST383</Link>
            <Link to="/cst489" className={location.pathname === "/cst489" ? "current" : ""}>CST489</Link>
            <Link to="/cst499" className={location.pathname === "/cst499" ? "current" : ""}>CST499</Link>
            <Link to="/cst334" className={location.pathname === "/cst334" ? "current" : ""}>CST334</Link>
            <Link to="/cst370" className={location.pathname === "/cst370" ? "current" : ""}>CST370</Link>
            <Link to="/cst438" className={location.pathname === "/cst438" ? "current" : ""}>CST438</Link>
            <Link to="/cst328" className={location.pathname === "/cst328" ? "current" : ""}>CST328</Link>
            <Link to="/cst329" className={location.pathname === "/cst329" ? "current" : ""}>CST329</Link>
        </nav>
    );
}

export default Nav