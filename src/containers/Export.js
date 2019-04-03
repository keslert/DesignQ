import React, { useCallback } from 'react';
import Flyer from '../components/Flyer';
import { Box, Flex } from 'rebass';
import Button from '../components/Button';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Frame from '../components/Frame';

function Export({primary}) {

  const handleDownload = useCallback(e => {
    const flyerEl = document.getElementById('export');
    html2canvas(flyerEl, {useCORS: true}).then(function(canvas) {
      canvas.toBlob(function(blob) {
        saveAs(blob, primary._dominant._text.replace(/\W+/g, '-').toLowerCase() + ".png");
      });
    });
  }, [primary]);

  const scale = 0.8;

  return (
    <Flex justifyContent="center" alignItems="center" style={{height: '100%'}}>
      <Box p={1}>
        <div id="export" style={{
          position: 'fixed', 
          width: primary._computed.bb.w, 
          height: primary._computed.bb.h,
          top: 0,
          left: '-1000px',
        }}>
          <Flyer
            flyer={primary}
            selectable={false}
          />
        </div>
        <Frame
          scale={scale}
          flyer={primary}
          selectable={false}
        />
      </Box>

      <Button
        ml={3}
        onClick={handleDownload}
        children="Download as PNG"
      />

    </Flex>
  )
}

export default Export;