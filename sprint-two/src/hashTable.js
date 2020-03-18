

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.table = new Array(8);
  for(var i = 0; i < this.table.length; i++){
    this.table[i] = [];
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0 ; i < this.table[index].length; i++){
    if(this.table[index][i].key === k){
      this.table[index][i].value = v;
    }
  }
  this.table[index].push({key : k, value : v});
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this.table[index].length; i++){
    if(this.table[index][i].key === k){
      return this.table[index][i].value;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this.table[index].length; i++){
    if(this.table[index][i].key === k){
      this.table[index].splice(i, 1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


