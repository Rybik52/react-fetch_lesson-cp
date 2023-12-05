import {FC} from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header:FC = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <div className="header-container__logo">
                        <span className="fa fa-handshake-o fa-lg"></span>
                        <h3>IT-dex</h3>
                    </div>
                </Link>
                <nav>
                    <span>
                        <a href="#footer">
                            Ссылка на footer
                        </a>
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;