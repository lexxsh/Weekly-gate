import React from 'react'

const TruncatedTitle = ({ text, maxLength }) => {
  const actualMaxLength = maxLength - 2

  const truncatedText =
    text.length > actualMaxLength
      ? `"${text.substring(0, actualMaxLength)}..."`
      : `"${text}"`

  return (
    <div
      className="HotCard-title"
      id="title"
      style={{
        maxWidth: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {truncatedText}
    </div>
  )
}

export default TruncatedTitle
