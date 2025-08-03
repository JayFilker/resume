import './App.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { usePDF } from 'react-to-pdf'

function App() {
    const content = [...Array(3)]
    const {toPDF, targetRef} = usePDF({
        filename: 'resume.pdf'})
    return (<>
            <div ref={targetRef} className="resume-container">
                
                <Header />
                <main>
                    <ul className="resume-left">
                        <div className="line"></div>
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
