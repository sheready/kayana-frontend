import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import {React,useEffect} from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { PageLayout,ViewMode,Viewer, RenderPage } from '@react-pdf-viewer/core';
import w2w from '../media/publications/Kayana-News-Special-Issue-W2W-2023-final-1.pdf'
import '../style/toolbar.css'

const Publications = () => {

  return (
    <div >
      <div > 
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

          <Viewer fileUrl={w2w} viewMode={ViewMode.DualPage} />
        </Worker>
      </div>
    </div>
  )
}

export default Publications