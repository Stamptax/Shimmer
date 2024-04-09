import { useState, useEffect } from 'react';
import './Home.css';

export default function Home({ children }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle(e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const ToAbout = (e) => {
        e.preventDefault();
        document.getElementById("about-id").scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };
    const ToMenu = (e) => {
        e.preventDefault();
        document.getElementById("menu-for-goods").scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };
    const ToRecruit = (e) => {
        e.preventDefault();
        document.getElementById("hiring-board").scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };
    const ToGallery = (e) => {
        e.preventDefault();
        document.getElementById("gallery-album").scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };
    const ToContact = (e) => {
        e.preventDefault();
        document.getElementById("footer-id").scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home" id='home-page'>
            <div className='bg-image'></div>
            <div className="nav-container">
                {
                    windowWidth < 810 ? (<>
                        <h1>Shimmer</h1>
                        <a className='buger' href='#about-id' onClick={handleToggle}><i className='fas fa-bars'></i></a>
                    </>) :
                        (<>
                            <h1>Shimmer</h1>
                            <ul className='teleports'>
                                <li> <a className='route' href='#about-id' onClick={ToAbout}>About</a></li>
                                <li> <a className='route' href='#about-id' onClick={ToMenu}>Menu</a></li>
                                <li> <a className='route' href='#about-id' onClick={ToRecruit}>Recruiting</a></li>
                                <li> <a className='route' href='#about-id' onClick={ToGallery}>Gallery</a></li>
                                <li> <a className='route' href='#about-id' onClick={ToContact}>Contact</a></li>
                            </ul>
                        </>)
                }



            </div>
            <div className='home-wrapper'>
                <div className="slogan-container animate__fadeInDown animate__animated">
                    <p>WELCOME TO SHIMMER</p>
                    <h2 className="slogan">{children}</h2>
                </div>
                <a className='more animate__fadeInDown animate__animated' href='#about-id' onClick={ToAbout}><span>Learn More</span></a>
            </div>

            {
                isOpen ?
                    (
                        <div className='burger-menu' >
                            <a href='#about-id' className='close-icon' onClick={handleToggle}><i className='fas fa-times'></i></a>
                            <ul className='burger-items'>
                                <li> <a className='burger-item' href='#about-id' onClick={ToAbout}>About</a></li>
                                <li> <a className='burger-item' href='#about-id' onClick={ToMenu}>Menu</a></li>
                                <li> <a className='burger-item' href='#about-id' onClick={ToRecruit}>Recruiting</a></li>
                                <li> <a className='burger-item' href='#about-id' onClick={ToGallery}>Gallery</a></li>
                                <li> <a className='burger-item' href='#about-id' onClick={ToContact}>Contact</a></li>
                            </ul>
                        </div>
                    ) :
                    (
                        <></>
                    )
            }
        </div>
    )
}