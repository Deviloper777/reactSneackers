
import {Link} from 'react-router-dom';
function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to = "/">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt='logotype'/>
                <div>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" alt='Корзина'/>
                    <span>1205 руб.</span></li>
                <li>
                    <Link to = "/favorites"><img width={18} height={18} src="/img/heart.svg" alt='Закладки'/></Link>
                </li>
            </ul>
        </header>);


}

export default Header