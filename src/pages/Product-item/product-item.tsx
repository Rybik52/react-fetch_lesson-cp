import {FC, useEffect, useState} from 'react';
import {Product} from "../../App";
import Rating from "../../components/Products-list/Rating";
import {useParams} from "react-router-dom";
import "./product-item.css";

const ProductItem:FC = () => {
    const [itemData, setItemData] = useState<Product | undefined>(undefined)
    const { id } = useParams<{id: string}>();

    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Не удалось запросить ресурс" + res.status)
                }
                return res.json()
            })
            .then((json)=> setItemData(json))
            .catch((error) => {
                console.error("Fetch error:", error)
            })
    }, [id])

    return (
        <div className="item-page">
            {itemData ? (
                <>
                    <div className="item-page__label">
                        <img src={itemData.images[0]} alt={itemData.title} />
                        <h3>Название: {itemData.title}</h3>
                        <span>Цена: {itemData.price}$</span>
                        <Rating rating={itemData.rating} />
                    </div>
                    <div className="item-page__info">
                        <span>Бренд: {itemData.brand}</span>
                        <span>Категория: {itemData.category}</span>
                        <p>Описание: {itemData.description}</p>
                    </div>
                </>
            ) : (<h1>Loading...</h1>)}

        </div>
    );
};

export default ProductItem;