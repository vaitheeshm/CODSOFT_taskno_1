import Bootstrap from '../Images/Bootstrap.png';
import CSS from '../Images/CSS.png';
import Github from '../Images/Github.png';
import HTML from '../Images/HTML.png';
import Javascript from '../Images/Javascript.png';
import Kivy from '../Images/Kivy.png';
import Mysql from '../Images/Mysql.png';
import Postman from '../Images/Postman.png';
import Python from '../Images/Python.png';
import React from '../Images/React.png';

import '../styles/skills.css'

export default function SkillsComponent() {
    return (
        <center style={{ backgroundColor: "white", height: "200px" }} className='Skills'>
            <h1>My Skills</h1>
            <div><center>
                <div><img src={Javascript} /></div>
                <div><img src={React} /></div>
                <div><img src={HTML} /></div>
                <div><img src={CSS} /></div>
                <div><img src={Bootstrap} /></div>
                <div><img src={Python} /></div>
                <div><img src={Mysql} /></div>
                <div><img src={Kivy} /></div>
                <div><img src={Github} /></div>
                <div><img src={Postman} /></div>
                </center>
            </div>

        </center>
    )
}