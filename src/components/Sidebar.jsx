const Sidebar = () => {
    return (
        <aside className = 'sidebar'>
            <ul className = 'sidebar__list'>
                <li className="sidebar__items"><a href="#" className="sidebar__link sidebar__link--active">My page</a></li>
                <li className="sidebar__items"><a href="#" className="sidebar__link">News</a></li>
                <li className="sidebar__items"><a href="#" className="sidebar__link">Messages</a></li>
                <li className="sidebar__items"><a href="#" className="sidebar__link">Friends</a></li>
                <li className="sidebar__items"><a href="#" className="sidebar__link">Settings</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;