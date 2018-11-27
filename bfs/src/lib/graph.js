'use strict';

const Edge = require('../lib/edge');

module.exports = class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }
};
