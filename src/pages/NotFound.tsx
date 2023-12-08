import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={"center"}>
            <h1>404 страница не найдена =(</h1>
            <Link to={'/'}>
                <button>На главную страницу</button>
            </Link>
        </div>
    );
};

export default NotFound;