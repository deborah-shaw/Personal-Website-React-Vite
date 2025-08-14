import Header from '../Components/Header.jsx'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'

function Cst499(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST499 Computer Science Capstone</h2>

                <h4>Course Description:</h4>
                <p>Students will work on a project in large groups (up to 5 students in each group), developing requirements specification, a solution plan followed by design and implementation of the solution. The problem statement for the projects will be selected by the faculty. Faculty will also play the role of a project manager directing the schedule and deliverables for these projects.</p>

                <h3>Projects</h3>

                <p>Presentation</p>

                {/* Example MP4 embed */}
                <video width="800" controls autoPlay={false} muted>
                    <source src="/Personal-Website-React-Vite/projects/public/projects/cst499_Presentation_Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <p>Update and Testing Report</p>
                
                <iframe src="/Personal-Website-React-Vite/projects/cst499_Status_Update_and_Testing.pdf" width="100%" height="600px">
                    This browser does not support PDFs. Please download the PDF instead:
                    <a href="/Personal-Website-React-Vite/projects/cst499_Status_Update_and_Testing.pdf">Download PDF</a>
                </iframe>
            </div>
            <Footer/>
        </>
    );
}

export default Cst499