import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleViewPdf = () => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const viewerUrl = `/pdf-viewer.html?file=${encodeURIComponent(fileURL)}`;
      window.open(viewerUrl, '_blank');
    }
  };

  return (
    <div className="App">
      <h1 className="title">PDF Loader</h1>
      
      {/* PDF Viewer Description */}
      <div className="description">
        <p>Welcome to the PDF Loader! This tool allows you to easily view PDF documents directly in your browser. Here are some features:</p>
        <ul>
          <li><strong>Easy Upload:</strong> Simply click the button below to upload a PDF file from your device.</li>
          <li><strong>Multi-Page Support:</strong> Navigate through all pages of your PDF document seamlessly.</li>
          <li><strong>Zoom and Pan:</strong> Zoom in and out of pages and pan to see details clearly (coming soon).</li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        <div className="gallery-item">
          <img src="/images/image1.jpg" alt="Sunset over the mountains" />
          <p>This is an image of a beautiful sunset over the mountains.</p>
        </div>
        <div className="gallery-item">
          <img src="/images/image2.jpg" alt="Dense forest with tall trees" />
          <p>This is a photo of a dense forest with tall trees and lush greenery.</p>
        </div>
        <div className="gallery-item">
          <img src="/images/image3.jpg" alt="Serene beach with clear water" />
          <p>This picture showcases a serene beach with crystal clear water and white sand.</p>
        </div>
      </div>

      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleViewPdf} disabled={!file}>View PDF</button>
    </div>
  );
};

export default App;
