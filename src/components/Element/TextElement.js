import React from 'react';
import { getColorStyle, getUnitStyle } from '../../core/utils/render-utils';
import ListDivider from '../ListDivider';

function TextElement({element}) {
  const c = element._computed;
  const style = {
    position: 'relative',
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
      {false && 
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,255,0,.3)',
          }}
        />
      }
      {true && 
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${element._computed.w}px`,
            height: `${element._computed.h}px`,
            background: 'rgba(255,0,0,.3)',
          }}
        />
      }
      {element._computed.lines.map((line, i) =>
        <React.Fragment key={i}>
          <Line 
            element={element}
            line={line}
            index={i}
          />
          {i !== lastIndex && <div style={spacerStyle} />}
        </React.Fragment>
      )}
    </div>
  )
}

function Line({element, line, index}) {

  const offset = element._computed.offsets[index];
  const style = {
    marginTop: `${element._computed.fontSize * offset.top}px`,
    marginBottom: `${element._computed.fontSize * offset.bottom}px`,
    marginRight: `${element._computed.fontSize * -(element.font.letterSpacing || 0)}px`,
    position: 'relative',
  }

  return(
    <div style={style}>
      {Array.isArray(line)
        ? 
          <div style={{display: 'flex'}}>
            {line.map((str, i) => 
              <React.Fragment key={i}>
                {i ? <ListDivider divider={element.divider} size={element._computed.fontSize} /> : null}
                {str}
              </React.Fragment>
            )}
          </div>
        : line
      }
    </div>
  )
}

export default TextElement;