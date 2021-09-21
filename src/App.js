//import './App.css';
import React from "react";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Route} from 'react-router-dom';
import axios from "axios";
import Header from './components/Header';
import Drawer from "./components/Drawer";



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [favorites, setFavorites] = React.useState('');
    const [cartOpened, setCartOpened]=React.useState(false);
    React.useEffect(()=>{

        axios.get('https://613744d3eac1410017c1826c.mockapi.io/items').then((res)=>{
            setItems(res.data);
        });
        axios.get('https://613744d3eac1410017c1826c.mockapi.io/cart').then((res)=>{
            setCartItems(res.data);

        });
        axios.get('https://613744d3eac1410017c1826c.mockapi.io/favorites').then((res)=>{
            setFavorites(res.data);

        });
    },[]);

    const onAddToCart =(obj) =>{
        axios.post('https://613744d3eac1410017c1826c.mockapi.io/cart', obj);
        setCartItems(prev=>[...prev , obj]);

    };
    const onRemoveItem= async (id) =>{
        const {geg} = await axios.delete(`https://613744d3eac1410017c1826c.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
    const onFavorite= async (obj) =>{
        if(favorites.find((favObj) => favObj.id === obj.id)){
            axios.delete(`https://613744d3eac1410017c1826c.mockapi.io/favorites/${obj.id}`);

        } else{
            const {data} = await axios.post('https://613744d3eac1410017c1826c.mockapi.io/favorites', obj);
            setFavorites(prev=>[...prev , data]);

        }


    };
    const onChangeSearchInput = (event) => {
setSearchValue(event.target.value);

    }

    return <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={()=> setCartOpened(true)} />

        <Route path = "/" exact>
    <Home
        items = {items}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        onChangeSearchInput = {onChangeSearchInput}
        onFavorite = {onFavorite}
        onAddToCart = {onAddToCart}
    />
     </Route>

        <Route path = "/favorites" exact>
            <Favorites items = {favorites} onFavorite={onFavorite}
            />
        </Route>
    </div>

}


export default App;
