var BinarySearchTree = function(v) {
  var value = v;
  var right = null;
  var left = null;
  return{
    insert : function(val){
      var x = BinarySearchTree(val);
      if(val > value){
        if(right === null){
          right = x;
        } else{
          right.insert(val);
        }
      }else{
        if(left === null){
          left = x;
        } else{
          left.insert(val);
        }
      }
    },
    contains : function(){

    },
    depthFirstLog : function(){

    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
