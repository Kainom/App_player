    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'
    import { BrowserRouter as Router } from 'react-router-dom'
    import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import'./App.css'
    const App:React.FC = () =>{

      return (
        <Router>
          <Header/>
          <AppRoutes/>
        </Router>

      )
    }

    export default App
