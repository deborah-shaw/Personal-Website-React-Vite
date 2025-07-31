import Header from '../Components/Header.jsx'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'

function Cst438(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST438 Software Engineering</h2>

                <h4>Course Description:</h4>
                <p>Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.</p>
                
                <h3>Note: Taken at Cal Poly Pomona</h3>
            </div>
            <Footer/>
        </>
    );
}

export default Cst438