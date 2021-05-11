import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Blog App</span> Post
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest Posts
      </p>
    </div>
  )
}

export default Header
