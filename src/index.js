export default (obj, find, def) => {
  if (obj === null || typeof obj != 'object') return def;
  var v = obj;
  for (let i = 0, c = find.length; i < c; i++) {
    if (typeof v[find[i]] == "undefined") return def;
    else v = v[find[i]];
  }
  return v;
}
