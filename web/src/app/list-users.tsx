import { prisma } from '@/database/prisma'
import { user } from '@heroui/react'

export async function ListUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      matches_winner: {
        select: {
          id: true,
        },
      },
      matches_banned: {
        select: {
          id: true,
        },
      },
      matches_gave: {
        select: {
          id: true,
        },
      },
    },
  })

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.username}</p>
            <p>Vitórias: {user.matches_winner.length}</p>
            <p>Bans: {user.matches_banned.length}</p>
            <p>Dadas: {user.matches_gave.length}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
