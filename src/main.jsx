import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './PatientForm.css';
import './PatientList.jsx'
import './PatientsScreen.css';
import PatientsScreen from './PatientsScreen.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <PatientsScreen/>
  </StrictMode>,
)
