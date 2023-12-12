import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';

function App() {
  return (
    <div className="App">
      <div className = "body">
        <div className = "header">
          <div className = "logo">
            <div>Insert logo here</div>
          </div>
          <div className = "search-bar">
            <div>search</div>
          </div>
          <div className = "basket">
            <div>basket</div>
          </div>
        </div>
        <div></div>
        <div className = "content"></div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
