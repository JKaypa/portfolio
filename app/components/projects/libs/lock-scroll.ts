const lockScroll = () => {
  document.body.style.overflow = 'hidden'

}

const unlockScroll = () => {
  document.body.style.overflow = 'auto'
}

export { lockScroll, unlockScroll }