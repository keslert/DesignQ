import React from 'react';
import { getColorStyle, getUnitStyle, getBorderStyles } from '../../core/utils/render-utils';
import ListDivider from '../ListDivider';

const debug = false;
function TextElement({element}) {
  const c = element._computed;

  const style = {
    position: 'relative',
    // width: `calc(${getUnitStyle(element.width)} - ${c.mx * 2}px)`,
    padding: `${c.pt}px ${c.pr}px ${c.pb}px ${c.pl}px`,
    margin: `${c.mt}px ${c.mr}px ${c.mb}px ${c.ml}px`,
    fontFamily: element.font.family,
    fontWeight: element.font.weight,
    fontStyle: element.font.style,
    lineHeight: 1,
    background: getColorStyle(element.background),
    borderRadius: getUnitStyle(element.borderRadius),
    color: getColorStyle(element.color),
    ...getBorderStyles(element.border),
  }

  const spacerStyle = {
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
    // marginTop: `${line.fontSize * line.offset.top}px`,
    // marginBottom: `${line.fontSize * line.offset.bottom}px`,
    marginRight: `${line.fontSize * -(element.font.letterSpacing || 0)}px`,
    height: `${line.h}px`,
    position: 'relative',
    top: `${line.fontSize * line.offset.top}px`
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
    <div>
    <div style={style}>
      {debug && <div style={debugStyle} />}
      {Array.isArray(line.text)
        ? 
          <div>
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
    </div>
  )
}

export default TextElement;