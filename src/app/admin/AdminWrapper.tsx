"use client";
import { ReactFlowProvider } from "@xyflow/react";
import Admin from "./Admin";

export default function AdminWrapper() {
  return (
    <ReactFlowProvider>
      <Admin />
    </ReactFlowProvider>
  );
}
