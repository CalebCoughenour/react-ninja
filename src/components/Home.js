const Home = () => {

  const handleClick = () => {
    console.log('Hello Belac!')
  }

  const handleClickAgain = (name) => {
    console.log('Hello ' + name)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickAgain('Belac')}>Click Again</button>
    </div>
   );
}
 
export default Home;