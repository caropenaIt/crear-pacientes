import { useState, useEffect } from 'react';
import PatientForm from './PatientForm.jsx'; 
import './PatientsScreen.css';
import './PatientForm.css';
import './PatientList.css';
import PatientList from './PatientList.jsx';
import PatientFicha from './PatientFicha.jsx';
import editar from'./assets/editar.svg';
import vector from './assets/vector.svg';
import menu from './assets/menu-burguer.svg';
import drop from './assets/dropdown.svg';
import logoMarca from './assets/logo-tres.png';


const PatientsScreen = () => {
   const [showForm, setShowForm] = useState(false);
   const [patients, setPatients] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [searchPerformed, setSearchPerformed] = useState(false);
   const [selectedPatient, setSelectedPatient] = useState(null);


  const [paginaActual, setPaginaActual] = useState(1);
   const pacientesPorPagina = 10;


   const [mostrarListado, setMostrarListado] = useState(false);
   const handleClickMostrarListado = () => {
    setMostrarListado(!mostrarListado);
     if (!mostrarListado) {
       setPaginaActual(1);
       setSearchPerformed(false);
       setSearchResults([]);
       setSearchTerm('');
       setShowForm(false);
       setSelectedPatient(null);
     }
   };


   useEffect(() => {
     const storedPatients = localStorage.getItem('patients');
     if (storedPatients) {
       setPatients(JSON.parse(storedPatients));
    }
  }, []);

   useEffect(() => {
     localStorage.setItem('patients', JSON.stringify(patients));
   }, [patients]);

   const handleAddPatient = (newPatient) => {
     setPatients([...patients, newPatient]);
     setShowForm(false);
     setMostrarListado(false);
     setPaginaActual(1);
   };

   const handleSearchInputChange = (event) => {
     setSearchTerm(event.target.value);
     setSearchPerformed(false);
     setSearchResults([]);
     setMostrarListado(false);
     setSelectedPatient(null);
   };

  const handleSearchButtonClick = () => {
     setSearchPerformed(true);
     const results = patients.filter((patient) =>
       patient.dni.includes(searchTerm)
     );
     setSearchResults(results);
     setMostrarListado(false);
     setSelectedPatient(null);
  };

   
   const sortedPatients = [...patients].sort((a, b) => {
     const nombreA = `${a.nombre || ''} `.toLowerCase();
     const nombreB = `${b.nombre || ''} `.toLowerCase();
     return nombreA.localeCompare(nombreB);
   });

  
   const indiceUltimoPaciente = paginaActual * pacientesPorPagina;
   const indicePrimerPaciente = indiceUltimoPaciente - pacientesPorPagina;
   const pacientesActuales = sortedPatients.slice(indicePrimerPaciente, indiceUltimoPaciente);
   const totalPaginas = Math.ceil(sortedPatients.length / pacientesPorPagina);

   const cambiarPagina = (numeroPagina) => {
     setPaginaActual(numeroPagina);
   };


   const handleAccessFicha = (patient) => {
     setSelectedPatient(patient); 
     setMostrarListado(false);
     setSearchPerformed(false);
     setShowForm(false); 
   };


   return (
    
     <div className='container'>
    <header>
  <img src={logoMarca} className="logoMarca" alt="Mi logo" />
  <p>Componente creado por <a href="https://www.linkedin.com/in/carolina-pena-astigarraga/" target='blank'>Carolina Alejandra Pena Astigarraga</a> para <a href="https://www.linkedin.com/company/makisan-tech/" target='blank'>MakiSan Tech</a>. 2025</p>
</header>
       <img src={menu} alt="menu" className='menu' />

       <div className='header'>
         <h2>Lista de pacientes</h2>
         <div className='buttons'>
           <button className='button' onClick={handleClickMostrarListado}>
             {mostrarListado ? 'Ocultar Listado' : 'Listado completo'}
           </button>
           <img src={editar} alt="editar" className='editar' />
         </div>
       </div>

       <button className='addButton' onClick={() => setShowForm(true)}>
         <span>+</span>
         Agregar paciente
       </button>

       <div className='searchContainer'>
         <p> <img src={vector} alt="lupa" /> Búsqueda de pacientes por datos específicos</p>
         <label>Ingresa DNI</label>
         <input
           type="text"
           placeholder="Ingresa DNI"
           value={searchTerm}
           onChange={handleSearchInputChange}
           className='searchInput'
         />
         <button onClick={handleSearchButtonClick} className='submitButton'>
           Buscar paciente
         </button>
       </div>

       
       {showForm && <PatientForm onAddPatient={handleAddPatient} />}

       
       {selectedPatient && (
         <div>
       
           <PatientFicha patient={selectedPatient} />
           <button className='button' onClick={() => setSelectedPatient(null)}>Cerrar Ficha</button>
         </div>
       )}

       {mostrarListado && !selectedPatient && (
         <div className="listado">
           <h3>Listado Completo</h3>
           <article className='tituloLista'>
             <h4>Nombre Y Apellido <img src={drop} alt="dropdown" /></h4>
             <h4>DNI <img src={drop} alt="dropdown" /></h4>
             <h4>N° Historia Clínica <img src={drop} alt="dropdown" /></h4>
           </article>
           {patients.length > 0 ? (pacientesActuales.map((patient) => (
               <div className='lista' key={patient.id}>
               <h4 className='mobileTitulo'>Nombre Y Apellido <img src={drop} alt="dropdown" /></h4>
                 <p className='item'>{patient.nombre}</p>
                 <h4 className='mobileTitulo'>DNI <img src={drop} alt="dropdown" /></h4>
                 <p className='item'>{patient.dni}</p>
                 <h4 className='mobileTitulo'>N° Historia Clínica <img src={drop} alt="dropdown" /></h4>
                 <p className='item'>{patient.hClinica}</p>
                <button className='button' onClick={() => handleAccessFicha(patient)}>Acceder a ficha</button>
                 <img src={editar} alt="editar" className='editar' />
               </div>
             ))
           ) : (
             <p>No hay pacientes registrados para mostrar en el listado completo. Agrega nuevos en "Agregar paciente".</p>
           )}

         
           {totalPaginas > 1 && (
             <div className="paginacion">
               <span>Página {paginaActual} de {totalPaginas}</span>
               <button
                 onClick={() => cambiarPagina(paginaActual - 1)}
                 disabled={paginaActual === 1}
               >
                 Anterior
               </button>
             
               <button
                 onClick={() => cambiarPagina(paginaActual + 1)}
                  disabled={paginaActual === totalPaginas}
               >
                 Siguiente
               </button>
             </div>
           )}
         </div>
       )}

     
       {!mostrarListado && searchPerformed && !selectedPatient ? (
         searchResults.length > 0 ? (
           <PatientList patients={searchResults} />
         ) : (
          <p>Los datos que ingresaste no se corresponden con ningún paciente de la clínica, puedes realizar una nueva búsqueda o completar los datos para ingresar al paciente y otorgarle un turno.</p>
         )
       ) : (
       
         !mostrarListado && !searchPerformed && !selectedPatient && <p>Busca a tus pacientes en el buscador o haciendo click en "Listado completo".</p> // Muestra el mensaje inicial solo si no hay listado, búsqueda o ficha
       )}

       <div className='bottomButtons'>
         <button className='button'>Ingresar a la ficha del paciente</button>
         <div className='buttons'>
           <button className='button'>Historia Clínica</button>
           <img src={editar} alt="editar" className='editar' />
         </div>
       </div>

     </div>

   );

 };

export default PatientsScreen;
