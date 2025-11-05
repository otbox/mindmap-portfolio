import { NextResponse } from "next/server";

let data = {
  nodes: [
    { id: "1", data: { title: "Portfolio Website", description: "A portfolio Project" }, position: { x: 100, y: 200 }, type: "custom" },
    { id: "2", data: { title: "API Backend", description: "A portfolio Project" }, position: { x: 400, y: 200 }, type: "custom" },
    { id: "3", data: { title: "Blog", description: "Personal blog section" }, position: { x: 700, y: 200 }, type: "custom" },
    { id: "4", data: { title: "Authentication Service", description: "Handles user login and registration" }, position: { x: 400, y: 400 }, type: "custom" },
    { id: "5", data: { title: "Contact Form", description: "Allows users to send messages" }, position: { x: 100, y: 400 }, type: "custom" }
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", label: "Uses" },
    { id: "e1-3", source: "1", target: "3", label: "Links to" },
    { id: "e2-4", source: "2", target: "4", label: "Authenticates" },
    { id: "e1-5", source: "1", target: "5", label: "Includes" },
    { id: "e5-4", source: "5", target: "4", label: "Requires Auth" }
  ]
};

export async function GET() {
    return NextResponse.json(data);
}

// POST → adiciona novo node
export async function POST(req: Request) {
  const body = await req.json();
  const newNode = {
    id: (data.nodes.length + 1).toString(),
    data: { title: body.data.title, description: body.data.description },
    position: body.position || { x: 200, y: 200 },
    type: body.type
  };
  data.nodes.push(newNode);
  return NextResponse.json({ ok: true, node: newNode });
}

// PUT → atualizar node
export async function PUT(req: Request) {
  const body = await req.json();
  const node = data.nodes.find(n => n.id === body.id);
  if (!node) return NextResponse.json({ error: "Node not found" }, { status: 404 });
  
  node.data.title = body.title || node.data.title;
  node.data.description = body.description || node.data.description;
  node.position = body.position || node.position;
  return NextResponse.json({ ok: true, node });
}

// DELETE → remover node
export async function DELETE(req: Request) {
  const body = await req.json();
  data.nodes = data.nodes.filter(n => n.id !== body.id);
  data.edges = data.edges.filter(e => e.source !== body.id && e.target !== body.id);
  return NextResponse.json({ ok: true });
}
