import { Route , Routes, BrowserRouter } from 'react-router-dom';
import Addproduct from './products/Addproducts';
import Productdetails from './products/productdetails';
import Propconcept from './products/Propconcept';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path = "/" element = {<Addproduct />} />
      <Route path = "/productdetails" element = {<Productdetails />} />
      <Route path = "/updateproduct" element = {<Propconcept />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
