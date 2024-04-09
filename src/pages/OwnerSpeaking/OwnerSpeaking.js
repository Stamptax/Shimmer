import './OwnerSpeaking.css';

export default function OwnerSpeaking({ owner, speaking }) {
    return (
        <div className='owner-speaking' id='owner-speaking'>
            <div className='speaking-wrapper'>
                <div className='fas fa-quote-left'></div>
                <article className='article-content'>{speaking}</article>
                <div className='fas fa-quote-right'></div>
                <p className='owner'>{owner}</p>
            </div>
        </div >
    )
}