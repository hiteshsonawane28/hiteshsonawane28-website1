import React from 'react';
import Card from '../Shared/Card.jsx';


export default function Home() {
return (
<main className="max-w-6xl mx-auto px-6 py-12">
<section className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
<p className="text-gray-600 mb-6">A minimal, experience-focused design system crafted to deliver clean interfaces, intuitive navigation, and fast performance.</p>
<ul className="list-disc pl-5 text-gray-700">
<li>User-friendly navigation with smooth interaction flow</li>
<li>Responsive header and mobile-first menu design</li>
<li>Tailwind-aligned visual utility style for consistency</li>
</ul>
</div>
<div className="bg-linear-to-br from-indigo-100 to-pink-50 rounded-lg p-8">
<h3 className="font-semibold mb-2">Quick Overview</h3>
<ol className="list-decimal pl-5 text-gray-700">
<li>Designed a lightweight, scalable UI system for rapid development.</li>
<li>Built structured layouts and reusable components for clarity.</li>
<li>Ensured effortless responsiveness and smooth user experience.</li>
</ol>
</div>
</section>


<section className="mt-12 grid md:grid-cols-3 gap-6">
<Card title="Performance">Fast-loading, static-style pages that prioritize usability and reduce friction for the user.</Card>
<Card title="Customizable">Design system built with flexible patterns — easy to restyle, adapt, and extend for any brand.</Card>
<Card title="Expandable">Supports additional pages, sections, and flows without breaking the structure or visual rhythm.</Card>
</section>
</main>
);
}