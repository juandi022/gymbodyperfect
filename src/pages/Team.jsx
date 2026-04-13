import React from 'react';
import { useNavigate } from 'react-router-dom';
import { trainersData } from '../data/trainers';
import './Team.css';

const Team = () => {
  const navigate = useNavigate();
  
  return (
    <div className="team-container" style={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '120px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ffb800', margin: '0' }}>NUESTROS COACHES</h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Haz click en un entrenador para ver su perfil detallado.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {trainersData.map(t => (
            <div
              key={t.id}
              className="trainer-card-pro"
              onClick={() => navigate(`/team/${t.id}`)}
              style={{ background: '#111', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222', cursor: 'pointer' }}
            >
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ color: '#ffb800', marginBottom: '8px', fontSize: '1.25rem', fontWeight: 'bold' }}>{t.name}</h3>
                <span style={{ color: '#d1d1d1', fontSize: '0.95rem' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;