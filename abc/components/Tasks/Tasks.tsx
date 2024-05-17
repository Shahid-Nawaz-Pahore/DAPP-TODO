import React from 'react'
import { readCont;ract } from 'wagmi/actions';
import { abi } from '../../constant/abi';


const Tasks = () => {
    const result = useContractRead({
        abi,
        address: '0x733eE4CC683d818B346549021951275632f102A5',
        functionName: 'allTask',
    });
    console.log({result}, 'anas');


    return (
        <div>Tasks</div>
    )
}

export default Tasks