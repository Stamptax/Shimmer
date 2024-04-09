//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Gallery.css'

export default function Gallery({ source }) {
    return (
        <div className='gallery' id='gallery-album'>
            <div className='border-line'></div>
            <div className='imageContainer'>
                {
                    source.map((i) => <img className='galleryPic' src={i.src} alt={i.alt} />)
                }
            </div>
        </div >
    )
}