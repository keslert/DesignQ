// https://www.smashingmagazine.com/2015/02/design-principles-dominance-dominant-points-hierarchy/

const intentionStructure = {
  title: 'Back to School',

  layout: [
    'main',
    'image',
    'footer',
  ],

  main: {
    background: { type: 'solid', value: '#030F5B' },
    position: { left: 0, top: 0, w: '100%' },
    px: 1,
    py: 2,
    content: [
      {
        content: 'Back to School',
        width: { value: 100, unit: '%' },
        fontSize: {
          fitToWidth: true,
        },
        marginBottom: 1,
      },
      {
        content: 'Bake Sale',
        width: { value: 100, unit: '%' },
        fontSize: {
          fitWidth: true,
        },
        marginBottom: 1,
      },
      {
        content: 'Wednesday at 12pm',
        width: { value: 100, units: '%' },
        fontSize: {
          fitWidth: true,
        },
      }
    ]
  },

  image: {
    position: { flex: 1 },
    src: '/example/img.jpg',
    filters: [],
  },

  footer: {
    background: { type: 'solid', value: '#D978C9' },
    position: { x: 0 },
    px: 1,
    py: 1,
    type: 'basic',
    content: 'Proceeds Benefit Spark High School Spirit Squad',
    textTransform: 'uppercase',
    fontSize: {
      fitToWidth: true,
    }
  }
}




export const e1 = {
  title: 'Back to School',
  h: 792,
  w: 612,

  main: {
    background: {
      type: 'solid',
      value: '#030F5B'
    },
    bb: { left: 0, top: 0, w: 612, h: 'auto' },
    px: 18,
    py: 36,
    content: [
      {
        content: 'Back to School',
        width: {
          value: 100,
          units: '%',
        },
        fitWidth: true,
        marginBottom: 9,
      },
      {
        content: 'Bake Sale',
        width: {
          value: 100,
          units: '%',
        },
        fitWidth: true,
        marginBottom: 9,
      },
      {
        content: 'Wednesday at 12pm',
        width: {
          value: 100,
          units: '%',
        },
        fitWidth: true,
      }
    ]
  },

  image: {
    bb: { left: 0, w: 612, h: 'auto', flex: 1 },
    src: '/example/img.jpg',
    filters: [],
  },

  footer: {
    background: {
      type: 'solid',
      value: '#D978C9'
    },
    bb: { x: 0, y: 700, w: 612, h: 'auto' },
    px: 18,
    py: 18,
    type: 'basic',
    content: 'Proceeds Benefit Spark High School Spirit Squad',
    contentStyle: {
      textTransform: 'uppercase',
      fitToWidth: 560,
    }
  }
}



export const e2 = {
  title: 'Barry\'s',
  px: 1,
  py: 1,
  footer: null,
  header: null,
  content: {
    background: {
      type: 'solid',
      value: '#000',
    },
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: true,
        src: '/examples/img.jpg',
        filters: [],
      },
      {
        type: 'dominant',
        value: 'Barry\'s',
        background: {
          type: 'solid',
          value: '#FFD2A7',
        },
        color: {
          type: 'solid',
          value: '#000',
        },
        textTransform: 'uppercase',
        overlap: 50,
        marginBottom: 1,
      },
      {
        type: 'small',
        value: 'stationary for the working professional',
        color: {
          type: 'solid',
          value: '#fff',
        },
        fontSize: {
          value: 16,
          unit: 'px',
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        width: {
          value: 100,
          unit: 'px',
        },
        background: {
          type: 'solid',
          value: '#FFD2A7',
        },
        marginBottom: 1,
      },
      {
        type: 'bridge',
        value: 'Since 1989',
        color: {
          type: 'solid',
          value: '#FFD2A7',
        },
        fontSize: {
          value: 12,
          unit: 'px',
        },
        textTransform: 'uppercase',
        fontWeight: 700,
      },
    ]
  }
}

export const e3 = {
  title: 'Hallow Harvest',
  w: 612,
  h: 798,
  background: {
    type: 'solid',
    value: '#150612',
  },
  border: {
    type: 'all-sides',
    items: [
      { 
        src: 'img.jpg', 
        bb: { x: 30, y: 40, w: 100, h: 50},
        background: {
          type: 'solid',
          value: '#CF6200',
        }
      },
    ]
  },

  main: {
    position: {
      x: 'centered',
      y: 'centered',
    },
    content: [
      {
        type: 'small-a',
        value: 'Charlotte, NC',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontFamily: 'Open Sans',
        color: {
          type: 'solid',
          value: '#AA4524',
        },
        fontSize: {
          unit: 'px',
          value: 18,
        },
        marginBottom: 18,
        // _calculatedStyle: {},
      },
      {
        type: 'dominant',
        style: 'skewed',
        fontSize: {
          value: 48,
          unit: 'px',
        },
        list: [
          'Hallow',
          'Harvest',
        ],
        color: {
          type: 'solid',
          value: '#D06000',
        },
        marginBottom: 18,
      },
      {
        type: 'bridge',
        list: {
          lines: [
            'Join the Annual',
            'Hallow Harvest this',
            'Oct. 31, 2019',
          ],
          oneItemPerRow: true,
          lineItemDecorations: null,
          spaceBetweenRows: 4,
        },
        textTransform: 'uppercase',
        marginBottom: 18,
      },
      {
        type: 'small-a',
        value: 'Barnes Field',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontFamily: 'Open Sans',
        color: {
          type: 'solid',
          value: '#AA4524',
        },
        fontSize: {
          unit: 'px',
          value: 18,
        },
      }
    ]
  },
  header: null,
  footer: null,
}

// https://en.wikipedia.org/wiki/Bar_form: Flyers are like western music
// smalls and bridges should avoid being wider than the big.
// stanzas and aftersongs

// short paragraph tails are bad... 
// a date should not be broken up
// avoid splitting adjective and noun (hallow harvest)




export const e4 = {
  title: 'Art Talk',
  px: 36, // ratios
  py: 36, // ratios
  border: null,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80',
    filters: [],
  },
  content: {
    width: 'auto',
    height: 'auto',
    alignX: 'left',
    alignY: 'center',
    background: solidColor('#fff'), 
    border: {
      type: 'solid',
      color: '#EE445A',
      width: 12,
      edges: { top: true, bottom: true },
    },
    elements: [
      { 
        type: 'small', 
        color: solidColor('#EF4260'),
        lines: ['3rd of', 'September'],
        font: {
          family: 'bebas-neue-by-fontfabric',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        background: solidColor('#FECF82'),
        width: unitValue(80, 'px'),
        height: unitValue(8, 'px'),
        marginBottom: 1,
      },
      { 
        type: 'dominant', 
        lines: ['Art', 'Talk'],
        color: solidColor('#EF4260'),
        font: {
          family: 'bebas-neue-by-fontfabric',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      { 
        type: 'bridge', 
        lines: ['Things you need to know', 'about your art'],
        color: solidColor('#8C8C8C'),
        font: {
          family: 'bebas-neue-by-fontfabric',
          weight: 700,
          size: 0.8, // based on the small size
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        background: solidColor('#FECF82'),
        width: unitValue(80, 'px'),
        height: unitValue(8, 'px'),
        marginBottom: 1,
      },
      { 
        type: 'small', 
        color: solidColor('#EF4260'),
        lines: ['4-7pm', 'Athena Hall'],
        font: {
          family: 'bebas-neue-by-fontfabric',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        }
      },
    ],
  },
  footer: null,
  header: null,
}


function solidColor(color) {
  return { type: 'solid', color }
}

function unitValue(value, unit) {
  return { value, unit }
}