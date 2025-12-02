import React from 'react';


export default function Footer() {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div>
<h3 className="font-semibold">Creovibe.com</h3>
<p className="text-sm text-gray-500">Crafted with clarity & creativity at Creovibe.com</p>
</div>
<div className="text-sm text-gray-600">© {new Date().getFullYear()} Creovibe. All rights reserved.</div>
</div>
</footer>
);
}