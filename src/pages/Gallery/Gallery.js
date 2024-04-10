import './Gallery.css'
import { useEffect } from 'react';

export default function Gallery({ source }) {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('showG');
                    }
                });
            }
        );
        const hiddenElements = document.querySelectorAll('.hiddenG');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className='gallery' id='gallery-album'>
            <div className='border-line'></div>
            <div className='imageContainer'>
                {
                    source.map((i) => <img className='galleryPic hiddenG' src={i.src} alt={i.alt} />)
                }
            </div>
        </div >
    )
}