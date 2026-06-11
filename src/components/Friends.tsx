import { friendLinks } from '../data/friends'

export default function Friends() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Friends</h2>
      <ul className="space-y-2">
        {friendLinks.map((friend) => (
          <li key={friend.url}>
            <a href={friend.url} target="_blank" rel="noopener noreferrer">
              {friend.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
