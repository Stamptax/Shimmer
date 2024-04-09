import './Recruit.css';

export default function Recruit({ hiringText, subHiringText, jobs, contactInfo, contactApp }) {
    const ToContact = (e) => {
        e.preventDefault();
        document.getElementById("footer-id").scrollIntoView({ behavior: 'smooth' });
    };

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