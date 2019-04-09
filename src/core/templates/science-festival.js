import { basicColor } from '../utils/color-utils';

export default {
  id: 29,
  title: "The Science Festival",
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-blue-and-yellow-space-themed-science-flyer-MAC7mqPbQK8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  decor: {
    t: .3,
    b: .2,
  },
  background: { 
    color: basicColor("#1f2534"),
  },
  content: {
    body: {
      alignX: "center",
      alignY: "center",
      itemsAlignX: 'center',
      itemsAlignY: 'center',
      textAlign: "center",
      elements: [
        {
          type: "small",
          lines: [
            { type: "host", text: "University of El Dorado" }
          ],
          divider: {
            type: "line",
            size: 1.5,
            color: basicColor("#fff"),
          },
          color: basicColor("#fff"),
          font: {
            family: "Aileron",
            weight: 400,
            size: 1,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4,
            letterSpacing: 0.18
          }
        },
        {
          type: "dominant",
          lines: [
            { type: "eventName", text: "The Science" },
            { type: "eventName", text: "Festival 2020" },
          ],
          color: basicColor("#e7d244"),
          mb: 0.75,
          font: {
            family: "Norwester",
            fitToWidth: false,
            weight: 400,
            size: 1,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4,
            letterSpacing: 0.01,
          }
        },
        {
          type: "bridge",
          lines: [
            {
              type: "date",
              text: "Get ready to learn, be amazed, and explore!",
              format: "MMM D, YYYY"
            }
            
          ],
          color: basicColor("#fff"),
          font: {
            family: "Aileron",
            fitToWidth: false,
            weight: 400,
            size: 1,
            style: "italic",
            transform: "normal",
            lineHeight: 1.4,
            letterSpacing: 0.05,
          }
        },
        {
          type: "bar",
          background: {
            color: basicColor("#e7d244"),
          },
          h: 5,
          w: .4,
        },
        {
          type: "heading",
          lines: [
            [
              {
                type: "date",
                text: "September 2-4, 2020",
                format: "MMMM D, YYYY"
              },
              {
                type: "location",
                text: "University of"
              }
            ],
            {
              type: "location",
              text: "El Dorado Main Pavilion"
            }
          ],
          divider: {
            type: "line",
            size: 1.5,
            color: basicColor("#e7d244"),
          },
          color: basicColor("#e7d244"),
          font: {
            family: "Aileron",
            weight: 700,
            size: 1,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4,
            letterSpacing: 0.18
          }
        },
        {
          type: "paragraph",
          lines: [
            {
              type: "descriptive",
              text: "Check out awesome experiments and award-winning projects"
            },
            {
              type: "descriptive",
              text: "from all over the country, plus listen to cool lectures!"
            }
          ],
          color: basicColor("#fff"),
          font: {
            family: "Aileron",
            fitToWidth: false,
            weight: 400,
            size: 1.2,
            style: "normal",
            transform: "normal",
            lineHeight: 1.4,
            letterSpacing: .05,
          }
        }
      ]
    }
  }
}