"use client";

import React, { useEffect, useState } from "react";
import { error } from "console";
import '@xyflow/react/dist/style.css';
import { ReactFlowProvider, Background, BackgroundVariant, ReactFlow } from '@xyflow/react';
import CustomNode from "../components/Node";
import { nodeTypes } from "@/components/nodes/types";
// import "reactflow/dist/style.css";

export default function PortfolioPage() {
  const [data, setData] = useState<{ nodes: any[]; edges: any[] } | null>(null);

    useEffect(() => {
    fetch("/api/projects")
      .then(async res => {
      const text = await res.text();
      if (!text) throw new Error("Empty response from /api/projects");
      return JSON.parse(text);
    })
      .then(setData)
      .catch(err => console.error("Error fetching data", err));
  }, []);

  useEffect(() => {console.log(data)}, [data])

  if (!data) {
    return <div className="flex items-center justify-center h-screen">Loading graph...</div>;
  }
  return (
    <div className="w-full h-screen">
    <ReactFlowProvider>
      <ReactFlow nodes={data.nodes} edges={data.edges} 
            defaultEdgeOptions={{ animated: true }}
            nodeTypes={nodeTypes}
            panOnDrag
            zoomOnScroll
            fitView
            colorMode='system'
      >
        <Background variant={BackgroundVariant.Dots}
              gap={32}
              size={1}
              color="#ccc" />
      </ReactFlow>
    </ReactFlowProvider>
    </div>
  );
}
0