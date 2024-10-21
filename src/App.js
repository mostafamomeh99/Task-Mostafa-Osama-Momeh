import React from "react";
import ImageGallery from "./Components/ImageGallery"
import './index.css';

function App() {
  return (
    <div className="App pb-2" id="App">
      <h1 className="text-center font-bold font-white p-3" id="titleApp">Image Gallery</h1>
      <ImageGallery />
    </div>
  );
}

export default App;