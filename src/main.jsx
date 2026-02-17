import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LangProvider } from './contexts/LangContext'
import App from './App'
import './index.css'

// GitHub Pages SPA redirect handling
const { search } = window.location
if (search.startsWith('?/')) {
  const decoded = search
    .slice(2)
    .split('&')
    .map((s) => s.replace(/~and~/g, '&'))
    .join('?')
  window.history.replaceState(null, '', '/' + decoded + window.location.hash)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/karc">
      <LangProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>
)
