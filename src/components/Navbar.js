import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar main_content">
            <div className="navbar_text">
                <div className="navbar_uni">Санкт-Петербургский государственный университет</div>
                <div className="navbar_chair">Кафедра фонетики и методики преподавания иностранных языков</div>
                <div className="navbar_title">История фонетических исследований</div>
                <div className="navbar_buttons_div">

                    <Link to="/">
                        <button className="navbar-button">
                            Главная
                        </button>
                    </Link>


                    <Link to="/contents">
                        <button className="navbar-button">
                            Содержание
                        </button>
                    </Link>

                </div>
            </div>
            <div className="navbar_img_div">
                <img alt="" className="navbar_img" src="/img/snail.png"></img>
            </div>
        </nav>
    );
}