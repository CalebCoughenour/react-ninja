import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [name, setName] = useState('Belac');

  const [blogs, setBlogs] = useState([
    { title: 'Example Title1', body: 'Lorem ipsum...1', author: 'Belac', id: 1},
    { title: 'Example Title2', body: 'Lorem ipsum...2', author: 'Example Author2', id: 2},
    { title: 'Example Title3', body: 'Lorem ipsum...3', author: 'Belac', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name)
  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Caleb')}>Change Name</button>
      <p>{ name }</p>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Belac')} title="Belac's Blogs"/> */}
    </div>
   );
}
 
export default Home;