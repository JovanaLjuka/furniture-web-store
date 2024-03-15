import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <nav>
        <span>navbar</span>
      </nav>
      <Outlet />
    </>
  )
}

export default Homepage
