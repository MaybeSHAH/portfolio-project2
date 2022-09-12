import React from 'react'
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Services, Testimonials } from './components';
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Contact />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Footer />
    </>
  )
}

export default App