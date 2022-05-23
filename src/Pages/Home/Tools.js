import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTools(data);
            })
    }, []);
    return (
        <div className='mt-10 lg:px-20'>
            <h2 className='text-secondary text-2xl font-bold tracking-wider'>Available Tools</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool=><ToolCard key={tool.id} tool={tool}></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;