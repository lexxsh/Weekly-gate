import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './scroll.css' // 스타일을 위한 CSS 파일

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 스크롤 위치에 따라 버튼 표시 여부 결정
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  )
}

export default ScrollToTop
