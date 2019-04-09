import { unitValue } from '.'
import { basicColor, stripedColor, linearColor } from '../utils/color-utils';

export default {
  title: 'Bike Around the City',
  tags: ['event'],
  px: 48,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1514505485426-fff326709c60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: linearColor(135, '#3F5EFB', '#FC466B'),
    backgroundBlendMode: 'soft-light',
    filters: {
      brightness: .6,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignY: 'center',
      alignX: 'center',
      bleed: { all: true },
      elements: [
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Bike'}, 
            {type: 'eventName', text: 'Around'},
            {type: 'eventName', text: 'The City'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Bebas Neue',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .05,
          },
          mb: 2,
        },
        { 
          type: 'small', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'website', text: 'bikeclub.co'},
          ],
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
            letterSpacing: .1,
          },
          px: 2,
          mb: 1,
        },
      ],
    },
  }
}