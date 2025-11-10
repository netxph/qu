import React from 'react'

interface TeamProps extends React.PropsWithChildren {
  id: number
}

export default function Team({ children, id }: TeamProps) {
  return (
    <div data-id={id}>
      {children}
    </div>
  )
}
