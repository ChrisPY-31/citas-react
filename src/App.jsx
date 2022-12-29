import axios from "axios";
import { useState , useEffect } from "react";
import Productos from "./components/Productos/Productos";
import { Nav } from "./components/Nav/Nav";
import { Search } from './components/Search/Search';
import { Route , Routes ,useNavigate} from "react-router-dom";
import { Favorites } from "./components/Favorites/Favorites";
import { SobreNosotros } from "./components/SobreNosotros/SobreNosotros";
import { ProductoAgregado } from "./components/ProductoAgregado/ProductoAgregado";
import { Description } from "./components/Description/Description";
import Slider from "./components/Slider/Slider";
const apidata = 'https://fakestoreapi.com/products'



function App() {
  
  const navigate = useNavigate()
  const [productos, setProductos] = useState([])
  const [inputChara , setInputChara] = useState([])
  const [searchNav , setSearchNav] = useState(true)
  const [agregar , setAgregar] = useState(false)
  const [input , setInput] = useState('')
  const [carrito , setCarrito] = useState([])
  const [carritoFast, setCarritoFast] = useState([])
  const [favorites, setFavorites] = useState([])
  const [slider , setSlider] = useState(true)
  const [imageProdu , setImageProdu] = useState([])
  useEffect(()=>{

    function getAgregar(){
      if(agregar){
        console.log('agregandoooooo')
        setTimeout(()=>{
          setAgregar(!agregar)
        },1500)
      }
    }
    async function getStoreData(){
      const response = await axios.get(apidata) 
      setProductos(response.data)
      setInputChara(response.data)
    }
    getStoreData()
    getAgregar()
  },[agregar])


  const handleValor = (valor) =>{
    setInput(valor)
    filtrar(valor)
  }

  const filtrar  = (terminoBusqueda) =>{
    const busqueda = inputChara.filter(element =>{
      if(element.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return element
      }
    })
    setProductos(busqueda)
  }

  const handleClick = (agregarProducto) =>{
    console.log({agregarProducto})
      setCarrito([agregarProducto , ...carrito])
      setAgregar(!agregar)
      const productFind = carritoFast.find(produ=> produ.id === agregarProducto.id)
      if(productFind){
        carritoFast.map(e=>e.id === agregarProducto.id && (e.cantidad = e.cantidad + 1))
        console.log('**+++++++***++++++++++++++++++++++++', {carritoFast})
      }else {
        setCarritoFast([...carritoFast , {...agregarProducto , cantidad: 1}])
      } 
  } 
  const handleCerrar = (id)=>{
    setCarrito(carrito.filter(produ => produ.id !== id))
    setCarritoFast(carritoFast.filter( carro=> carro.id !== id))
  }
  
  const handleFavorites = (favo) =>{
      if(favorites.find(favor => favor.id === favo.id)){
        return favorites
      }else{
        setFavorites([...favorites ,favo])
      }
  }

  const favoritesDelete = (id) =>{
    setFavorites(favorites.filter(produFavorites => produFavorites.id !== id ))
  }

  const handleImage = (produImg)=>{
    navigate('description')
    setSearchNav(false)
    setSlider(false)
    setImageProdu([produImg])
    
  }

  return (
    <div className="app">
      <Nav  
      carrito={carrito}
      setCarrito={setCarrito} 
      handleCerrar={handleCerrar}
      carritoFast={carritoFast}
      setSlider={setSlider}
      setCarritoFast={setCarritoFast}
      setSearchNav={setSearchNav} 
      />
      {slider&&(
        <Slider/>
      )}
      {searchNav && (
        <Search handleValor={handleValor}/>
      )}
      {agregar &&(
        <ProductoAgregado />
      )}
      <Routes>
        <Route path="/" element={<Productos 
        productos={productos} 
        handleClick={handleClick} 
        setSearchNav={setSearchNav} 
        handleImage={handleImage}
        handleFavorites={handleFavorites} 
        setSlider={setSlider} />}/>
        <Route path="SobreNosotros" element={<SobreNosotros />}/>
        <Route path="favorites" element={<Favorites favorites={favorites} favoritesDelete={favoritesDelete}  />}/>
        <Route path="description" element={<Description imageProdu={imageProdu} />}/>
      </Routes>
    </div>
  );

}

export default App;
