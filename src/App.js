import './App.css';
import Navb from './Components/Navb';
import Product from './Components/Product';
import Title from './Components/Title';
function App() {
  const styleProp={color: 'brown', fontsize: '40px'}
  return (
    <div className="app">
     <Navb />
     <Title props={styleProp}/>
     <div className="cards">
     <Product country='france' mark='kia' name='kia sportage' price='136 480 DT'><img src='https://catalogue.automobile.tn/big/2022/08/46797.jpg?t=1675695458'alt='car'/> </Product>
     <Product mark='hundai' name='hundai i30' price='99 950 DT'><img src='https://catalogue.automobile.tn/big/2022/02/46675.jpg?t=1666027872'alt='car'/></Product>
     <Product mark='mercedes' name='mercedes clase A' price='180 000 DT'><img src='https://cdn.drivek.com/configurator-imgs/cars/fr/800/MERCEDES/A-CLASS-SEDAN/41349_SEDAN-4-DOORS/mercedes-benz-a-class-front-view.jpg'alt='car'/></Product>
    </div>
    </div>

  );
}
export default App;
