import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/page_not_found.svg'

const ErrorPage = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className='container'>
        <img src={img} alt='not-found' />
        <h3>Ohh!</h3>
        <p>The page you were looking for does not exist..</p>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
  return (
    <div>
      <h3>other errors</h3>
    </div>
  )
}

export default ErrorPage
