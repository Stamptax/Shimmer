import './About.css'

export default function About({ aboutTitle, children }) {
    return (
        <div className='about' id='about-id'>
            <p className='about-us'>ABOUT US</p>
            <div className='about-wrapper'>
                <p className='about-title'>{aboutTitle}</p>
                <div className='about-content-wrapper'>
                    <div className='———'>———</div>
                    <article className='about-content'>{children}</article>
                    <div className='——————————————————'>——————————————————</div>
                </div>
            </div>

        </div>
    )
}