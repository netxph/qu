interface HeaderProps {
  group: string
}

export default function Header({ group }: HeaderProps) {
  return (
    <header className="font-lato mx-auto flex max-w-6xl justify-between p-6">
      <h1 className="text-4xl font-extrabold">{group}</h1>
    </header>
  );
}
