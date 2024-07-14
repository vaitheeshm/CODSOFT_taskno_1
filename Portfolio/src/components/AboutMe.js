
import About_me_img from '../Images/Aboutme.jpg'
import '../styles/AboutMe.css'

export default function AboutMeComponent() {
    return (
        <div className="About_me">
            <h1>ABOUT ME</h1>
            <div className='About_me_detail'>
                <div>
                    <img src={About_me_img} />
                </div>
                <div className='About_me_paragragh'>
                    <p>👋 Hi, I'm Vaitheesh Murugavel, an entry-level React developer with a passion for front-end development. I hold a B.Sc. in Computer Science from Tagore Govt. Arts and Science College, Puducherry. During my internships at CodSoft and Prodigy InfoTech, I developed web applications using React, Redux, HTML, CSS, and JavaScript, and integrated backend services with Firebase. My technical skills include JavaScript, React, Redux, HTML, CSS, Bootstrap, Python, MySQL, and Firebase.<br/><br/>

                        🚀 I'm a continuous learner, constantly attending workshops to stay updated with the latest industry trends. My final year project was a mobile payment app featuring QR code scanning, showcasing my ability to develop practical solutions. I believe in the power of technology to make a positive impact and am eager to contribute to innovative projects.<br/><br/>

                        🌱 Let's connect and create something amazing together!</p>
                </div>
            </div>
        </div>
    )
}