import React, { useState } from 'react';

const RandomCodeGenerator = () => {
  const [code, setCode] = useState('');

  // Function to generate random 4 digit code
  const generateCode = () => {
    const min = 1000;
    const max = 9999;
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
    setCode(randomCode.toString());
  };

  return (
    <div>
      <button onClick={generateCode}>GENERATE</button>
      <button onClick={() => setCode('')}>EXIT</button>
      {code && <p>Generated Code: {code}</p>}
    </div>
  );
};

export default RandomCodeGenerator;