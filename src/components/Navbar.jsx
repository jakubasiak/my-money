import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to='/'>myMoney</Link></li>

            {!user && (
              <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
              </>
            )}

            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li><button className="btn" onClick={logout}>Logout</button></li>
              </>
            )}

        </ul>
    </nav>
  )
}
