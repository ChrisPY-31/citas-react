import React from 'react'
import { ProductosCard } from '../ProductosCard/ProductosCard'
import './Productos.css'
const Productos = ( {productos , handleClick , setSearchNav , handleFavorites ,setSlider , handleImage}) => {
  return (
    <div className='container'>
        {productos.map((produ)=>(
            <div className='container__producto' key={produ.id}>
                <ProductosCard handleClick={handleClick}
                produ={produ}
                setSearchNav={setSearchNav}
                handleFavorites={handleFavorites}
                setSlider={setSlider}
                handleImage={handleImage}
                />
            </div>
        ))}
    </div>
  )
}

export default Productos