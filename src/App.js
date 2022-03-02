import './App.css';
import Nav from './components/Nav/Nav';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import ItemSelected from './components/ItemSelected/ItemSelected';
import ItemCart from './components/ItemCart/ItemCart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Nav/>       
    </div>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<Item/>}/>
      <Route path='/categ/:categoria' element={<ItemSelected/>}/>
      <Route path='/cart/:cant' element={<ItemCart/>}/>
        
               

    </Routes>
    </BrowserRouter>
  );
}

export default App;
