import { useState } from 'react';

const Home = () => {

// const [name, setName] =  useState('Belac');
// const [age, setAge] = useState(29);
  

//   const handleClick = () => {
//     setName('Caleb');
//     setAge(30);
//   }

  const [blogs, setBlogs] = useState([
    { title: 'Example Title1', body: 'Lorem ipsum...1', author: 'Example Author1', id: 1},
    { title: 'Example Title2', body: 'Lorem ipsum...2', author: 'Example Author2', id: 2},
    { title: 'Example Title3', body: 'Lorem ipsum...3', author: 'Example Author3', id: 3}
  ]);

  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
      {/* <p>{ name } is { age }</p>
      <button onClick={handleClick}>Click Me</button> */}

    </div>
   );
}
 
export default Home;