import { FC } from 'react';
import "./products-list.css"

interface RatingProps {
    rating: number; // Рейтинг от 0 до 5
}

const Rating: FC<RatingProps> = ({ rating }) => {
    const totalStars = 5; // Общее количество звёзд

    // Округляем значение рейтинга до ближайшего 0.5
    const roundedRating = Math.round(rating * 2) / 2;

    // Создаем массив, который будет представлять звезды
    const stars = Array.from({ length: totalStars }, (_, index) => (
        <span
            key={index}
            className={`star ${index < roundedRating ? 'filled' : ''}`}
        >
      ★
    </span>
    ));

    return <div className="rating">{stars}</div>;
};

export default Rating;
