import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ToolCard from './ToolCard';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://cryptic-beach-33503.herokuapp.com/tools').then(res => res.json()));

    if (isLoading) {
        return (<p className='text-primary'>Loading...</p>)
    }

    // const modifieTool=tools.length;
    let modifiedTools
    if (tools.length >= 6) {
        modifiedTools = tools.slice(0, 6);
    }
    return (
        <div className='mt-10'>
            <h2 className='text-secondary text-2xl font-bold tracking-wider my-10'>Available Tools</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5  lg:ml-36'>
                {
                    modifiedTools.map(tool => <ToolCard key={tool._id} tool={tool}></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;