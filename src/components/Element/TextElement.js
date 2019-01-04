import React from 'react';
import { getColorStyle, getUnitStyle } from '../../core/utils/render-utils';
import ListDivider from '../ListDivider';

const debug = false;
function TextElement({element}) {
  const c = element._computed;

  const style = {
    position: 'relative',
    width: `calc(${getUnitStyle(element.width)} - ${c.mx * 2}px)`,
    // fontSize: c.fontSize,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    lineHeight: 1,
    background: getColorStyle(element.background),
    color: getColorStyle(element.color),
    padding: `${c.py || 0}px ${c.px || 0}px`,
    margin: `${c.mt || 0}px ${c.mx}px ${c.mb}px`,
  }
  if(element.overlap) {
    style.marginTop = `-${c.h * element.overlap}px`;
  }
  if(element.bleed === 'full' || (element.bleed === 'left' && element.bleed === 'right')) {
    style.marginLeft = 0;
    style.marginRight = 0;
    style.width = '100%';
    style.paddingLeft = `${c.mx}px`;
    style.paddingRight = `${c.mx}px`;
  }
  if(element.bleed === 'left') {
    style.marginLeft = 0;
    style.width = `calc(100% - ${c.mx}px)`;
    style.paddingLeft = `${c.mx}px`;
  }
  if(element.bleed === 'right') {
    style.marginRight = 0;
    style.width = `calc(100% - ${c.mx}px)`;
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
      {debug && 
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
          />
          {i !== lastIndex && <div style={spacerStyle} />}
        </React.Fragment>
      )}
    </div>
  )
}

function Line({element, line}) {

  const style = {
    fontSize: line.fontSize,
    letterSpacing: `${element.font.letterSpacing || 0}em`,
    marginTop: `${line.fontSize * line.offset.top}px`,
    marginBottom: `${line.fontSize * line.offset.bottom}px`,
    marginRight: `${line.fontSize * -(element.font.letterSpacing || 0)}px`,
    position: 'relative',
  }

  const debugStyle = {
    position: 'absolute',
    top: `${-line.fontSize * line.offset.top}px`,
    left: 0,
    width: `${line.w}px`,
    height: `${line.h}px`,
    background: 'rgba(0,0,255,.3)',
  }

  return(
    <div style={style}>
      {debug && <div style={debugStyle} />}
      {Array.isArray(line.text)
        ? 
          <div style={{display: 'flex'}}>
            {line.text.map((str, i) => 
              <React.Fragment key={i}>
                {i 
                  ? <ListDivider 
                      divider={element.divider} 
                      fontSize={line.h}
                    /> 
                  : null
                }
                {str}
              </React.Fragment>
            )}
          </div>
        : line.text
      }
    </div>
  )
}

export default TextElement;