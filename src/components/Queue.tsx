import React from 'react'
import QueueMenu from './QueueMenu'

interface QueueProps extends React.PropsWithChildren {
  court: string
}

export default function Queue({ children, court }: QueueProps) {
  return (
    <article>
      <div className="p-4 rounded-lg bg-white shadow-md">
        <div className="flex justify-between">
          <h3 className="font-bold">{court}</h3>
          <QueueMenu className="flex gap-x-2" />
        </div>
        <div className="flex justify-between mt-2">
          {children}
        </div>
      </div>
    </article>
  )
}
