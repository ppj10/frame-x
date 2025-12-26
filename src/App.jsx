import Layout from "./components/Layout"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  )
}

export default App
