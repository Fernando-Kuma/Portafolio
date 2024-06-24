import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'TheOkumara',
    name: 'Fernando Galindo',
    isFollowing: true
  },{
    userName: 'DragonSinner',
    name: 'Ricardo Elias',
    isFollowing: false
  },{
    userName: 'x',
    name: 'Elon Musk',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className='App'>
       {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }   
    </section>
  )
}