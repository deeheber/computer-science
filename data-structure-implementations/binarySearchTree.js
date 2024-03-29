/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects
 
Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/

class Tree {
  constructor() {
    this.root = null
  }

  toObject() {
    return this.root
  }

  add(value) {
    const node = new Node(value)

    if (this.root === null) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (value >= current.value) {
        if (current.right === null) {
          current.right = node
          break
        } else {
          current = current.right
        }
      } else {
        if (current.left === null) {
          current.left = node
          break
        } else {
          current = current.left
        }
      }
    }
    return this.toObject()
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// unit tests
// describe('Binary Search Tree', function() {
//   it('creates a correct tree', () => {
//     // const nums = [3,7,4,6,5,1,10,2,9,8];
//     const nums = [3, 7];
//     const tree = new Tree();
//     nums.map( num => tree.add(num));
//     const objs = tree.toObject();
//     render(objs, nums);

//     expect(objs.value).toEqual(3);

//     expect(objs.left.value).toEqual(1);
//     expect(objs.left.left).toBeNull();

//     expect(objs.left.right.value).toEqual(2);
//     expect(objs.left.right.left).toBeNull();
//     expect(objs.left.right.right).toBeNull();

//     expect(objs.right.value).toEqual(7);

//     expect(objs.right.left.value).toEqual(4);
//     expect(objs.right.left.left).toBeNull();

//     expect(objs.right.left.right.value).toEqual(6);
//     expect(objs.right.left.right.left.value).toEqual(5);
//     expect(objs.right.left.right.left.right).toBeNull();
//     expect(objs.right.left.right.left.left).toBeNull();

//     expect(objs.right.right.value).toEqual(10);
//     expect(objs.right.right.right).toBeNull();

//     expect(objs.right.right.left.value).toEqual(9);
//     expect(objs.right.right.left.right).toBeNull();

//     expect(objs.right.right.left.left.value).toEqual(8);
//     expect(objs.right.right.left.left.right).toBeNull();
//     expect(objs.right.right.left.left.left).toBeNull();
//   });
// });
