import React from 'react';
import { templates } from '../../core/templates';
import { computeFlyer, withGroups } from '../../core/producer';
import canvaFlyers from '../../core/data/canva/event-flyers';
import _ from 'lodash';


function CalcFonts() {
  const types = ['dominant', 'small', 'bridge', 'heading', 'paragraph'];
  console.log('canvaFlyers: ', canvaFlyers.length)
  const res = _.map(templates, t => {
    computeFlyer(t);

    const canvaFlyer = _.find(canvaFlyers, f => f.id === t.id);

    const elements = _.flatten(withGroups(t, g => g.elements))
    const firstOfTypes = _.filter(types.map(t => _.find(elements, el => el.type === t)));

    // calculate canvaWidth
    // return firstOfTypes.map(el => {
    //   const canvaSize = canvaFlyer[`${el.type}-size`];
    //   const scale = canvaSize / el._computed.fontSize;
    //   const canvaWidth = el._computed.w * scale;
    //   return {
    //     templateId: t.id,
    //     elementType: el.type,
    //     width: canvaWidth,
    //   }
    // })

    return firstOfTypes.map(el => {
      const canvaSize = canvaFlyer[`${el.type}-size`];
      const scale = canvaSize / el._computed.fontSize;
      const canvaWidth = el._computed.w * scale;
      return {
        templateId: t.id,
        elementType: el.type,
        width: canvaWidth / el._computed.maxW,
        scale: scale,
      }
    })


  })

  window.res = res;
  console.log(res);


  
  return (
    <div>All Done!</div>
  )
}

export default CalcFonts;