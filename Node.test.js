import Node from "./Node";

const createdNode = Node();

describe('functions of Node',() => {
  test('node created', () => {
    expect(Node);
  });
  test('Node properties are null', () => {
    expect(createdNode.value).toBe(null);
    expect(createdNode.nextNode).toBe(null);
  });
  test('Node changeValue will update value of node', () => {
    createdNode.changeValue('updated value');
    expect(createdNode.value).toBe('updated value');
  });
})