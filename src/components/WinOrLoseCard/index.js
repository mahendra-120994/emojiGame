import './index.css'

const WinOrLoseCard = props => {
  const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const {isWon, onClickPlayAgain, score, maxScore} = props

  const imgUrl = isWon ? wonImg : loseImg
  const altValue = isWon ? 'win' : 'lose'
  const status = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result_container">
      <div className="win_loss">
        <h1 className="result_status">{status}</h1>
        <p className="score_status">{scoreLabel}</p>
        <p className="score_gained">
          {score}/{maxScore}
        </p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>

      <img src={imgUrl} alt={altValue} className="result_img" />
    </div>
  )
}

export default WinOrLoseCard
