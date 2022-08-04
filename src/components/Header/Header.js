import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <div className="header">
        FUN MEDIA
      </div>
      
      <div className="zee">
       <a href="http://www.zeeshandesign.eu"> Design & Develop by Zeeshan Zahoor </a>
      </div>
    </span>
  );
};

export default Header;
