import './Map.css'
import { useEffect, useState } from 'react';

export default function Map({ country, province, city, area }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        <div className='map' id='map-location'>
            <div className='colour-filler'></div>
            <div className='map-wrapper'>
                {
                    windowWidth < 810 ? (<iframe title='small-map' key={'small'} width="300" height="240" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/agbYM41vf8L"></iframe>) : (windowWidth < 1200 ? <iframe title='medium-map' key={'medium'} width="800" height="460" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9qa8aM32LL"></iframe> : <iframe title='large-map' key={'large'} width="1200" height="800" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9GE5fS17fHo"></iframe>)
                }
            </div>
            <div className='location'><span>Location:</span><div className='place-by-place'>{area}, {city}, {province}, {country}</div></div>
        </div >
    )
}