
import Pic1 from '../Images/Fullstackapp.png'
import Pic2 from '../Images/Quickpayimage.jpg'
import Pic3 from '../Images/internprojects.jpeg'


import '../styles/Project.css'

export default function ProjectsComponent() {
    return (
        <div className="Project">
            <center>
                <h1>🌟My projects🌟</h1>
                <div className='Project_container'>
                    <div className='Project_Box'>
                        <img src={Pic1}/>
                        <div>MERN Stack App</div>
                    </div>      
                    <div className='Project_Box'>
                        <img src={Pic2}/>
                        <div>QuickPay Mobile App</div>
                    </div>
                    <div className='Project_Box'>
                        <img src={Pic3}/>
                        <div>Intern projects  @Prodigy Infotech</div>
                    </div>
                </div>
            </center>
        </div>
    )
}