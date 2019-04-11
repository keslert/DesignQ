import { computeBorder } from './borders';

export function computeDecor(template) {
  const size = template._computed.size;
  template._decors.forEach(d => computeBorder(d, size));
}