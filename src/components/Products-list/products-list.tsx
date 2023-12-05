import { FC } from 'react';
import { Product } from "../../App";
import Rating from "./Rating";
import "./products-list.css"
import { Link } from "react-router-dom";

interface ProductsListProps {
    data: Product[]
}


const ProductsList: FC<ProductsListProps> = ({ data }) => {
    if (data.length === 0) {
        return <h1 className="Loading">Loading...</h1>;
    }

    const listItems = data.map(item => (
        <Link key={item.id}  to={"/product/" + item.id}>
            <div className="container__item">
                <img loading="lazy" src={item.images[0]} alt={item.title} />
                <div className="container__item-title">Название: {item.title}</div>
                <div className="container__item-price ">Цена: {item.price}$</div>
                <div className="container__item-rating">
                    <Rating rating={item.rating} />
                </div>
            </div>
        </Link>
    ));

    return (
        <div className="container">
            {listItems}
        </div>
    );
};

export default ProductsList;
