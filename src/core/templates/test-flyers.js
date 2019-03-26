import { solidColor, unitValue } from '.'

const makeBodyFlyer = (options, i) => ({
  title: 'B' + i,
  px: 1,
  py: 1,
  background: solidColor('#e54049'),
  content: {
    background: solidColor('#5A142A'),
    h: 'fill',
    w: 'fill',
    alignX: 'center',
    alignY: 'center',
    ...options.content,
    body: {
      background: solidColor('#8F1D2C'),
      h: 'fill',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      elementsAlignX: 'center',
      elementsAlignY: 'center',
      ...options.body,
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
})


// RULE, you can't bleed in a direction if w.auto and not aligned in that direction

export const bodyTests = [

  // content=fill group=autoH
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'auto', alignX: 'center', alignY: 'center'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'auto', alignX: 'right', alignY: 'bottom'},
  },

  // content=fill group=autoW
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'auto', h: 'fill', alignX: 'center', alignY: 'center'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
  },

  // content=auto group=fill
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {l: 1, t: 1}},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top', bleed: {r: 1, t: 1}},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'bottom', bleed: {l: 1, b: 1}},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom', bleed: {r: 1, b: 1}},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },


  // x-axis
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'center', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },

  // y-axis
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },

  // corners
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
  },
  

  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {l: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {r: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {l: 1, r: 1}},
  },

  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {t: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {b: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {t: 1, b: 1}},
  },
  
  
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'bottom'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'center'},
  },

  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {l: 1, t: 1}},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
  },
  
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', bleed: {l: 1, t: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'center', bleed: {a: 1}},
  },
].map(makeBodyFlyer);


const makeBodyFooterFlyer = (options, i) => ({
  title: 'BF' + i,
  px: 1,
  py: 1,
  background: solidColor('#e54049'),
  content: {
    background: solidColor('#5A142A'),
    h: 'fill',
    w: 'fill',
    alignX: 'center',
    alignY: 'center',
    ...options.content,
    body: {
      background: solidColor('#8F1D2C'),
      h: 'fill',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.body,
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      background: solidColor('#8F1D2C'),
      h: 'auto',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.footer,
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
})



export const bodyFooterTests = [
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    footer: {w: 'fill', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    footer: {w: 'fill', alignX: 'left', bleed: {a: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    footer: {w: 'fill', alignX: 'left', bleed: {a: 1}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    footer: {w: 'fill', alignX: 'left', bleed: {a: 2}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top', bleed: {a: 1}},
    footer: {w: 'fill', alignX: 'left', bleed: {a: 1}},
  },

  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'center'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'bottom'},
    footer: {w: 'fill', alignX: 'center'},
  },


  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'center'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top'},
    footer: {w: 'auto', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'center'},
    body: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'center', bleed: {a: 1}},
    body: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'center', bleed: {t: 1}},
    body: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center', bleed: {l: 1, r: 1}},
    body: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
    footer: {w: 'auto', alignX: 'left'},
  },

].map(makeBodyFooterFlyer);



const makeBodyHeaderFlyer = (options, i) => ({
  title: 'BH' + i,
  px: 1,
  py: 1,
  background: solidColor('#e54049'),
  content: {
    background: solidColor('#5A142A'),
    h: 'fill',
    w: 'fill',
    alignX: 'center',
    alignY: 'center',
    ...options.content,
    body: {
      background: solidColor('#8F1D2C'),
      h: 'fill',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.body,
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    header: {
      background: solidColor('#8F1D2C'),
      h: 'auto',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.header,
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
})


export const bodyHeaderTests = [
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    header: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    header: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center'},
    header: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {a: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {a: 1}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {a: 2, b: 0}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom', bleed: {a: 1, t: 0}},
    header: {w: 'fill', alignX: 'left', bleed: {a: 1, t: 2}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom', bleed: {b: 2, r: 2}},
    header: {w: 'fill', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'center'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'bottom'},
    header: {w: 'auto', alignX: 'center'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'auto', alignX: 'center', alignY: 'bottom'},
    header: {w: 'auto', alignX: 'left', bleed: {l: 1}},
  },

].map(makeBodyHeaderFlyer);




const makeBodyHeaderFooterFlyer = (options, i) => ({
  title: 'BHF' + i,
  px: 1,
  py: 1,
  background: solidColor('#e54049'),
  content: {
    background: solidColor('#5A142A'),
    h: 'fill',
    w: 'fill',
    alignX: 'center',
    alignY: 'center',
    ...options.content,
    body: {
      background: solidColor('#8F1D2C'),
      h: 'fill',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.body,
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    header: {
      background: solidColor('#8F1D2C'),
      h: 'auto',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.header,
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      background: solidColor('#8F1D2C'),
      h: 'auto',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      ...options.footer,
      textAlign: 'left',
      elements: [
        {
          type: 'bridge',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
})




export const bodyHeaderFooterTests = [
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'center', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'auto', h: 'fill', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'center', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'auto', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },


  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'center'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'auto', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'auto', alignX: 'left'},
    footer: {w: 'auto', alignX: 'right'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {l: 1}},
    footer: {w: 'fill', alignX: 'left', bleed: {r: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {l: 2}},
    footer: {w: 'fill', alignX: 'right', bleed: {r: 2}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom', bleed: {x: 1}},
    header: {w: 'auto', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'center'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom', bleed: {x: 2}},
    header: {w: 'auto', alignX: 'left'},
    footer: {w: 'fill', alignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'bottom'},
    header: {w: 'fill', alignX: 'left', bleed: {t: 1}},
    footer: {w: 'auto', alignX: 'right', bleed: {b: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'right', alignY: 'bottom'},
    body: {w: 'fill', h: 'fill', alignX: 'center', alignY: 'center'},
    header: {w: 'fill', alignX: 'left', bleed: {t: 2}},
    footer: {w: 'auto', alignX: 'right', bleed: {b: 2}},
  },
].map(makeBodyHeaderFooterFlyer);


const makeElementsFlyer = (options, i) => ({
  title: 'B' + i,
  px: 1,
  py: 1,
  background: solidColor('#e54049'),
  content: {
    background: solidColor('#5A142A'),
    h: 'fill',
    w: 'fill',
    alignX: 'center',
    alignY: 'center',
    ...options.content,
    body: {
      background: solidColor('#8F1D2C'),
      h: 'fill',
      w: 'fill',
      alignX: 'center',
      alignY: 'center',
      elementsAlignX: 'center',
      elementsAlignY: 'center',
      textAlign: 'left',
      ...options.body,
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          background: solidColor('#ffffff99'),
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
          w: 'auto',
          ...options.element,
        },
        {
          type: 'small',
          lines: [
            {type: 'eventName', text: 'Body Test'},
          ],
          background: solidColor('#ffffff99'),
          color: solidColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          w: 'auto',
          mb: 1,
          ...options.element,
        },
      ]
    },
  }
})


// RULE, you can't bleed in a direction if w.auto and not aligned in that direction

export const elementTests = [

  // content=fill group=autoH
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'top', itemsAlignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
    element: {w: 'fill'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
    element: {w: 'fill', bleed: {r: 0}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
    element: {w: 'fill', bleed: {r: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
    element: {w: 'fill', bleed: {r: 2}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'right'},
    element: {w: 'fill', bleed: {r: 3}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {l: 0}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {l: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {l: 2}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {l: 3}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {x: 0}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {x: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {x: 2}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top', itemsAlignY: 'bottom', itemsAlignX: 'left'},
    element: {w: 'fill', bleed: {x: 3}},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top', itemsAlignY: 'top', itemsAlignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'center', itemsAlignY: 'center', itemsAlignX: 'center'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'bottom', itemsAlignY: 'center', itemsAlignX: 'right'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'fill', h: 'auto', alignX: 'left', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'right'},
    element: {w: 'fill'},
  },

  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', itemsAlignY: 'top', itemsAlignX: 'left'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'center', itemsAlignY: 'center', itemsAlignX: 'right'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom', itemsAlignY: 'center', itemsAlignX: 'center'},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill'},
  },


  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 0}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 1}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 2}},
  },
  {
    content: {w: 'fill', h: 'fill', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 3}},
  },

  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 0}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top'},
    body: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 1}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'bottom'},
    body: {w: 'auto', h: 'auto', alignX: 'center', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'center'},
    element: {w: 'fill', bleed: {r: 2}},
  },
  {
    content: {w: 'auto', h: 'auto', alignX: 'right', alignY: 'bottom'},
    body: {w: 'auto', h: 'auto', alignX: 'left', alignY: 'top', itemsAlignY: 'center', itemsAlignX: 'right'},
    element: {w: 'auto'},
  },

].map(makeElementsFlyer);