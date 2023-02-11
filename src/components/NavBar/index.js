import './index.css'

const NavBar = props => {
  const {score, isGameContinue, topScore} = props
  return (
    <nav className="navbar">
      <div className="nav_logo_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo_img"
        />
        <h1 className="nav_title">Emoji Game</h1>
      </div>
      {isGameContinue && (
        <div className="nav_result">
          <p className="nav_score">Score: {score}</p>
          <p className="nav_top_score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
