var BinarySearchTree = function(v) {
  return{
    value : v,
    right : null,
    left : null,
    insert : function(val){
      var x = BinarySearchTree(val);
      if(val > this.value){
        if(this.right === null){
          this.right = x;
        } else{
          this.right.insert(val);
        }
      }else{
        if(this.left === null){
          this.left = x;
        } else{
          this.left.insert(val);
        }
      }
    },
    contains : function(val){
      if(val === this.value){
        return true;
      } else if(val > this.value){
        if(this.right === null){
          return false;
        } else{
          return this.right.contains(val);
        }
      }else{
        if(this.left === null){
          return false;
        } else{
          return this.left.contains(val);
        }
      }
    },
    depthFirstLog : function(){

    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
