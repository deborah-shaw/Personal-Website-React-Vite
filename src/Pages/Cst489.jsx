import Header from '../Components/Header.jsx'
import Nav from '../Components/Nav.jsx'
import Footer from '../Components/Footer.jsx'

function Cst489(){

    return(
        <>
            <Header/><hr/>
            <Nav/><br/><br/>
            <div id="project">
                <h2 id="class-title">CST489 Capstone Project Planning</h2>

                <h4>Course Description:</h4>
                <p>Students create a detailed proposal of a substantial, professional level project with an approval of the student’s capstone advisor. Students learn and practice project planning, collaboration and writing skills required in the industry.</p>

                <h3>Projects</h3>

                <p>Capstone Proposal</p>

                <iframe src="/Personal-Website-React-Vite/projects/cst489_Capstone_Proposal.pdf" width="100%" height="600px">
                    This browser does not support PDFs. Please download the PDF instead:
                    <a href="/Personal-Website-React-Vite/projects/cst489_Capstone_Proposal.pdf">Download PDF</a>
                </iframe>

                <p>Status Report</p>

                <iframe src="/Personal-Website-React-Vite/projects/cst489_Status_Update.pdf" width="100%" height="600px">
                    This browser does not support PDFs. Please download the PDF instead:
                    <a href="/Personal-Website-React-Vite/projects/cst489_Status_Update.pdf">Download PDF</a>
                </iframe>
            </div>
            <Footer/>
        </>
    );
}

export default Cst489