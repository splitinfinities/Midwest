export function extractHostname(url: string) {
  let hostname;

  if (url.indexOf("//") > -1) {
      hostname = url.split("/")[2];
  } else {
      hostname = url.split("/")[0];
  }

  // find & remove port number
  hostname = hostname.split(":")[0];
  // find & remove "?"
  hostname = hostname.split("?")[0];

  return hostname;
}
