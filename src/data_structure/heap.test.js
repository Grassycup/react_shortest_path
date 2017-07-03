import Heap from '../data_structure/heap.js'

it('Heap with no parameter created successfully', () => {
  let heap = new Heap();
  expect(heap instanceof Heap).toEqual(true);
});

it('Heap with parameter created successfully', () => {
  let heap = createHeap();
  expect(heap instanceof Heap).toEqual(true);

  let list = [1, 2, 3, 5, 6, 4];

  // test order of list after heap creation
  expect(compareList(heap.list, list)).toEqual(true);
});

it('Heap push value 5', () =>{
  let heap = createHeap();
  heap.push(5);

  let list = [1, 2, 3, 5, 6, 4, 5];
  expect(compareList(heap.list, list)).toEqual(true);
});

it('Heap push value 1', () =>{
  let heap = createHeap();
  heap.push(1);

  let list = [1, 2, 1, 5, 6, 4, 3];
  expect(compareList(heap.list, list)).toEqual(true);
});

it('Heap pop', () =>{
  let heap = createHeap();
  let val = heap.pop();

  expect(val).toEqual(1);

  let list = [ 2, 4, 3, 5, 6 ];
  expect(compareList(heap.list, list)).toEqual(true);
});

it('Heap replace with 5', () =>{
  let heap = createHeap();
  let val = heap.replace(5);

  let list = [ 2, 5, 3, 5, 6, 4 ];
  expect(compareList(heap.list, list)).toEqual(true);
});

function createHeap() {
  let startList = [1, 2, 4, 5, 3, 6];
  return new Heap(startList.slice());
}

function compareList(a, b) {
  if(!a || !b || a.length != b.length) {
    return false;
  }
  return a.reduce(
    (equal, val, index) => equal && val == b[index],
    true
  );
}