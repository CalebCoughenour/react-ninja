import { useState } from 'react';

const Home = () => {

const [name, setName] =  useState('Belac');
const [age, setAge] = useState(29);
  

  const handleClick = () => {
    setName('Caleb');
    setAge(30);
  }

  

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age }</p>
      <button onClick={handleClick}>Click Me</button>

    </div>
   );
}
 
export default Home;