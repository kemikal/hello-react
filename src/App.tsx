import './App.css'

function App() {

  console.log("TEST", import.meta.env.VITE_TEST_KEY)

  return (
    <>
      <h1>Hello Digital Ocean</h1>
      This is a {process.env.NODE_ENV} version!
    </>
  )
}

export default App
