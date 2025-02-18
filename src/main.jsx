import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/toaster'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]'
import MyTrips from './my-trips'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOGGLE_OAUTH_CLIENT_ID}>
        <Header />
        <Toaster />
        <div className='min-h-screen'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/view-trip/:tripId" element={<ViewTrip />} />
            <Route path="/my-trips" element={<MyTrips />} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
