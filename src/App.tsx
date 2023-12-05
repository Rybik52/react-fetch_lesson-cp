import {FC, useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/Products-list/products-list";
import ProductItem from "./components/Product-item/product-item";


export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ApiResponse {
    products: Product[];
}


const App:FC = () =>  {
const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Не удалось запросить ресурс" + res.status);
                }
                return res.json();
            })
            .then((json) => {
                const apiResponse: ApiResponse = {
                    products: json.products,
                };
                setData(apiResponse.products);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, []);

  return (
    <>
        <Header />
        <main>
            <Routes>
                <Route path='/react-fetch_lesson-cp/' element={<ProductsList data={data} />} />
                <Route path="/product/:id" element={<ProductItem />} />
            </Routes>
        </main>
        <Footer />
    </>
  )
}

export default App
