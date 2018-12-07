import React from 'react';
import { getColorStyle, getTextOffset } from '../../core/utils';


function TextElement({element}) {

  console.log(element.lines[0], element._computed)
  const style = {
    fontSize: element._computed.fontSize,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    textTransform: element.font.transform,
    lineHeight: 1,
    color: getColorStyle(element.color),
    margin: `0 ${element._computed.px}px ${element._computed.marginBottom}px`,
  }

  const spacerStyle = { 
    // background: '#f4f4f4',
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