import { computeColor } from "../utils/render-utils";

export function computeColors(template) {
  template._all.forEach(item => {
    if(item.color) {
      computeColor(item.color, template.palette)
    }
    if(item.background && item.background.color) {
      computeColor(item.background.color, template.palette);
    }
  })
}