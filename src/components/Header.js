import Navigation from "./Navigation";

const Header = ({userState, isGranted}) => {
    return (
        <header className="header">
            <h2>Biblio</h2>
            <Navigation userState={userState} isGranted={isGranted}/>
            <i className="fas fa-bars"></i>
        </header>
    );
};

export default Header;