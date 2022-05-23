import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ToolCard from './ToolCard';

const Tools = () => {
    const { data:tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    if(isLoading){
        return (<p className='text-primary'>Loading...</p>)
    }
    return (
        <div className='mt-10'>
            <h2 className='text-secondary text-2xl font-bold tracking-wider'>Available Tools</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5  lg:ml-36'>
                {
                    tools.map(tool => <ToolCard key={tool._id} tool={tool}></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;