import { Route , Routes, BrowserRouter } from 'react-router-dom';
import Addproduct from './products/Addproducts';
import Productdetails from './products/productdetails';
import Propconcept from './products/Propconcept';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/ProductManagement" element = {<Addproduct />} />
      <Route path = "/ProductManagement/productdetails" element = {<Productdetails />} />
      <Route path = "/ProductManagement/updateproduct" element = {<Propconcept />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
