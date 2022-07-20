import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'Example Title1', body: 'Lorem ipsum...1', author: 'Example Author1', id: 1},
    { title: 'Example Title2', body: 'Lorem ipsum...2', author: 'Example Author2', id: 2},
    { title: 'Example Title3', body: 'Lorem ipsum...3', author: 'Example Author3', id: 3}
  ]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
   );
}
 
export default Home;