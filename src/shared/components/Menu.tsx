export default function Menu() {
  return (
    <section className="fixed bottom-0 left-0 w-full">
      <nav className="flex justify-around rounded-t-xl bg-white p-4 shadow-lg">
        <button>Home</button>
        <button>Players</button>
        <button>Stats</button>
        <button>Settings</button>
      </nav>
    </section>
  );
}
