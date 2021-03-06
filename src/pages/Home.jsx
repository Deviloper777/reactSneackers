import Card from "../components/Card";
import React from "react";

function Home ({items, searchValue, setSearchValue, onChangeSearchInput, onFavorite, onAddToCart}){
    return(
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Поиск по запросу:  "${searchValue}"` : 'Все кроссовки'} </h1>
                <div className='search-block'>
                    <img src="/img/search.svg" alt="Search"/>
                    {searchValue && <img onClick={()=>setSearchValue ('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>

                </div>
            </div>
            <div className="d-flex flex-wrap ">
                {items
                    .filter((item) =>item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card
                            key = {index}
                            onFavorite={(obj)=> onFavorite(obj)}
                            onPlus={(obj)=>onAddToCart(obj)}
                            {...item}
                        />
                    ))}


            </div>
        </div>
    )
}
export default Home;
