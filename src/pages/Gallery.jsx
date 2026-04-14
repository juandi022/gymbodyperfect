import React from 'react';

const Gallery = () => {
  const images = [
    "/img/imagenvision.jpg",
  
    "/img/foto1.jpeg",
    "/img/foto2.jpeg",
    "/img/foto3.jpeg",
    "/img/foto4.jpeg",
    "/img/foto5.jpeg",
    "/img/foto6.jpeg",
    "/img/foto7.jpeg"
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