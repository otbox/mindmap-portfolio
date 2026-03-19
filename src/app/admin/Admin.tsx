"use client"
import { useState, useCallback } from 'react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  Panel,
  useReactFlow,
  NodeChange,
  EdgeChange
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import CreateNodeButton from '@/components/admin/CreateNodeButton';
import { nodeTypes } from '@/components/nodes/types';

const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' }, type: 'creationNode' },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function Admin() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const { screenToFlowPosition } = useReactFlow();

  const onNodesChange = useCallback(
    (changes: NodeChange<{ id: string; position: { x: number; y: number; }; data: { label: string; }; }>[]) => setNodes((ns) => applyNodeChanges(changes, ns)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<{ id: string; source: string; target: string; }>[]) => setEdges((es) => applyEdgeChanges(changes, es)),
    []
  );

  const onConnect = useCallback(
    (params: any) => setEdges((es) => addEdge(params, es)),
    []
  );

  const onConnectEnd = useCallback(
    (event: any, connectionState: any) => {
      if (!connectionState.isValid) {
        const id = crypto.randomUUID();

        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;

        const newNode = {
          id,
          position: screenToFlowPosition({ x: clientX, y: clientY }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          type: 'creationNode',
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        fitView
        nodeOrigin={[0.5, 0]}
      >
        <Controls />
        <Background
          variant={BackgroundVariant.Dots}
          gap={32}
          size={1}
          color="#ccc"
        />
        <Panel position="bottom-right">
          <CreateNodeButton />
        </Panel>
      </ReactFlow>
    </div>
  );
}
