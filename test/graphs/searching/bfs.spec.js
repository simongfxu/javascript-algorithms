/* jshint multistr: true */

'use strict';

var graph = [[0, 0, 0, 0, 1],
             [0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0],
             [1, 0, 1, 0, 0],
             [0, 1, 0, 1, 0]];

var bfs = require('../../../src/graphs/searching/bfs').bfs;

describe('BFS', function () {

  it('should work with empty graph', function () {
    expect(bfs([], 0, 0)).toEqual([0]);
  });

  it('should return the correct output when used with\
  source node equals target node', function () {
    expect(bfs(graph, 2, 2)).toEqual([2]);
  });

  it('should return work with cycles', function () {
    expect(bfs(graph, 0, 2)).toEqual([0, 4, 3, 2]);
  });

});