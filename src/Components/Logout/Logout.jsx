const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return ( 
        <button onClick={handleClick}>Logout</button>
        );
}
        
export default Logout;
        
    
    
 