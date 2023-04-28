import Header from '../widgets/Header/Header';
import '../shared/fonts/glacial-indifference-cufonfonts-webfont/style.css';
import '../app/style/index.css';
import Footer from '../widgets/Footer/Footer';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Profile from '../pages/Profile';
import Main from '../shared/main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='PROFILE' element={<Profile/>}/>
            
          </Routes> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
