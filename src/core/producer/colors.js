import { computeColor } from "../utils/render-utils";

export function computeColors(template) {
  template._all.forEach(item => {
    computeColor(item.color, template.palette)
    if(item.divider) {
      computeColor(item.divider.color, template.palette)
    }
    if(item.background) {
      computeColor(item.background.color, template.palette);
    }
  })
}