import './index.css'

const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    selectedEmoji(emojiDetails, id)
  }

  return (
    <li className="emoji_list_item" onClick={onClickEmoji}>
      <button className="emoji_btn" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji_img" />
      </button>
    </li>
  )
}

export default EmojiCard
