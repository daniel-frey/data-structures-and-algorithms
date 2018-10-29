'use strict';

const listReversal = module.exports = {};

listReversal.listReverseArray = (list) => {
  const storageArray = [];
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('Empty list');
  }

  while (currentNode.next) {
    storageArray.push(currentNode);
    currentNode = currentNode.next;
  }

  list.insertAtHead(storageArray[storageArray.length - 1]);
  currentNode = list.head;

  for (let i = storageArray.length - 2; i > 0; i--) {
    currentNode.next = storageArray[i];
    currentNode = currentNode.next;
  }

  return list;
};

listReversal.listReverseRecursion = (list) => {
  const arrayStorage = [];
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('Empty List');
  }

  (function fillArray(node) {
    let listNode = node;
    arrayStorage.push(node);
    if (listNode.next) {
      listNode = listNode.next;
      fillArray(listNode);
    }
  }(currentNode));

  const arrayIndex = arrayStorage.length - 2;
  list.insertAtHead(arrayStorage[arrayIndex]);
  currentNode = list.head;

  (function rePopulateList(node, startIndex) {
    let index = startIndex;
    index -= 1;
    let listNode = node;
    if (listNode.next) {
      listNode.next = arrayStorage[index];
      listNode = listNode.next;
    }
  }(currentNode, arrayIndex));

  return list;
};

listReversal.listReverseString = (list) => {
  let string = '';
  let currentNode = list.head;

  if (!list.head) {
    throw new Error('Empty List');
  }

  while (currentNode.next) {
    string += currentNode.value;
    currentNode = currentNode.next;
  }
  list.insertAtHead(string[string.length - 1]);
  currentNode = list.head;

  for (let i = string.length - 2; i >= 0; i--) {
    currentNode.next.value = string[i];
    currentNode = currentNode.next;
  }

  return list;
};
