import './App.css';
import {

  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Register from './Register/Register'
import Admin from './Admin'
import React from 'react';
import News from './News/News';
import Footer from './Footer/Footer';
import Team from './Team/Team';
import Proc from './Proc/Proc';
import Revie from './Revie/Revie';
import Newf from './Newf/Newf';
import Navbar from './Navbar/Navbar';
import Lakta from './Lakta/Lakta';
import Section from './Section/Section';
import Features from './Features/Features';
import SignupForm from './SingupForm/SignupForm';
import Profile from './profile/Profile';
import NotFound from './NotFound';
import NoAccess from './Noaccess';
import PrivateRouter from './PrivateRouter';
import AdminRouter from './AdminRouter';
import ForceRedirect from './ForceRedirect';
import N from './components/N';
import Prices from './components/Prices'
import TradingViewOverview from './components/TradingViewOverview'
import Videos from './components/Videos';
import Learn from './components/Learn';


function App() {
  const user = {
    isConnected: false,
    role: "USER"
  }
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Lakta />
          <Features />
          <Proc />
          <Section />
          <Team />
          <Revie />
          <News />
          <Newf />

          <Footer />
        </>} />
        {/* <Route path='/signup' element={<ForceRedirect user={user}>
          <SignupForm />
        </ForceRedirect>} />
        <Route path='/register' element={<ForceRedirect user={user}>
          <Register />
        </ForceRedirect>} />
        <Route path="/profile" element={<PrivateRouter user={user}>
          <Profile />
        </PrivateRouter>} /> */}
        <Route path="/signup" element={<>
          <Navbar />
          <SignupForm />

        </>} />
        <Route path="/register" element={<>
          <Navbar />
          <Register />

        </>} />
        <Route path="/Learn" element={<>
          <Navbar />
          <Learn />

        </>} />
        <Route path="/N" element={<>
          <Navbar />
          <N />

        </>} />
        <Route path="/prices" element={<>
          <Navbar />
          <Prices />
          <TradingViewOverview />


        </>} />
        <Route path="/admin" element={<AdminRouter user={user}>
          <Admin />
        </AdminRouter>} />
        <Route path="*" element={<>
          <Navbar />
          <NotFound />

        </>} />

        <Route path="/noaccess" element={<>
          <Navbar />
          <NoAccess />

        </>} />
        <Route path="/profile" element={<>
          <Navbar />
          <Profile />

        </>} />


        <Route path="/register" element={<>
          <Navbar />
          <Register />
        </>} />
        <Route path="/new" element={<>
          <Navbar />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br />
          <Newf />
        </>} />
        <Route path="/news" element={<>
          <Navbar />
          <Videos />

        </>} />
        <Route path="/admin" element={<>
          <Navbar />
          <Admin />
        </>} />
        <Route path="/about" element={<>
          <Navbar />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /><br /> <br /> <br /> <br /> <br /> <br /> <br />  <br /> <br /> <br /> <br />
          <Section />

        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
