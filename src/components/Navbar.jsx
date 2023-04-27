import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
      <h2>Codwiz</h2>

      <div className='nav__profile'>
        <h4>Hi, Dinesh</h4>
        <div className='nav__profile__avatar'>
          <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1627565932767/FNQ1u6YbV.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp' />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
