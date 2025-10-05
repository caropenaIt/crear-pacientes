import { useState } from 'react';
import './PatientList.css';
import './PatientForm.jsx';
import './PatientForm.css';


const PatientList = ({ patients}) => {

  if (!patients || patients.length === 0) {
    return <p>No hay pacientes registrados para mostrar en los resultados de búsqueda.</p>;
  }

  return (
    <div>
      <h3>Resultados de Búsqueda</h3>
      {
        patients.map((patient) => (
          <form className='form' key={patient.id}>
            
            <div className='formGroup'>
              <label htmlFor={`nombre-${patient.id}`}>Nombre y Apellido:</label>
              <input
                type="text"
                id={`nombre-${patient.id}`}
                value={`${patient.nombre || ''}`}
                readOnly
              />
            </div>

            
            <div className='formGroup'>
              <label htmlFor={`fechaNacimiento-${patient.id}`}>Fecha de Nacimiento:</label>
              <input
                type="date"
                id={`fechaNacimiento-${patient.id}`}
                value={patient.fechaNacimiento || ''}
                readOnly
              />
            </div>

            
            <div className='formGroup'>
              <label htmlFor={`Sexo-${patient.id}`}>Sexo:</label>
              <select
                id={`Sexo-${patient.id}`}
                value={patient.Sexos || ''}
                disabled
              >
                <option value="">Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            
            <div className='formGroup'>
              <label htmlFor={`dni-${patient.id}`}>DNI:</label>
              <input
                type="number"
                id={`dni-${patient.id}`}
                value={patient.dni || ''}
                readOnly
              />
            </div>

           
            <div className='formGroup'>
              <label htmlFor={`tipoObraSocial-${patient.id}`}>Cobertura:</label>
              <select
                id={`tipoObraSocial-${patient.id}`}
                value={patient.tipoObraSocial || ''}
                disabled
              >
                <option value="">Cobertura</option>
                <option value="obraSocial">Obra Social o Prepaga</option>
                <option value="particular">Particular</option>
              </select>
            </div>

            <div className='formGroup'>
              <label htmlFor={`telefono-${patient.id}`}>Teléfono:</label>
              <input
                type="tel"
                id={`telefono-${patient.id}`}
                value={patient.telefono || ''}
                readOnly
              />
            </div>

          
            <div className='formGroup'>
              <label htmlFor={`email-${patient.id}`}>Email:</label>
              <input
                type="email"
                id={`email-${patient.id}`}
                value={patient.email || ''}
                readOnly
              />
            </div>

          
            <div className='formGroup'>
              <label htmlFor={`motivoConsulta-${patient.id}`}>Motivo de consulta:</label>
              <select
                id={`motivoConsulta-${patient.id}`}
                value={patient.motivoConsulta || ''}
                disabled
              >
                <option value="">Motivo de consulta</option>
                <option value="blanqueamineto">Blanqueamiento</option>
                <option value="caries">Caries</option>
                <option value="implantes">Implantes</option>
                <option value="diagnostico">Diagnóstico</option>
              </select>
            </div>

            
            <div className='formGroup1'>
              <label htmlFor={`historiaClinica-${patient.id}`}>N° de Historia Clínica:</label>
              <input
                type="number"
                id={`historia-${patient.id}`}
                value={patient.hClinica || ''}
                readOnly
              />
            </div>

            
            {patient.tipoObraSocial === 'obraSocial' && (
              <>
                <h4>Datos de la Obra Social</h4>
                <div className='formGroup'>
                  <label htmlFor={`numeroAfiliado-${patient.id}`}>N° de Afiliado:</label>
                  <input
                    type="text"
                    id={`numeroAfiliado-${patient.id}`}
                    value={patient.numeroAfiliado || ''}
                    readOnly
                  />
                </div>
                <div className='formGroup'>
                  <label htmlFor={`titularObraSocial-${patient.id}`}>Apellido y Nombre del Titular:</label>
                  <input
                    type="text"
                    id={`titularObraSocial-${patient.id}`}
                    value={patient.titularObraSocial || ''}
                    readOnly
                  />
                </div>
                <div className='formGroup1'>
                  <label htmlFor={`nombreObra-${patient.id}`}>Nombre de la Obra Social o Prepaga:</label>
                  <input
                    type="text"
                    id={`nombreObra-${patient.id}`}
                    value={patient.nombreObra || ''}
                    readOnly
                  />
                </div>
              </>
            )}

       
          </form>
        ))
      }
    </div>
  );
};




export default PatientList;