import _ from 'lodash';
import { withGroups, computeFlyer } from '../producer';



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
  console.log('Linking template ' + template.title);
  template.kind = 'template';
  
  template.content.kind = 'content';
  template.content._parent = template;
  template.decor && (template.decor._parent = template);

  template._groups = withGroups(template, (group, groupType) => {
    group.type = groupType;
    group.kind = 'group';
    group._parent = template.content;
    return group;
  });

  template._elements = _.flatMap(template._groups, g => g.elements.map(el => {
    el.kind = 'element';
    el._parent = g;
    el._group = g;
    return el;
  }))
  template._textElements = _.filter(template._elements, el => el.lines);
  template._dominant = _.find(template._textElements, el => el.type === 'dominant');

  template._surfaces = [
    template,
    template.content,
    ...template._groups,
  ]
}

export function getTemplateTextTypes(template) {
  if(!template._textTypes) {
    computeFlyer(template);
    const types = _.flatMap(template._elements, el => {

      // flatten lists
      const lines = _.flatMap(el.lines, (line, lineIndex) => (
        _.isArray(line)
          ? line.map((listItem, listIndex) => ({
              ...listItem, 
              lineIndex, 
              listIndex, 
              listId: `${el._group.type}_${lineIndex}`
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
            groupType: el._group.type,
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

export function copyTemplate(flyer) {
  const clone = _.cloneDeepWith(flyer, customizer);
  linkTemplate(clone);
  // computeFlyer(clone);
  return clone;
}

// If customizer returns undefined, cloning is handled by the method instead
function customizer(value, key) {
  return _.isString(key) && key.startsWith('_') ? null : undefined;
}