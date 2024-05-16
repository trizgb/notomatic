import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>App</header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
