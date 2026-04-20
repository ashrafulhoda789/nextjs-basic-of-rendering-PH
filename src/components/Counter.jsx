'use client'
import React, { useState } from 'react';

const Counter = () => {
    console.log('Counter Value in counter component');
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 className='text-5xl'>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} className='btn mt-2'>Increment</button>
        </div>
    );
};

export default Counter;