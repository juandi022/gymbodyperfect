import React from 'react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600"
  ];

  return (
    <div className="gallery-page" style={{ padding: '120px 5%', backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#ffb800', fontSize: '3.5rem', marginBottom: '50px' }}>INSTALACIONES BODY PERFECT</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {images.map((url, i) => (
          <div key={i} className="gallery-item" style={{ borderRadius: '15px', overflow: 'hidden', height: '400px', border: '2px solid #222' }}>
            <img src={url} alt="Gym" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;