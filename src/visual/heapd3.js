import React, { Component } from 'react';
import './heapd3.css';
import Heap from '../data_structure/heap.js';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
dagre(cytoscape);

class Heapd3 extends React.Component {
  componentDidMount() {
    var beforeList = [6, 5, 3, 2, 1, 4,5,5,5,5,5,5,4,6,6,2,3,36,35,2,21,5,8,74,5,4,9,0,8,8,6,7];
    var beforeData = this.listToObj(beforeList, 'a');
    var heap = new Heap(beforeList);
    var afterData = this.listToObj(heap.list, 'b');

    this.drawChart('beforeHeap', beforeData);
    this.drawChart('afterHeap', afterData);
  }

  shouldComponentUpdate() {
    return false;
  }

  createNode(id, value, prefix = '') {
    return {
      data: {
        id: prefix + 'node' + id,
        value: value
      }
    };
  }

  createEdge(source, target, prefix = '') {
    return {
      data: {
        id: prefix + 'edge' + source + target,
        source: prefix + 'node' + source,
        target: prefix + 'node' + target
      }
    }
  }

  listToObj(list, prefix) {
    let result = [];
    if(!list){
      return result;
    }
    let current = null;
    for(let i = 0; i < list.length; i++) {
      let node = this.createNode(i, list[i]);
      result.push(node);
      if(2*i+1 < list.length) {
        let edge = this.createEdge(i, 2*i+1);
        result.push(edge);
      }
      if(2*i+2 < list.length) {
        let edge = this.createEdge(i, 2*i+2);
        result.push(edge);
      }
    }
    return result;
  }

  drawChart(id, data) {
    var options = {
      name: 'dagre',
      // dagre algo options, uses default value on undefined
      nodeSep: undefined, // the separation between adjacent nodes in the same rank
      edgeSep: undefined, // the separation between adjacent edges in the same rank
      rankSep: undefined, // the separation between adjacent nodes in the same rank
      rankDir: undefined, // 'TB' for top to bottom flow, 'LR' for left to right
      minLen: function( edge ){ return 1; }, // number of ranks to keep between the source and target of the edge
      edgeWeight: function( edge ){ return 1; }, // higher weight edges are generally made shorter and straighter than lower weight edges

      // general layout options
      fit: true, // whether to fit to viewport
      padding: 30, // fit padding
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      ready: function(){}, // on layoutready
      stop: function(){} // on layoutstop
    };
    var cy = cytoscape({
      container: document.getElementById(id),
      elements: data,
      layout: options,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'red',
            label: 'data(value)'
          }
        }]

    });
  }

  render() {
    return (
      <div className="heapContainer">
        <div id='beforeHeap' className='heap'>
        </div>
        <div id='afterHeap' className='heap'>
        </div>
      </div>
    );
  }

}

export default Heapd3;