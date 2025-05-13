import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [items, setItems] = useState([
    { title: "Progra Web", description: "Clase de los sábados" },
    { title: "Base de Datos", description: "Diseño y consultas SQL" },
    { title: "Redes", description: "Modelos OSI y TCP/IP" }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <TopNavbar />
            <div style={{ display: "flex", flex: 1 }}>
              <SideNavbar />
              <div style={{ marginLeft: '220px', marginTop: '56px', padding: '20px', flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home items={items} />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
