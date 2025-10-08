export default function Queue() {
  return (
    <article>
      <div className="p-4 rounded-lg bg-white shadow-md">
        <div className="flex justify-between">
          <h3 className="font-bold">Court 1</h3>
          <div className="flex gap-x-2">
            <button className="text-xs">Play</button>
            <button className="text-xs">Edit</button>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <p>Player 1</p>
            <p>Player 2</p>
          </div>
          <div>
            <p>Player 3</p>
            <p>Player 4</p>
          </div>
        </div>
      </div>
    </article>
  )
}
