import React from 'react';
import ReactDOM from 'react-dom'
import Flyer from '../../components/Flyer';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export function exportFlyer(flyer) {

  const element = (
    <div id={"export-" + flyer.id} style={{
      position: 'fixed', 
      width: flyer._computed.bb.w, 
      height: flyer._computed.bb.h,
      top: 0,
      left: '-1000px',
    }}>
      <Flyer
        flyer={flyer}
        selectable={false}
      />
    </div>
  )

  ReactDOM.render(element, document.getElementById('export'), () => {
    const el = document.getElementById('export-' + flyer.id);
    html2canvas(el, {useCORS: true}).then(function(canvas) {
      canvas.toBlob(function(blob) {
        saveAs(blob, flyer._dominant._text.replace(/\W+/g, '-').toLowerCase() + ".png");
      });
    });
  });
}