import './Item.css'

export default function Item({ name, description, alt, src }) {
    return (
        <div className="item">
            <img className='item-img' src={src} alt={alt} style={{ height: '350px', width: '350px' }} />
            <div className='descriptives'>
                <p className='item-name'>{name}</p>
                <p className='item-dep'>{description}</p>
            </div>
        </div>
    )
}