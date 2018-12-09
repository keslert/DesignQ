import React from 'react';
import { getColorStyle, getTextOffset } from '../../core/utils';


function TextElement({element}) {
  const style = {
    fontSize: element._computed.fontSize,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    textTransform: element.font.transform,
    lineHeight: 1,
    background: getColorStyle(element.background),
    color: getColorStyle(element.color),
    margin: `0 ${element._computed.px}px ${element._computed.marginBottom}px`,
  }
  if(element.overlap) {
    style.marginTop = `-${element._computed.fontSize * element.overlap}px`;
  }
  if(element.background) {
    style.padding = `${element._computed.px}px`;
  }


  const spacerStyle = { 
    // background: 'red',
    height: `${(element.font.lineHeight - 1) * element._computed.fontSize}px`,
  }
  const lastIndex = element.lines.length - 1;

  return (
    <div style={style}>
      {element.lines.map((line, i) =>
        <React.Fragment key={i}>
          <Line 
            element={element}
            line={line}
          />
          {i !== lastIndex && <div style={spacerStyle} />}
        </React.Fragment>
      )}
    </div>
  )
}

function Line({element, line}) {
  // TODO: if line is an array Array.isArray(line)
  const offset = getTextOffset(line, element.font.family, element.font.transform);
  const style = {
    marginTop: `${element._computed.fontSize * offset.top}px`,
    marginBottom: `${element._computed.fontSize * offset.bottom}px`
  }

  return(
    <div style={style}>
      {line}
    </div>
  )
}

export default TextElement;