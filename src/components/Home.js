import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => { 

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(response => {
        if(!response.ok) {
          throw Error('Could not fetch the data for that resource');
        }
      return response.json()
    })
      .then((data) => {
        setError(null)
        setBlogs(data)
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false)
        setError(err.message)
      })
  }, []);

  return ( 
    <div className="home">
      {error && <div>{ error }</div> }
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      
    </div>
   );
}
 
export default Home;