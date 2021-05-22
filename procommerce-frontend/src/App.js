import React from "react"
import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
