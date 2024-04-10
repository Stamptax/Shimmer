import './Map.css'
import { useEffect, useState } from 'react';

export default function Map({ country, province, city, area }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [interactive, setInteractive] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function dePreventer() {
        setInteractive(!interactive);
    }

    useEffect(() => {
        const gif = document.querySelector('.map-wrapper');
        function disposeGif() {
            if (interactive)
                gif.style.backgroundImage = 'none';
        }
        if (interactive) {
            disposeGif();
        }
    }, [interactive]);

    return (
        <div className='map' id='map-location'>
            <div className='colour-filler'></div>
            {
                interactive ? (
                    <div className='map-wrapper'>
                        {
                            windowWidth < 810 ? (<iframe title='small-map' key={'small'} width="300" height="240" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/agbYM41vf8L"></iframe>) : (windowWidth < 1200 ? <iframe title='medium-map' key={'medium'} width="800" height="460" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9qa8aM32LL"></iframe> : <iframe title='large-map' key={'large'} width="1200" height="800" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9GE5fS17fHo"></iframe>)
                        }
                    </div>
                ) :
                    (
                        <div className='map-wrapper'>
                            <div className='mis-click-preventer' onClick={dePreventer}>
                                {
                                    windowWidth < 810 ? (<iframe title='small-map' key={'small'} width="300" height="240" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/agbYM41vf8L"></iframe>) : (windowWidth < 1200 ? <iframe title='medium-map' key={'medium'} width="800" height="460" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9qa8aM32LL"></iframe> : <iframe title='large-map' key={'large'} width="1200" height="800" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/9GE5fS17fHo"></iframe>)
                                }
                            </div>
                        </div>
                    )
            }
        </div >
    )
}