/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import NavBar from '../NavBar/index'

import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojis: [],
    score: 0,
    topScore: 0,
    isGameInProgress: true,
  }

  onClickPlayAgain = () => {
    const {score} = this.state
    this.setState({
      selectedEmojis: [],
      score: 0,
      isGameInProgress: true,
      topScore: score,
    })
  }

  selectedEmoji = id => {
    const {selectedEmojis} = this.state

    if (selectedEmojis.includes(id)) {
      this.setState({
        isGameInProgress: false,
      })
    } else {
      this.setState(prev => ({
        score: prev.score + 1,
        selectedEmojis: [...prev.selectedEmojis, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const maxScore = emojisList.length

    let isWon = false
    let isGameContinue = isGameInProgress
    if (score === maxScore) {
      isGameContinue = false
      isWon = true
    }

    let shuffledEmojisList
    if (isGameContinue) {
      shuffledEmojisList = this.shuffledEmojisList()
    }

    return (
      <div className="bg_container">
        <NavBar
          score={score}
          topScore={topScore}
          isGameContinue={isGameContinue}
        />
        <div className="container">
          <div className="game_container">
            {isGameContinue && (
              <ul className="emoji_list">
                {shuffledEmojisList.map(emojiDetails => (
                  <EmojiCard
                    emojiDetails={emojiDetails}
                    key={emojiDetails.id}
                    selectedEmoji={this.selectedEmoji}
                  />
                ))}
              </ul>
            )}
            {!isGameContinue && (
              <WinOrLoseCard
                isWon={isWon}
                score={score}
                maxScore={maxScore}
                onClickPlayAgain={this.onClickPlayAgain}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
