var reverseList = function (head) {
  let currentNode = head
  let prevNode = null

  while (currentNode !== null) {
    let next = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = next
  }

  return prevNode;
};