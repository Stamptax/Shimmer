import './OwnerSpeaking.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OwnerSpeaking({ owner, speaking }) {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener('DOMContentLoaded', (event) => {
        const lyrics = document.getElementById('lyrics');
        const text = lyrics.innerText;
        lyrics.innerHTML = '';
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            lyrics.appendChild(span);
        });
    });
    window.addEventListener('DOMContentLoaded', (event) => {
        const spans = document.querySelectorAll('#lyrics span');

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, { color: 'ivory', duration: 1 });
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 1.0
            }
        );

        spans.forEach(span => {
            observer.observe(span);
        });
    });


    return (
        <div className='owner-speaking' id='owner-speaking'>
            <div className='speaking-wrapper'>
                <div className='fas fa-quote-left'></div>
                <article className='article-content' id='lyrics'>{speaking}</article>
                <div className='fas fa-quote-right'></div>
                <p className='owner'>{owner}</p>
            </div>
        </div >
    )
}