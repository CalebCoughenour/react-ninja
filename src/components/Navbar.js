const Navbar = () => {



  return ( 
    <nav className="navbar">
      <h1>Belac Blog
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'
           }}>New Blog</a>
        </div>
      </h1>
    </nav>
   );
}
 
export default Navbar;