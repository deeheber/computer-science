/**
 * 1. Print (visit) node
 * 2. Enqueue left child and right child
 * 4. Remove original node from the queue
 */

function breadthFirstSearch(rootNode) {
  if (!rootNode) {
    return
  }

  const queue = []
  queue.push(rootNode)

  while (queue.length > 0) {
    const currentNode = queue.shift()
    console.log(`Visiting: ${currentNode}`)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
}
