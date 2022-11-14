import { Link } from 'react-router-dom';
import NotFound from '../assets/images/NotFound.jpg'
import '../index.css'

function Page404() {
    return (
        <div className='NotFound'>
            <h1>Page Not Found</h1>

            <h3> Url is incorrect</h3>
            <div className='dh'>
                <img src={NotFound} alt='Not Found'/>
            </div> 
            <li className='list'> <Link to='/'> Go to Home</Link></li>
            <li className='list'> <Link to='/genres'> Go to Genres</Link></li>
            <li className='list'> <Link to='/movies'> Go to Movies</Link></li>


        </div>
    )
}

export default Page404;