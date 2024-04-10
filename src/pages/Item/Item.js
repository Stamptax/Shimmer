import './Item.css'
import { useEffect } from 'react';
export default function Item({ name, description, alt, src }) {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { rootMargin: '300px' }
        );
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    return (
        <div className="item hidden">
            <img className='item-img' src={src} alt={alt} style={{ height: '350px', width: '350px' }} />
            <div className='descriptives'>
                <p className='item-name'>{name}</p>
                <p className='item-dep'>{description}</p>
            </div>
        </div>
    )
}