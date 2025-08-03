import './App.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { usePDF } from 'react-to-pdf'
import 'github-markdown-css/github-markdown.css'
import { Settings } from 'lucide-react'
function App() {
    const content = [...Array(3)]
    const {toPDF, targetRef} = usePDF({
        filename: 'resume.pdf'})
    
    return (<>
            <div ref={targetRef} className="resume-container markdown-body"
           // style={{
           //      backgroundColor: 'var(--color-canvas-default)',
           //      color: 'var(--color-fg-default)'
           //  }}
            >
                
                <Header />
                <main>
                    <ul className="resume-left">
                        <div className="line">
                            <div className="line-block"><Settings /></div>
                            <div className="line-block"><Settings /></div>
                        </div>

                        {content.map((_, index) => (
                            <li key={index} className="resume-left-item">
                                <div className="top-icon"></div>
                                <div className="small-icon">
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="resume-right">
                        <Skills />
                        <Experience />
                        <Education /></div>
                </main>
                <Footer />
            
            
            </div>
            <button className="btn" onClick={() => toPDF()}>ToPdf</button>
        </>
    
    )
}

export default App
