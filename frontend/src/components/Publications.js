import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import w2w from '../media/publications/Kayana-News-Special-Issue-W2W-2023-final-1.pdf'
import { thumbnailPlugin, ThumbnailDirection } from '@react-pdf-viewer/thumbnail';

const Publications = () => {
    const thumbnailPluginInstance = thumbnailPlugin({
        thumbnailWidth: 80,
    });
    const { Thumbnails } = thumbnailPluginInstance;
  return (
    <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px',}}>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Thumbnails />
            <Viewer fileUrl={w2w} plugins={[thumbnailPluginInstance]} />
            
        </Worker>


    </div>
  )
}

export default Publications