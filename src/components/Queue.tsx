import Team from './Team'
import QueueMenu from './QueueMenu'

export default function Queue() {
  return (
    <article>
      <div className="p-4 rounded-lg bg-white shadow-md">
        <div className="flex justify-between">
          <h3 className="font-bold">Court 1</h3>
          <QueueMenu className="flex gap-x-2" />
        </div>
        <div className="flex justify-between mt-2">
          <Team />
          <Team />
        </div>
      </div>
    </article>
  )
}
