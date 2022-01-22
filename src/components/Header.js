import Navigation from "./Navigation";

const Header = ({userData}) => {
    return (
        <header className="header">
            <h2>Biblio</h2>
            <Navigation userData={userData}/>
            <i className="fas fa-bars"></i>
        </header>
    );
};

export default Header;