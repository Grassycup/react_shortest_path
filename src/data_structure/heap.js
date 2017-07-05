class Heap {
  /**
   * Constructor for the heap
   * @param list list used to construct the heap. empty heap is created if the list empty or null
   * @param compareTo comparator function. defaults to min heap using number if not provided
   */
  constructor(list, compareTo) {
    this.list = list;
    if(!this.list) {
      this.list = [];
    }
    if(!compareTo) {
      this.compareTo = function(i, j) {
        return j - i;
      }
    }
    this.heapify();
  }

  /**
   * setup the heap using current list
   */
  heapify() {
    let list = this.list;
    // let end = list.length -1;
    // while(end >= 0) {
    //   this.swap(0, end);
    //   this.siftDown(0);
    //   end--;
    // }
    for(let i = 1; i < list.length; i++) {
      this.siftUp(0, i);
    }
  }

  /**
   * insert a new item
   */
  push(item) {
    let list = this.list;
    list.push(item);
    this.siftUp(0, this.size() - 1);
  }

  /**
   *  remove and return the item removed
   */
  pop() {
    let list = this.list;
    if(this.isEmpty()) {
      throw 'Heap is empty';
    }

    this.swap(0, this.size() -1)
    let val = list.pop();
    this.siftDown(0);
    return val;
  }

  /**
   * replaces root node and maintain heap structure
   */
  replace(item) {
    if(this.isEmpty()) {
      throw 'Heap is empty';
    }
    this.list[0] = item;
    this.siftDown(0);
  }

  /**
   * return the size of the heap
   */
  size() {
    return this.list.length;
  }

  /**
   * returns true if empty, false otherwise
   */
  isEmpty() {
    return this.size() == 0;
  }

  swap(i,j) {
    var list = this.list;
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  siftUp(start, end) {
    let current = end;
    let list = this.list;
    while(current > start) {
      let parent = Math.floor((current-1)/2);
      // perform swap based on results of compareTo
      if(this.compareTo(list[parent], list[current]) < 0) {
        this.swap(parent, current);
        current = parent;
      } else {
        return;
      }
    }
  }

  childSearch(index) {
    let list = this.list;
    let left = index*2+1;
    let right = index*2+2;
    if(left < list.length) {
      if(right < list.length && this.compareTo(list[left], list[right]) < 0) {
        return right;
      }
      return left
    }
    return null;

  }

  siftDown(index) {
    let current = index;
    let list = this.list;
    let target;
    while(target = this.childSearch(current)) {
      // perform swap based on results of compareTo
      if(this.compareTo(list[current], list[target]) < 0) {
        this.swap(current, target);
        current = target;
      } else {
        return;
      }
    }
  }
}

export default Heap;