import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate()

const moveTopHome = () => {
  navigate('/', { replace: false });
  // Delay scroll slightly to ensure it happens after navigation
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
};


  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-3 shadow-md">
      <div className="text-[15px] sm:text-xl font-bold cursor-pointer text-blue-600" onClick={moveTopHome} >Hipster Assign</div>

      <nav className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        <select
          value={theme}
          onChange={(e:any) => setTheme(e.target.value)}
          className="border px-2 py-1 rounded outline-none"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
