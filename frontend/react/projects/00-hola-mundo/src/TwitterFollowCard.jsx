import { useState } from "react"


export function TwitterFollowCard ( {children, userName, initialIsFolliwing} ) {
  const [isFollowing, setIsFollowing] = useState(initialIsFolliwing)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard" style={{ display:'flex', alignItems: 'center', color: '#fff' }}>
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" 
        src={`https://unavatar.io/${userName}`} alt="Avatar twitter" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClass} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}