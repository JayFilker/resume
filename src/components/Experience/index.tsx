import { resumeData } from '../../data/resumeData';
import {FileCode, Star} from 'lucide-react'
import './index.less'
export function Experience() {
    return (
        <section className="experience-section">
            <h2><FileCode size={20}></FileCode>&nbsp;个人项目</h2>
            {resumeData.experience.map((job, index) => (
                <div className="experience-item" key={index}>
                    <div className="experience-header">
                        <h3><Star fill='black' size={15}></Star>&nbsp;项目：{job.title}</h3>
                        <span className="duration">时间：{job.duration}</span>
                    </div>
                    <span className="company">技术栈：{job.mainTechnologyStack}</span><br />
                    <div className="highlights">
                        介绍：{job.introduce}
                    </div>
                    <a className="links" href={job.gitHubAddress} target="_blank" rel="noopener noreferrer">
                       仓库地址:{job.gitHubAddress}
                    </a><br />
                    <a className="links"  href={job.gitHubAddress} target="_blank" rel="noopener noreferrer">
                       挂载地址:{job.mountAddress}
                    </a>
                </div>
            ))}
        </section>
    );
}
