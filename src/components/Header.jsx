import star from '../assets/images/icon-star.svg'

const Header = () => {
  return (
    <header className='header'>
      <img className='header-image' src={star} alt="Star Icon" />
      <h1 className='header-title'>How did we do?</h1>
    </header>
  )
}

export default Header
