import React from 'react'

const AssignmentCard = () => {
    return (
        <div className='flex gap-3 flex-col justify-between py-2 px-4 rounded w-full h-fit shadow-6xl'>

            {/* Assignment name */}
            <div>
                <div className=' py-1 border-b border-lightborder w-fit pr-5'>Course: {`Course 1`}</div>
                <div className=' py-1 border-b border-lightborder w-fit pr-5'>Subject: {`Subject`}</div>
                <div className=' py-1 border-b border-lightborder w-fit pr-5'>Deadline: {`Subject`}</div>
                <div className=' py-1 border-b border-lightborder w-fit pr-5'>Ponits: {`Subject`}</div>
                <div className=' py-1 border-b border-lightborder w-fit pr-5'>Deadline: {`12 - 03 - 23`}</div>
            </div>

            <button className='bg-primary cursor-pointer w-20 rounded-[20px] text-white mt-auto ml-auto p-1'>open</button>
        </div>
    )
}

export default AssignmentCard