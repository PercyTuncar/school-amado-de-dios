/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from "./header"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";




const Layout = ({children, className}) => {

  return (
    <div className="primary-container">
      <Header>
        <Navigation/>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

