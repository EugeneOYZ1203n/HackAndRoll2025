const NavBar = ({}) => {
    return(
        <nav>
            <button onClick={() => navigate('/home')}>Browse</button>
            <button onClick={() => navigate('/technology')}>Technology</button>
            <button onClick={() => navigate('/sports')}>Sports</button>
        </nav>
    );
}