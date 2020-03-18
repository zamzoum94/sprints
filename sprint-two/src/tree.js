var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  // fix me
  extend(treeMethods, newTree);
  return newTree;
};

var treeMethods = {};

function extend(from, to){
  for(var key in from){
    to[key] = from[key];
  }
}

treeMethods.addChild = function(value) {
  var x = Tree(value);
  this.children.push(x);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].value === target){
      return true;
    }
    var bool = this.children[i].contains(target);
    if(bool){
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
