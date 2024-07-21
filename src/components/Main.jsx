import React from 'react'
import './Main.css'
import Button from './Button'
import { FaBook, FaGamepad } from 'react-icons/fa'

const FloatingCircle = ({ filled, size, top, left }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
  }
  return (
    <div
      className={`floating-circle ${filled ? 'filled' : 'bordered'}`}
      style={style}
    ></div>
  )
}
const Main = () => {
  const circles = [
    { filled: true, size: 40, top: 20, left: 40 },
    { filled: false, size: 30, top: 70, left: 80 },
    { filled: true, size: 55, top: 40, left: 60 },
    { filled: false, size: 65, top: 20, left: 90 },
    { filled: true, size: 35, top: 50, left: 30 },
    { filled: false, size: 28, top: 60, left: 10 },
  ]
  return (
    <div className="Container">
      <img
        src="https://axiesreact.themesflat.co/static/media/bg-gradient1.ea9b8bf6d8ab79c28eb0.png"
        alt="Axies Logo 1"
        className="logo-img1"
      />
      <img
        src="https://axiesreact.themesflat.co/static/media/bg-gradient2.0c780f516f9376180099.png"
        alt="Axies Logo 2"
        className="logo-img2"
      />
      <img
        src="https://axiesreact.themesflat.co/static/media/bg-gradient3.b45d2f2c22fee5b49962.png"
        alt="Axies Logo 3"
        className="logo-img3"
      />
      <img
        src="https://axiesreact.themesflat.co/static/media/bg_slide_1.73bec561ec8b64df09cc.png"
        alt="Axies Logo 3"
        className="logo-img4"
      />
      <div class="heading">과거의 교훈, 오늘의 지혜</div>
      <h1 class="heading mb-style">
        <div class="tf-text" data-text="Extraordinary Monster NFTs">
          Explore the Past
        </div>
      </h1>
      <div class="heading">역사로 이어지는 교육의 다리</div>
      {circles.map((circle, index) => (
        <FloatingCircle key={index} {...circle} />
      ))}
      <div class="heading-tiny">
        "당신의 손끝에서 즐기는 AI 기반 인터랙티브 웹툰과 게임"
      </div>
      <div className="Buttons">
        <Button type="explore" text="만화 만들기" icon={FaBook} />
        <Button type="create" text="게임만들기" icon={FaGamepad} />
      </div>
    </div>
  )
}

export default Main
