import { computeBorder } from './borders';

export function computeDecor(template) {
  const size = template._computed.size;
  computeBorder(template.decor, size);
}