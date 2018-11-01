'use strict';

const bfs = require('../lib/bfs-traversal');
const Vertex = require('../lib/vertex');
const Graph = require('../lib/graph');

describe('this test suite will run the bfs-traversal function', () => {
  test('this test will return a valid path', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);
    const six = new Vertex(6);

    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);

    graph.addDirectedEdge(one, two);
    graph.addDirectedEdge(one, five);
    graph.addDirectedEdge(one, four);
    graph.addDirectedEdge(two, three);
    graph.addDirectedEdge(three, six);
    graph.addDirectedEdge(five, six);

    bfs(graph, one, six);

    expect(bfs(graph, one, six))
      .toEqual(true);
  });
  test('this test is searching for a path that does not exist', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);
    const six = new Vertex(6);

    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);

    graph.addDirectedEdge(one, two);
    graph.addDirectedEdge(one, five);
    graph.addDirectedEdge(one, four);
    graph.addDirectedEdge(two, three);

    bfs(graph, one, six);

    expect(bfs(graph, one, six))
      .toEqual(false);
  });
});
