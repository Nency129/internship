import './App.css';
import Login from './component/Login.js';
import Cart from './component/Cart';
import Method from './component/Method';
import Header from './component/Header';
import Footer from './component/Footer';
import Header1 from './component/Header1';
function App() {
  return (
    <>
    <div className="container text-center mb-3">
      <Header/>
      <hr/>
      <Header1/>
    
      <br/>
    
        <div class="container-fuild mt-5 ms-5 text-center">
            <div class="row gx-4">
                <div class="col">
                <div class="pt-3"><Login/></div>
                </div>
                <div class="col">
                  <div class="pt-3"><Method/></div>
                </div>
                <div class="col">
                  <div class="pt-3"><Cart/></div>
                </div>
            </div>
        </div>
      <Footer/>
    </div> 
    </>
    
  );
}

export default App;
