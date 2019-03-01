import _ from 'lodash';
import { withGroups } from '.';

export function calculateHeightResize(template) {
  // Group bounding box overlaps.
  // Content height;


  const bbs = _.filter(withGroups(template, g => g), g => g.type !== 'body').map(g => g._computed.bb);

  const header = template.content.header;
  const body = template.content.body;
  const footer = template.content.footer;
  

  const c = template.content._computed;
  const contentHeight = c.bb.h;
  const contentEdges = _.sumBy([...c.edges.t, ...c.edges.b], e => e.value)
  const totalHeight = contentHeight + contentEdges;


  const minEdges = template._computed.pt + template._computed.pb;
  const finalEdges = _.sumBy([...c.edges.t, ...c.edges.b], e => e.value);

  const overflow = finalEdges - minEdges;
  const ratio = 1 + (overflow / template._computed.bb.h);

  // TODO: Not everything will scale with the ratio...
  // Should eventually figure out how to calculate what's going to scale.
  return ratio * ratio; 
}