interface PlayerProps {
  name: string
}

export default function Player({ name }: PlayerProps) {
  return (
    <p>{name}</p>
  )
}
