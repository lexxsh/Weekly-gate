import React from 'react'
import Modal from './modal'
import { motion } from 'framer-motion'
import './checkmodal.css'
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}
const Checkmodal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div
        className="check-modal-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <div className="check-info-left">
            <div className="check-maintext">
              <div>타임캡슐</div>
              <div>알고싶은 내용을 선택해주세요!.</div>
              <div>오늘도 행복한 하루되세요.</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Modal>
  )
}

export default Checkmodal
