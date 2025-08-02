import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-16 left-0">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
