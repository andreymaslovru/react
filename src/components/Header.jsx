const Header = () => {
    return (
        <header className = 'header'>
            <div className="header-wrapper">
                <div className="header--left">
                    <a href="#">
                        <img className = 'header__logo' src="https://2ch.hk/dr/src/303457/15719175824470.png" alt=""/>
                    </a>
                    <form action="" className = 'header__search'>
                        <input placeholder="Search" type="text" name="" id="" className = 'input header__input'/>
                        <button className = 'header__search-button'>
                            <img src="https://www.nikken.com/nikkeninc_home/img/search_image.png"  width="20px" alt=""/>
                        </button>
                    </form>
                </div>
                <div className="header--right">
                    <div className="header__menu">
                        <a href="#"><img src="https://sun9-70.userapi.com/c846521/v846521218/16b2df/S-3wTq0CFlU.jpg" alt="" className="header__avatar"/></a>                
                        <div className="header__name"><a href="#">Alex</a></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;