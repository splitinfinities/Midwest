export const relPathAsAbs = function (sRelPath) {
  var nUpLn, sDir = "", sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
  for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
    nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
    sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((nUpLn - 1) / 3) + "}$"), "/");
  }
  return sDir + sPath.substr(nStart);
}
