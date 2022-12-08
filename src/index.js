import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/scss/main.scss'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
