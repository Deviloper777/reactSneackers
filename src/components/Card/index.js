import React from 'react'
import styles from './Card.module.scss';

function Index({id, price, title, imageUrl, onFavorite, onPlus, favorited=false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const onClickPlus = () => {
        onPlus({price, title, imageUrl});
        setIsAdded(!isAdded);
    }
const onClickFavorite = ()=> {
    onFavorite({id, price, title, imageUrl});
        setIsFavorite(!isFavorite)
};
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "img/heart-l.svg" : "img/heart-un.svg" } alt=""/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <div>

                    <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btn-check.svg" : "/img/plus-btn.svg"  } alt=""/>

                </div>
            </div>
        </div>
    );

}

export default Index