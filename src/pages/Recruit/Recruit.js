import './Recruit.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';


export default function Recruit({ hiringText, subHiringText, jobs, contactInfo, contactApp }) {
    const ToContact = (e) => {
        e.preventDefault();
        document.getElementById("footer-id").scrollIntoView({ behavior: 'smooth' });
    };
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const recruitElement = document.querySelector('.recruit');
        if (recruitElement) {
            const width = recruitElement.offsetWidth;
            gsap.set(recruitElement, { x: -width });
        }
        gsap.to(
            '.recruit', {
            x: 0,
            scrollTrigger: {
                trigger: '.recruit',
                start: 'top 90%',
                end: 'top center',
                scrub: true,
            }
        }
        )
    }
    )



    return (
        <div className='recruit' id='hiring-board'>
            <div className='recruit-wrapper'>
                <h1 className='recruit-title'>{hiringText}</h1>
                <p className='recruit-description'>{subHiringText}</p>
                <ul className='job-list'>
                    {
                        jobs.map((i) => <li><span className='recruit-icon'>+ </span>{i}</li>)
                    }
                </ul>
                <p className='details'>All levels of seniority are welcomed.<br />
                    Click <a onClick={ToContact} href='#about-id' className="recruit-contact" >HERE</a> for contact information
                </p>
            </div>
        </div>
    )
}