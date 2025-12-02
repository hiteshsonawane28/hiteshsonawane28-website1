import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
return (
<header className="bg-white shadow-md sticky top-0 z-10">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">C </div>
<div>
<h1 className="text-lg font-semibold">Creovibe.com</h1>
<p className="text-xs text-gray-500">Portfolio website</p>
</div>
</div>


<nav className="space-x-4 hidden md:block">
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/services">Services</NavLink>
<NavLink to="/contact">Contact</NavLink>
</nav>


<div className="md:hidden">
<MobileNav />
</div>
</div>
</header>
);
}


function NavLink({ to, children }) {
return (
<Link
to={to}
className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
>
{children}
</Link>
);
}


function MobileNav() {
const [open, setOpen] = React.useState(false);
return (
<div className="relative">
<button
onClick={() => setOpen((s) => !s)}
aria-label="Menu"
className="p-2 rounded-md border"
>
☰
</button>
{open && (
<div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
<Link onClick={() => setOpen(false)} to="/" className="block px-4 py-2">Home</Link>
<Link onClick={() => setOpen(false)} to="/about" className="block px-4 py-2">About</Link>
<Link onClick={() => setOpen(false)} to="/services" className="block px-4 py-2">Services</Link>
<Link onClick={() => setOpen(false)} to="/contact" className="block px-4 py-2">Contact</Link>
</div>
)}
</div>
);
}