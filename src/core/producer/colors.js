import { resolveColor } from "../utils/render-utils";

export function computeColors(template) {
  template._all.forEach(item => {
    if(item.color) {
      item.color._str = resolveColor(item.color, template.palette)
    }
    if(item.background && item.background.color) {
      item.background.color._str = resolveColor(item.background.color, template.palette);
    }
  })
}