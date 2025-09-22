import { Handle, Position, useReactFlow, type Node, type NodeProps } from '@xyflow/react';
import { AnimatePresence, motion } from 'motion/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ICustomNode {
    type: string;
    title: string;
    description?: string;
    color: string;
    [key: string]: unknown; 
}

type ImageNode = Node<ICustomNode & {type:'image', image: StaticImport; alt: string }, 'image'>;
type TextNode = Node<{ type: 'text' }, 'text'>;

type AppNode = ImageNode | TextNode;

export default function CustomNode({ id, data }: NodeProps<AppNode>) {
        const { getNode, getEdges } = useReactFlow();
    // console.log(getEdges())
    // Pega todas edges que chegam neste node
    const incomingEdges = getEdges().filter(e => e.target === id);

    // // Se tiver uma edge, pego o node "source"
    const previousNode = incomingEdges.length > 0
        ? getNode(incomingEdges[0].source)
        : null;

    
    const previousValue = previousNode?.data.title;

    console.log("source " + id, previousValue)
    
    return (
        <motion.div
            initial={{ scale: 0.2 }}
            // animate={{ scale: 1, transition: { duration: 0.2 } }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            whileInView={{ scale: 1, transition: { duration: 0.3 }}}
            viewport={{ once: false }}
            // whileTap={{ scale: 0.95 }}
        > 
            <div className='border-2 ring-2 ring-pink-600 hover:shadow-lg bg-[#f8f8f8] dark:bg-[#1e1e1e] border-[#1a192b] h-fit rounded-2xl min-w-60 text-center'>
                <Handle type="target" position={Position.Left} />

                {data.type === 'image' && (
                    <Image className='w-full h-fit mb-2' src={data.image} alt={data.alt} />
                )
                }
                <h3 className="animate-typing">{data.title}</h3>
                <div>{data.description}</div>
                <Handle type="source" position={Position.Right} />
                {/* <div className="animate-bounce">teste</div> */}
            </div>
        </motion.div>
    );
}



export function HabilityNode () {
    return (
        <>
            <h2></h2>
        </>
    )
}   