import { useNavigate } from "react-router-dom";

const NavBar = ({}) => {
    const navigate = useNavigate();
    return(
        <nav>
            <button onClick={() => navigate('/')}>Browse</button>
            <button onClick={() => navigate('/technology')}>Technology</button>
            <button onClick={() => navigate('/sports')}>Sports</button>
        </nav>
    );
}

export default NavBar