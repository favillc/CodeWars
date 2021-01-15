function encode(string) {
  const num = {'a':'1','e':'2','i':'3','o':'4','u':'5'};
  string = string.replace(/[aeiou]/g, m => num[m]);
  return string;
}

function decode(string) {
  const letra = {'1':'a','2':'e','3':'i','4':'o','5':'u'};
  string = string.replace(/[12345]/g, m => letra[m]);
  return string;
}
