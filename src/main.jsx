import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BriefInfo from './components/BriefInfo.jsx'
import icon from './assets/image.png';
import Lightbtn from './components/buttons/Lightbtn.jsx'
import Part3 from './components/Part3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col w-[90vw]'>
      <Part3/>

    </div>
    
  </StrictMode>,
)
