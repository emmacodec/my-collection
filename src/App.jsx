import React from "react";
import Intro from "./components/intro";
import Timeline from "./components/timeline";
import Contacts from "./components/contacts";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";



function App () {

  return (
    <div className="App">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App;