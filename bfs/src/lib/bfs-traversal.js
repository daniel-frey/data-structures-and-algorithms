'use strict';

const Queue = require('queue-fifo');

module.exports = (graph, startVertex, endVertex) => {
  const queue = new Queue();
  const visitedVertices = new Set();
  const parentPath = new Map();
  let fullPath = false;

  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);
  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();

    if (currentVertex === endVertex) {
      fullPath = true;
      return fullPath;
    }

    const neighbors = graph.getNeighbors(currentVertex);

    for (let neighbor of neighbors) { // eslint-disable-line
      const neighborVertex = neighbor.vertex;

      if (visitedVertices.has(neighborVertex)) {
        continue; // eslint-disable-line
      } else {
        visitedVertices.add(neighborVertex);
      }
      parentPath.set(neighborVertex, currentVertex);
      queue.enqueue(neighborVertex); // O(1)
    }
  }
  return fullPath;
};
