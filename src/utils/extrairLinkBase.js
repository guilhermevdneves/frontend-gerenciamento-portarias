export function extrairLinkBase(url) {
  var padrao = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)/;

  var correspondencia = url.match(padrao);
  
  if (correspondencia) {
      var linkBase = correspondencia[0];
      return linkBase;
  }

  return url;
}
