// Maybe 25 common layouts?
// Half of those can be removed based on the content provided.
// Favor those designs which include more of the content.
// Content should have an inclusion priority.



// Layout is highly dependent on the # of elements and their types.
// Element type is dependent on content
// Element # is dependent on content
// Text Element line breaks


// When should you put items in lists?
// When should you insert bars?


export function generateLayout(flyer, ) {

}

function generateElements(flyer) {

}

// content
// unused content?


const content = {
  eventType: 'Christmas Party', // Used to suggest content, images, icons, colors, and starting flyers
  eventName: 'Santa Claus is coming to town', // Dominant, or the start or end of this is the dominant.
  descriptiveText: [ // Anything
    'He’s got a list and he’s checking it twice.',
    'Pictures with Santa',
    'Live Music',
  ],
  location: '1 North Pole', // Often last. Often with TIME and DATE. Can list.
  date: 'Dec 23rd', // Often last. Often with TIME and LOCATION. Can list.
  time: '12-4pm', // Often last. Often in a list and with DATE.
  cost: '$15',
  socialMedia: { // Always footer?
    twitter: '@northpole',
  },
  website: 'www.northpole.com', // Always footer?
  email: 'santa@northpole.com', // Always footer?
  logo: { // Used to determine color palette. Header 80% or Footer 20%
    url: '',
    size: { w, h },
    palette: [],
  },
  images: [ // Used to determine color palettes
    {url: '', size: { w, h }, palette: []},
  ],
  // mood: 'bright', // Influences color palette
}