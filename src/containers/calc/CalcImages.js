import React, { useState, useEffect } from 'react';
import { templates } from '../../core/templates';
import { computeFlyer, withGroups } from '../../core/producer';
import canvaFlyers from '../../core/data/canva/event-flyers';
import _ from 'lodash';


function CalcImages() {

  const [done, setDone] = useState(false);

  useEffect(() => {
    const withBackgrounds = _.filter(templates, t => t.background && t.background.img)
      .map(t => ({template: t, type: 'background', src: t.background.img.src}))
    const withDecorBackgrounds = _.filter(templates, t => t.decor && t.decor.background && t.decor.background.img)
      .map(t => ({template: t, type: 'decor', src: t.decor.background.img.src}))

    const res = {};
    const loading = {decor: {}, background: {}};
    Promise.all(_.map([...withBackgrounds, ...withDecorBackgrounds], ({template: t, type, src}) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          res[t.id] = res[t.id] || {};
          res[t.id][type] = {
            w: this.width,
            h: this.height,
          }
          loading[type][t.id] = true;
          console.log(loading);
          resolve();
        }
        img.src = src;
        loading[type][t.id] = false;
      })
    }))
    .then(() => {
      window.res = res;
      console.log(res);
      setDone(true);
    })
  }, [])
  
  return (
    <div>{done ? "All Done!" : "Still loading"}</div>
  )
}

export default CalcImages;