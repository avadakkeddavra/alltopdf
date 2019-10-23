

export const stringify = (item, replacer) => {
  if(typeof item === 'string') return item;
  const basisLength = 4 - item.toString().length;
  let basis = '';
  for(let i = 0; i < basisLength; i++) {
    basis += '0';
  }
  return `${replacer}${basis}${item}`
}

export const parse = (item, replacer) => {
  return Number(item.replace(replacer, ''))
}
