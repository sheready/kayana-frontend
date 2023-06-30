import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { PageLayout,ViewMode,Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import w2w from '../media/publications/Kayana-News-Special-Issue-W2W-2023-final-1.pdf'
import '../style/toolbar.css'

const Publications = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin => {
    <div >
      {defaultLayoutPlugin()}
    </div>
  };

  const renderToolbar = toolbarSlot => {
    return (
      <div className="pdf-viewer-toolbar">
        {/* Custom toolbar content */}
        {toolbarSlot()}
      </div>
    );
  };
   
  return (
    <div >
      <div> 
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={w2w} plugins={[defaultLayoutPluginInstance]} toolbarSlot={renderToolbar}  />
        </Worker>
      </div>
      {/* <div style={{ width: '50%' }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={w2w} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div> */}
    </div>
  )
}

export default Publications