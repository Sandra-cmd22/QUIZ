import React from 'react';

const CornerDecorations = () => {
  return (
    <>
      {/* Corner Decorations */}
      <div className="corner-shape top-0 left-0">
        <div className="w-16 h-32 bg-yellow-300"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-orange-400 rounded-br-full"></div>
      </div>
      
      <div className="corner-shape top-0 right-0">
        <div className="w-32 h-16 bg-blue-600"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-pink-300 rounded-bl-full"></div>
      </div>
      
      <div className="corner-shape bottom-0 left-0">
        <div className="w-32 h-16 bg-orange-400"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-tr-full"></div>
      </div>
      
      <div className="corner-shape bottom-0 right-0">
        <div className="w-16 h-32 bg-pink-300"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-tl-full"></div>
      </div>
    </>
  );
};

export default CornerDecorations;
