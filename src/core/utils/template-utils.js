import _ from 'lodash';
import { withGroups, produceFlyer } from '../producer';

export function safeIncrement(obj, key, amount=1) {
  obj[key] = (obj[key] || 0) + amount;
}

export function safePush(obj, key, value) {
  if(obj[key]) {
    obj[key].push(value);
  } else {
    obj[key] = [value];
  }
}

export function mode(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i += 1) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }
  const max = _.max(Object.values(counts));
  return _.filter(Object.keys(counts), key => counts[key] === max);
}

export function linkTemplate(template) {
  console.log('Linking ' + template.title);
  template.kind = 'template';
  template._root = template;
  template._key = 'template';
  linkSurfaceProperties(template);
  
  template.content.kind = 'content';
  template.content._parent = template;
  template.content._root = template;
  template.content._key = 'content';

  linkSurfaceProperties(template.content);

  template._groups = withGroups(template, (group, groupType) => {
    group.type = groupType;
    group.kind = 'group';
    group._parent = template.content;
    group._root = template;
    group._key = groupType;
    linkSurfaceProperties(group);
    return group;
  });

  template._elements = _.flatMap(template._groups, g => g.elements.map((el, i) => {
    el.kind = 'element';
    el._parent = g;
    el._root = template;
    el._key = 'elements.' + i;
    linkSurfaceProperties(el);
    return el;
  }))
  template._textElements = _.filter(template._elements, el => el.lines);
  template._dominant = _.find(template._textElements, el => el.type === 'dominant');

  // Note: This ordering is important
  template._containers = [
    template,
    template.content,
    ...template._groups,
  ]

  template._decors = _.filter(_.map(template._containers, 'decor'))

  template._all = [
    ...template._containers,
    ...template._elements,
    ...template._decors,
  ]
}

function linkSurfaceProperties(item) {
  item._self = item;
  if(item.decor) {
    item.decor._kind = 'decor';
    item.decor._root = item._root;
    item.decor._parent = item;
    item.decor._key = 'decor';
  }
  item.border && (item.border._parent = item)
}

export function getTemplateTextTypes(template, force) {
  if(!template._textTypes || force) {
    produceFlyer(template);
    const types = _.flatMap(template._elements, el => {

      // flatten lists
      const lines = _.flatMap(el.lines, (line, lineIndex) => (
        _.isArray(line)
          ? line.map((listItem, listIndex) => ({
              ...listItem, 
              lineIndex, 
              listIndex, 
              listId: `${el._parent.type}_${lineIndex}`
            }))
          : {...line, lineIndex}
      ))

      // build types
      const types = _.reduce(lines, (ret, line) => {
        const prev = _.last(ret) || {};
        if(prev.type === line.type) {
          prev.text += ' ' + line.text;
          prev.lines.push(line);
        } else {
          ret.push({
            type: line.type,
            elementId: el.id,
            elementType: el.type,
            groupType: el._parent.type,
            element: el, // TODO: Delete...
            elementIndex: el._computed.index,
            text: line.text,
            listId: line.listId,
            lines: [line],
            lineIndex: line.lineIndex,
            listIndex: line.listIndex,
          });
        }
        return ret;
      }, [])

      return types;
    })

    types.forEach(t => t.element._text = {text: t.text, type: t.type});
    template._textTypes = types;
  }

  return template._textTypes;
}

export function copyTemplate(flyer, noLink) {
  const clone = _.cloneDeepWith(flyer, customizer);
  if(!noLink) {
    linkTemplate(clone);
  }
  return clone;
}

// If customizer returns undefined, cloning is handled by the method instead
function customizer(value, key) {
  return _.isString(key) && key.startsWith('_') ? null : undefined;
}

function getPath(item) {
  let iter = item;
  const path = [];
  do {
    path.push(iter._key);
  } while(iter = iter._parent)
  
  return path;
}

export function getItemFromFlyer(item, flyer) {
  if(item.kind === 'template') return flyer;
  
  const path = getPath(item).reverse().slice(1).join('.');
  return _.get(flyer, path);
}

export function getDescendants(item) {
  switch(item.kind) {
    case 'template': return [item.content, ...item._groups, ...item._elements];
    case 'content': return [...item._root._groups, ...item._root._elements];
    case 'group': return [...item.elements];
    default: return [];
  }
}

export function canControlHeight(surface) {
  return surface.kind === 'content'
    || (surface.type === 'body' && surface._parent._h === 'fill')
}

export function canControlWidth(surface) {
  return surface.kind === 'content'
    || (surface.kind === 'group' && surface._parent._w === 'fill')
    || (surface.kind === 'element' && surface._parent._w === 'fill')
}

export const TextToWidth = { max: 'fill', min: 'auto'}
export const WidthToText = { fill: 'max', auto: 'min'}
