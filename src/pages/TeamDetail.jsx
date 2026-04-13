import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trainersData } from '../data/trainers';

const TeamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const trainer = trainersData.find(t => t.id === parseInt(id));

  if (!trainer) return <div style={{color: 'white', textAlign: 'center', paddingTop: '100px'}}>Entrenador no encontrado</div>;

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '150px 20px 50px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={trainer.img} 
            alt={trainer.name} 
            style={{ width: '100%', borderRadius: '20px', border: '4px solid #ffb800', boxShadow: '0 0 30px rgba(255,184,0,0.3)' }} 
          />
        </div>

        <div style={{ flex: '1.5', minWidth: '300px' }}>
          <button 
            onClick={() => navigate('/team')}
            style={{ background: 'none', border: '1px solid #ffb800', color: '#ffb800', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}
          >
            ← Volver
          </button>
          
          <h1 style={{ fontSize: '3.5rem', color: '#ffb800', margin: '0' }}>{trainer.name}</h1>
          <h3 style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '20px' }}>{trainer.role} | {trainer.age}</h3>
          
          <div style={{ background: '#111', padding: '30px', borderRadius: '15px', borderLeft: '5px solid #ffb800' }}>
            <h4 style={{ color: '#ffb800', marginTop: '0' }}>Biografía</h4>
            <p style={{ lineHeight: '1.8', color: '#ddd' }}>{trainer.bio}</p>
            
            <h4 style={{ color: '#ffb800', marginTop: '20px' }}>Trayectoria</h4>
            <p style={{ lineHeight: '1.8', color: '#ddd' }}>{trainer.career}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;