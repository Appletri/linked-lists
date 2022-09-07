import Node from "./Node";

function LinkedList(start) {
  let HEAD = start || null;
  
  return {
    append(value) {
      const newNode = Node(value)
      let temp = HEAD;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = newNode
    },

    prepend(value) {
      const newNode = Node(value);
      newNode.nextNode = HEAD;
      HEAD = newNode;
    },

    size() {
      let count = 0;
      let temp = HEAD;

      while(temp !== null) {
        temp = temp.nextNode;
        count ++
      }

      return count;
    },

    head() {
      return HEAD.value
    },

    tail() {
      let temp = HEAD

      while(temp.nextNode !== null) {
        temp = temp.nextNode;
      }

      return temp.value
    },

    at(index) {
      let temp = HEAD

      for(let i = 0; i < index; i++) {
        temp = temp.nextNode;
      }

      return temp.value
    },

    pop() {
      let index = this.size();

      if (index <= 1) {
        return null;
      }

      let temp = HEAD;
      for(let i = 0; i < index - 2; i++) {
        temp = temp.nextNode;
      }

      temp.nextNode = null;
    },

    contains(value) {
      let temp = HEAD;

      while(temp.nextNode !== null) {
        if (temp.value === value) {
          return true;
        }

        temp = temp.nextNode;  
      }
      //checks tail node
      return temp.value === value ? true : false;
    },

    find(value) {
      let temp = HEAD;
      let size = this.size()

      for(let i = 0; i < size; i++) {
        if (temp.value === value) {
          return i;
        }
        temp = temp.nextNode;  
      }

      return null;
    },

    toString() {
      let temp = HEAD;
      let size = this.size();
      let str = '';

      for(let i = 0; i < size; i++) {
        str += `( ${temp.value} ) ->`

        temp = temp.nextNode;  
      }

      str += 'null';
      return str;
    },

    insertAt(value, index) {
      let temp = HEAD;
      let newNode = Node(value);
      for(let i = 0; i < index - 1; i++) {
        temp = temp.nextNode;
      }
      newNode.nextNode = temp.nextNode;
      temp.nextNode = newNode;
    },

    removeAt(index) {
      let temp = HEAD;
      for(let i = 0; i < index - 1; i++) {
        temp = temp.nextNode;
      }

      let skipNode = temp.nextNode;
      temp.nextNode = skipNode.nextNode;
    }
  }
}

export default LinkedList