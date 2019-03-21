export function validCache(flyer, cache) {
  return cache.flyers && 
    (flyer.id === cache.genId || flyer.genId === cache.genId)
}

export function getDesiredNumberOfFlyers(flyers, index, multiple) {
  return multiple 
    ? flyers.slice(index, multiple)
    : flyers[index]
}

export function getFromCache(cache, multiple) {
  cache.index++;
  if(cache.index >= cache.flyers.length) {
    cache.index = 0;
  }
  return getDesiredNumberOfFlyers(cache.flyers, cache.index, multiple);
}