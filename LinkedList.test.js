import Node from "./Node";
import LinkedList from "./LinkedList";

const newNode = Node('start');
const newList = LinkedList(newNode);

describe('functions of Linked List',() => {
  test('new linked list with starting node was created', () => {
    expect(newList.head()).toBe('start')
  })

  test('appends node to the end of the node list', () => {
    newList.append('it worked END')
    expect(newList.tail()).toBe('it worked END');
  });

  test('prepends node to the beginning of the node list', () => {
    newList.prepend('it worked START')
    expect(newList.head()).toBe('it worked START');
  });

  test('linked list size', () => {
    expect(newList.size()).toBe(3);
  });

  test('values at index of nodes', () => {
    expect(newList.at(0)).toBe('it worked START');
    expect(newList.at(1)).toBe('start');
    expect(newList.at(2)).toBe('it worked END');
  });

  test('pop will remove the last linked item', () => {
    newList.pop()
    expect(newList.tail()).toBe('start');
  });

  test('seeing if value is within list', () => {
    expect(newList.contains('start')).toBe(true);
    expect(newList.contains('it worked END')).toBe(false);
  });

  test('return index of node from value', () => {
    expect(newList.find('start')).toBe(1);
    expect(newList.find('it worked END')).toBe(null);
  });

  test('return concat string of values', () => {
    expect(newList.toString()).toBe('( it worked START ) ->( start ) ->null')
  })

  test('insert node in the middle of linked list', () => {
    newList.insertAt('middle', 1)
    expect(newList.toString()).toBe('( it worked START ) ->( middle ) ->( start ) ->null')
  });

  test('remove node at index', () => {
    newList.removeAt(1)
    expect(newList.toString()).toBe('( it worked START ) ->( start ) ->null')
  });
})