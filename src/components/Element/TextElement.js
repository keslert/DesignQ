import React from 'react';
import { getColorStyle, getUnitStyle } from '../../core/utils/render-utils';
import { getTextOffset } from '../../core/utils/text-utils';


function TextElement({element}) {
  const c = element._computed;
  const style = {
    fontSize: c.fontSize,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    lineHeight: 1,
    width: getUnitStyle(element.width),
    background: getColorStyle(element.background),
    color: getColorStyle(element.color),
    margin: `${c.mt || 0}px ${c.mx}px ${c.mb}px`,
    padding: `${c.py || 0}px ${c.px || 0}px`,
    letterSpacing: `${element.font.letterSpacing || 0}em`,
    // padding: 0,
    // background: 'red',
  }
  if(element.overlap) {
    style.marginTop = `-${c.h * element.overlap}px`;
  }
  if(element.bleed === 'left' || element.bleed === 'full') {
    style.marginLeft = 0;
    style.paddingLeft = `${c.mx}px`;
  }
  if(element.bleed === 'right' || element.bleed === 'full') {
    style.marginRight = 0;
    style.paddingRight = `${c.mx}px`;
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