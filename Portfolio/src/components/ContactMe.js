

import '../styles/ContactMe.css'

export default function ContactMeComponent() {
    return (
        <div className="Contact_me">
            <h1><u>Contact Me</u></h1>
            <div className='Contact_me_container'>
                <div className='Contact_me_links'>
                    <div className='Contact_me_links_desc'>
                        <h3>Ping me on:</h3>
                    </div>
                    <div className="media_buttons">
                        <a href="#" className="link" >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#" className="link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="link" >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="link" >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>

                <div className='Contact_form'>
                    <table>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input /></td>
                        </tr>
                        <tr>
                            <td><label>Mail:</label></td>
                            <td><input /></td>
                        </tr>
                        <tr>
                            <td><label>Description:</label></td>
                            <td><textarea /></td>
                        </tr>
                    </table>
                </div>
            </div>


        </div>
    )
}