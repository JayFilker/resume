import './index.less'
import { resumeData } from '../../data/resumeData.ts'
import {GraduationCap} from 'lucide-react'

export function Education() {
    return (<section className="experience-section">
        <h2><GraduationCap size={20}></GraduationCap>&nbsp;教育背景</h2>
                <div className="experience-header">
                    <h3>学校：{resumeData.education.institution}</h3>
                   <span>专业：{resumeData.education.major}</span>
                    <span>学历：{resumeData.education.degree}</span>
                </div>
    </section>)
}
