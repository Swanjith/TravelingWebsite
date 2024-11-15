import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/app/Home';
import Destinations from '@/app/Destinations';
import TripPlanner from '@/app/TripPlanner';
import { TravelBookingForm } from './components/TravelBookingForm';
// import { MapComponent } from './components/MapComponent';
import SignupForm from '@/app/(auth)/signup-form'
import LoginForm from '@/app/(auth)/login-form'
import '@/styles/index.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen   ">
        {/* Navbar */}
        <Navbar />

        <main className="container mx-auto px-4 ">
          <Routes>
            {/* General pages */}
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/plan" element={<TripPlanner />} />
            {/* <Route path="/map" element={<MapComponent />} /> */}
            <Route path="/book" element={<TravelBookingForm />} />
            <Route path="/signUP" element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
