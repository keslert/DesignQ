import _ from 'lodash';

export function calculateHeightResize(template) {

  const header = template.content.header;
  const body = template.content.body;
  const footer = template.content.footer;
  let overflow = 0;
  
  // TODO: I'm not so sure about these Math.abs... (but they seem to work. see id: 35)

  // const tops = _.filter([
  //   header && (header._computed.bb.t + header._computed.bb.h + header._computed.mb),

  // ])

  // const ratio = template.size.h / (headerHeight + bodyHeight + footerHeight);
  // return ratio * ratio;

  
  const top = header 
    ? (header._computed.bb.t + header._computed.bb.h + header._computed.mb)
    : _.sumBy(body._computed.edges.t, 'value')

  const bot = footer 
    ? (footer._computed.bb.t - body._computed.mb)
    : template.size.h - _.sumBy(body._computed.edges.b, 'value')

  const bodyBB = body._computed.bb;
  const overflowT = Math.max(0, top - bodyBB.t);
  const overflowB = Math.max(0, (bodyBB.t + bodyBB.h) - bot);

  const ratio =  template.size.h / (template.size.h + overflowT + overflowB);
  return ratio * ratio;





  // const top = header
  //   ? header._computed.bb.t + header._computed.bb.h + header._computed.mb
  //   : _.sumBy(body._computed.edges.t.map(e => Math.abs(e.value)))
  // overflow -= Math.max(0, top - body._computed.bb.t);
  
  // const bodyEndY = body._computed.bb.t + body._computed.bb.h + Math.abs(body._computed.mb);
  // const bottom = footer 
  //   ? footer._computed.bb.t
  //   : template._computed.bb.h - _.sumBy(body._computed.edges.b.map(e => e.value))
  // overflow -= Math.max(0, bodyEndY - bottom);

  // const ratio = 1 + (overflow / template._computed.bb.h);

  // // TODO: Not everything will scale with the ratio...
  // // Should eventually figure out how to calculate what's going to scale.
  // return ratio * ratio; 
}