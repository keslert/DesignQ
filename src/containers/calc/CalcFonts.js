import React from 'react';
import { templates } from '../../core/templates';
import { computeFlyer, withGroups } from '../../core/producer';
import canvaFlyers from '../../core/data/canva/event-flyers';
import _ from 'lodash';


function CalcFonts() {
  const types = ['dominant', 'small', 'bridge', 'heading', 'paragraph'];
  console.log('canvaFlyers: ', canvaFlyers.length)
  const res = _.map(templates, t => {
    const elements = _.flatten(withGroups(t, g => g.elements))
    elements.forEach(el => el.font && (el.font.size = 1))

    computeFlyer(t);

    const canvaFlyer = _.find(canvaFlyers, f => f.id === t.id);

    const firstOfTypes = _.filter(types.map(t => _.find(elements, el => el.type === t)));
    const dominant = _.find(firstOfTypes, t => t.type === 'dominant');
    const dominantWidth = dominant._computed.w * (canvaFlyer['dominant-size'] / dominant._computed.fontSize)
    const dominantSize = canvaFlyer['dominant-size'];

    return firstOfTypes.map(el => {
      const canvaSize = canvaFlyer[`${el.type}-size`];
      const scale = canvaSize / el._computed.fontSize;
      const canvaWidth = el._computed.w * scale;
      const maxCharacters = _.max(
        el._computed.lines.map(line => 
          (_.isArray(line.text) ? line.text : [line.text])
          .join(' | ').length
        )
      )
      console.log(maxCharacters, el.lines[0])

      
      return {
        templateId: t.id,
        elementType: el.type,
        canvaSize,
        canvaWidth,
        maxCharacters,
        family: el.font.family,
        sameFamilyAsDominant: el.font.family === dominant.font.family,
        groupType: el._computed.group.type,
        inGroupWithDominant: el._computed.group.type === dominant._computed.group.type,
        letterCase: el.font.transform,
        textAlign: el._computed.group.textAlign,
        align: el._computed.group.itemsAlignX,
        ratioToDominantSize: canvaSize / canvaFlyer['dominant-size'],
        ratioToDominantWidth: canvaWidth / dominantWidth,
        dominantSize,
        dominantWidth,
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