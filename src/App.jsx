import './App.css'
import Layout from "./components/Layout";
import Navbar from './components/Navbar'
import ApiOverview from './components/ApiOverview'
import ApiDocs from './components/apidocs/ApiDocs'
import Footer from './components/Footer'

function App() {

  return (
      <Layout>
        <Navbar />
        <ApiOverview />
        <ApiDocs />
        <Footer />
      </Layout>
  )
}

export default App