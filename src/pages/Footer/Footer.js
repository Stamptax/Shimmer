import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer-id">
      <div className="footer-wrapper">
        <div className="open-hour-container">
          <h2 className="schedule">OPEN HOURS</h2>
          <div>——————</div>
          <div className="opening">
            <p className="days">Working Days</p>
            <p className="time-table">10:00 - 21:00</p>
          </div>
          <div>——————</div>
          <div className="break">
            <p className="days">Off Days</p>
            <p className="time-table">Tuesday</p>
          </div>
        </div>

        <div className="contact-instantly">
          <h2 className="contact-us">CONTACT US!</h2>
          <div className="contact-info">
            <a className="contact-media" href="tel:+861817367097">
              Phone number: +86 181 7367 9097
            </a>
            <a className="contact-media" href="mailto:18173679097@outlook.com">
              Email: 18173679097@outlook.com
            </a>
            <a
              className="contact-media"
              href="https://www.xiaohongshu.com/user/profile/5db954080000000001005d07"
            >
              Xiaohongshu: Shimmer-微光
            </a>
            <div className="wechat-icon">
              <span className="wechat-id">WeChat ID: shimmer---007</span>{" "}
            </div>
            <div className="our-location">
              Location: Building 18 Ground Floor Laoximen, Changde Hunan{" "}
            </div>
          </div>
        </div>

        {/*
                <div className='contact-on-app'>
                    <div className='wechat-icon'> <a href="#"><img src="/resources/wechat-icon.png" alt="wechat-icon" /></a> </div>
                    <div className='xiaohongshu-icon'><a href="https://www.xiaohongshu.com/user/profile/5db954080000000001005d07"><img src="/resources/xiaohongshu.png" alt="xiaohongshu-icon" /></a> </div>
                    <div className='ticktok-icon'><a href="#"><img src="/resources/ticktok-icon.png" alt="ticktok-icon" /></a> </div>
                </div>
                */}
      </div>

      <div className="footer-end-container">
        <h1 className="brand">Shimmer</h1>
        <p className="powered-by">Powered by Morry</p>
        <p className="copyright">Copyrights © 2024 Shimmer </p>
      </div>
    </div>
  );
}
