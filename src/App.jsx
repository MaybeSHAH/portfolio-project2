import React from 'react'
import { About, Contact, Experience, Footer, Header, Nav, Services, Testimonials } from './components';
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App