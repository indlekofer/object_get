export default (obj, find, def, nullable = true) => {
  if (obj === null || typeof obj != 'object') return def;
  let v = obj;
  for (let i = 0, c = find.length; i < c; i++) {
    if (typeof v[find[i]] == 'undefined') return def;
    else v = v[find[i]];
  }
  if (!nullable && v === null) return def;
  else return v;
};
