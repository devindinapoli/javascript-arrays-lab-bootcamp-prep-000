var kittens = ["milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
return kittens.push(name)
  
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.splice(1)
  
}

function removeFirstKitten(name) {
  return kittens.splice(0, kittens.length - 1)
}
