// src/components/Header.tsx
import { Briefcase, Github, Mail, Navigation, Phone, UserCircle } from 'lucide-react'
import { resumeData } from '../../data/resumeData'
import './index.less'
import  person  from '../../assets/person.jpg'

export function Header() {
    const {name, jobIntention, email, phone, github, address} = resumeData.basics
    
    return (
        <header className="resume-header">
            <div className='header-left' >
                <div className="name-title">
                    <h1><UserCircle size={30}></UserCircle>&nbsp;{name}</h1>
                </div>
                <div className="contact-info">
                    <div className="contact-item">
                        <Mail size={16} />
                        <span>邮箱：{email}</span>
                    </div>
                    
                    <div className="contact-item">
                        <Navigation size={16} />
                        <span>地址：{address}</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={16}></Phone>
                        <span>手机：{phone}</span>
                    </div>
                    <div className="contact-item">
                        <Briefcase size={16}></Briefcase>
                        <span>求职意向：{jobIntention}</span>
                    </div>
                    <a href={github} className="contact-item" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>GitHub地址：{github}</span>
                    </a>
                </div>
            </div>
            <div className="header-right">
                <img src={person} alt=''></img>
                {/*<img src={person} alt='' className='shaow'></img>*/}
            </div>
            
        </header>
    )
}
