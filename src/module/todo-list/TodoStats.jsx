import React from 'react'

function TodoStats({totalTasks, activeTasks, completedTasks}) {
  return (
    <>
    <section className="flex gap-4 justify-between mb-8">
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
          <div>
            Total Tasks
          </div>
          <p className="text-3xl text-orange-400 font-bold">{totalTasks}</p>
        </div>
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
         <div>
          Active Tasks
         </div>
          <p className="text-3xl text-yellow-400 font-bold">{activeTasks}</p>
        </div>
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
          <div>
            Completed
          </div>
          <p className="text-3xl text-green-500 font-bold">{completedTasks}</p>
        </div>
        <div className="rounded bg-slate-700">
        </div>
    </section>
    </>
  )
}

export default TodoStats