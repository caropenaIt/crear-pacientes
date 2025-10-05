import { useState } from 'react';
import { useEffect } from 'react';
import './PatientForm.css';
import almanaque from './assets/almanaque.svg';





 const PatientForm = ({ onAddPatient }) => {
   const [nombre, setNombre] = useState('');
   const [dni, setDni] = useState('');
   const [fechaNacimiento, setFechaNacimiento] = useState('');
   const [telefono, setTelefono] = useState('');
   const [email, setEmail] = useState('');
   const [tipoObraSocial, setTipoObraSocial] = useState('');
   const [numeroAfiliado, setNumeroAfiliado] = useState('');
   const [titularObraSocial, setTitularObraSocial] = useState('');
   const[nombreObra, setNombreObra] = useState('');
   const[Sexos, setSexo] = useState('');
   const[motivoConsulta, setConsulta] = useState('');
   const[hClinica, setHistoria] = useState('');

  const handleSubmit = (event) => {
    
     event.preventDefault();
     if (!/^\d{8}$/.test(dni)) {
       (<p>El DNI debe tener 8 caracteres.</p>);
       return;
     }

     const newPatient = {
       id: Date.now(),
       nombre,
       dni,
       Sexos,
       fechaNacimiento,
       telefono,
       email,
       tipoObraSocial,
       numeroAfiliado: tipoObraSocial === 'obraSocial' ? numeroAfiliado : '',
       titularObraSocial: tipoObraSocial === 'obraSocial' ? titularObraSocial : '',
       nombreObra,
       motivoConsulta,
       hClinica,
     };
     onAddPatient(newPatient);
     setNombre('');
     setSexo('');
     setDni('');
     setFechaNacimiento('');
     setTelefono('');
     setEmail('');
     setTipoObraSocial('');
     setNumeroAfiliado('');
     setTitularObraSocial('');
     setNombreObra('');
     setConsulta('');
     setHistoria('');
   };

   const handleTipoObraSocialChange = (event) => {
     setTipoObraSocial(event.target.value);
     setNumeroAfiliado('');
     setTitularObraSocial('');
     setNombreObra('');
   };

   return (
     <div>
       <h4>Datos del paciente</h4>
       <form onSubmit={handleSubmit} className='form'>
         <div className='formGroup'>
           <label htmlFor="nombre">Nombre y Apellido:</label>
           <input

             type="text"
             placeholder='Nombre y Apellido'
             id="nombre"
             value={nombre}
             onChange={(e) => setNombre(e.target.value)}
             required
           />
         </div>

         <div className='formGroup'>
           <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
           <input
             type="date"
             placeholder='F. de Nac'
             id="fechaNacimiento"
             value={fechaNacimiento}
             onChange={(e) => setFechaNacimiento(e.target.value)}
             required
           />

         </div>
         <div className='formGroup'>
           <label htmlFor="Sexo">Sexo:</label>
           <select
             id="Sexo"
             value={Sexos}
             onChange={(e) => setSexo(e.target.value)}
             required
           >
             <option value="">Sexo</option>
             <option value="masculino">Masculino</option>
             <option value="femenino">Femenino</option>
             <option value="otro">Otro</option>
           </select>
         </div>

         <div className='formGroup'>
           <label htmlFor="dni">DNI:</label>
           <input
             type="number"
             placeholder='DNI'
             id="dni"
             value={dni}
             onChange={(e) => setDni(e.target.value)}
             required
           />
         </div>
         <div className='formGroup'>
           <label htmlFor="tipoObraSocial">Cobertura:</label>
           <select
             id="tipoObraSocial"
             value={tipoObraSocial}
             onChange={handleTipoObraSocialChange}
             required
           >
             <option value="">Cobertura</option>
             <option value="obraSocial">Obra Social o Prepaga</option>
             <option value="particular">Particular</option>
           </select>
         </div>

         <div className='formGroup'>
           <label htmlFor="telefono">Teléfono:</label>
           <input
             type="tel"
             placeholder='Teléfono'
             id="telefono"
             value={telefono}
             onChange={(e) => setTelefono(e.target.value)}
             required
           />
         </div>
         <div className='formGroup'>
           <label htmlFor="email">Email:</label>
           <input
             type="email"
             placeholder='Email'
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </div>

             <div className='formGroup'>
           <label htmlFor="motivoConsulta">Motivo de consulta:</label>
           <select
             id="motivoConsulta"
             value={motivoConsulta}
             onChange={(e) => setConsulta(e.target.value)}
             required
           >
             <option value="">Motivo de consulta</option>
             <option value="blanqueamineto">Blanqueamineto</option>
             <option value="caries">Caries</option>
             <option value="implantes">Implantes</option>
             <option value="diagnostico">Diagnóstico</option>
           </select>
         </div>

         <div className='formGroup1'>
          <label htmlFor="historiaClinica">N° de Historia Clínica:</label>
           <input
             type="number"
             placeholder='N° de Historia Clínica'
             id="historia"
             value={hClinica}
            onChange={(e) => setHistoria(e.target.value)}
             required
           />
        </div>

         {tipoObraSocial === 'obraSocial' && (
           <>

           <h4>Datos de la Obra Social</h4>
             <div className='formGroup'>
               <label htmlFor="numeroAfiliado">N° de Afiliado:</label>
               <input
                 type="text"
                 placeholder='N° de Afiliado'
                 id="numeroAfiliado"
                value={numeroAfiliado}
                 onChange={(e) => setNumeroAfiliado(e.target.value)}
                 required
               />
             </div>
             <div className='formGroup'>
               <label htmlFor="titularObraSocial">Apellido y Nombre del Titular:</label>
               <input
                 type="text"
                 placeholder='Apellido y Nombre del Titular'
                 id="titularObraSocial"
                 value={titularObraSocial}
                 onChange={(e) => setTitularObraSocial(e.target.value)}
                 required
               />
             </div>
             <div className='formGroup1'>
              <label htmlFor="nombreObra">Nombre de la Obra Social o Prepaga:</label>
              <input
                 type="text"
                 placeholder='Nombre de la Obra Social o Prepaga'
                 id="nombreObra"
                 value={nombreObra}
                 onChange={(e) => setNombreObra(e.target.value)}
                 required
              />
            </div>


          </>

        )}
         <button type="submit" className='submitButton'>Guardar paciente</button>

       </form>

     </div>
   );
 };


export default PatientForm;