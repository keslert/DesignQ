import React from 'react';
import { getColorStyle, getUnitStyle } from '../../core/utils/render-utils';
import { getTextOffset } from '../../core/utils/text-utils';


function TextElement({element}) {
  const style = {
    fontSize: element._computed.fontSize,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    lineHeight: 1,
    width: getUnitStyle(element.width),
    background: getColorStyle(element.background),
    color: getColorStyle(element.color),
    margin: `${element._computed.mt || 0}px ${element._computed.mx}px ${element._computed.mb}px`,
    padding: `${element._computed.py || 0}px ${element._computed.px || 0}px`,
  }
  if(element.overlap) {
    style.marginTop = `-${element._computed.h * element.overlap}px`;
  }

  const spacerStyle = { 
    // background: 'red',
    height: `${(element.font.lineHeight - 1) * element._computed.fontSize}px`,
  }
  const lastIndex = element.lines.length - 1;

  return (
    <div style={style}>
      {element._computed.lines.map((line, i) =>
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