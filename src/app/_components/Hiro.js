import React from 'react';

function Hiro({ title, backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className='aboutHiro' style={sectionStyle}>
      <h1>{title}</h1>
    </div>
  );
}

export default Hiro;
