import React from 'react';

const Gallery = () => {
  const images = [
    "/gymbodyperfect/img/imagenvision.jpg",
    "/gymbodyperfect/img/foto1.jpeg",
    "/gymbodyperfect/img/foto2.jpeg",
    "/gymbodyperfect/img/foto3.jpeg",
    "/gymbodyperfect/img/foto4.jpeg",
    "/gymbodyperfect/img/foto5.jpeg",
    "/gymbodyperfect/img/foto6.jpeg",
    "/gymbodyperfect/img/foto7.jpeg"
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