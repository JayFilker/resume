import './index.less'
import { resumeData } from '../../data/resumeData.ts'
import {Cog} from 'lucide-react'

export function Skills() {
    return (<section className="experience-section">
        
        <h2><Cog size={20}></Cog>&nbsp;技能概述</h2>
        <ul className="experience-header" style={{paddingLeft:'20px'}}>
            {resumeData.skills.map((item,index) => (
                <li key={index} style={{width:'100%'}}>{item}</li>
            ))}
        </ul>
    </section>)
}
