export default function QueueMenu({ className }: { className?: string }) {
  return (
    <div className={className}>
      <button className="text-xs">Play</button>
      <button className="text-xs">Edit</button>
    </div>
  );
}
