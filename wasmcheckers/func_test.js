fetch('./checkers.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
  console.log("Loaded wasm module");
  let instance = results.instance;
  console.log("instance", instance);

  var white = 2;
  var black = 1;
  var crowned_white = 6;
  var crowned_black = 5;

  console.log("Calling offset");
  var offset = instance.exports.offsetForPosition(3, 4);
  console.log("Offset for 3,4 is ", offset);

  var whiteIsWhite = instance.exports.isWhite(white);
  var blackIsWhite = instance.exports.isWhite(black);
  var uncrownedWhite = instance.exports.isWhite(instance.exports.withoutCrown(crowned_white));
  var uncrownedBlack = instance.exports.isBlack(instance.exports.withoutCrown(crowned_black));
  var crownedA = instance.exports.isCrowned(crowned_black);
  var crownedB = instance.exports.isCrowned(crowned_white);

  console.log("White is white", whiteIsWhite);
  console.log("Black is white", blackIsWhite);
  console.log("Uncrowned white", uncrownedWhite);
  console.log("Uncrowned black", uncrownedBlack);
  console.log("Crowned is crowned black", crownedA);
  console.log("Crowned is crowned white", crownedB);
})