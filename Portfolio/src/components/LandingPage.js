
import profile_pic from '../Images/canva_edited.png'

import '../styles/LandingPage.css'

export default function LandingPageComponent() {
    return (
        <div className="Landing_page">
            <div className='img_div'>
                <img src={profile_pic} alt="Profile Picture" />
            </div>

            <div className="desc">
                <h4 className="desc_1">Hey, itz me</h4>
                <h1 className="desc_2">Vaitheesh Murugavel</h1>
                <p className="desc_4"> Mobile App & Frontend Web Developer</p>
                <a href="https://drive.google.com/file/d/19yrbEWznbgfypKSKtO75jJyN3_6s1AGD/view?usp=sharing"><button><i className="fa-solid fa-download"></i>Download Resume</button></a>
            </div>
        </div>
    )
}