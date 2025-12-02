import React from 'react';
import ServiceCard from '../Shared/Servicecard.jsx';


export default function Services() {
return (
<main className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-bold mb-4">Services</h2>
<div className="grid md:grid-cols-3 gap-6">
<ServiceCard title="Design" desc="Crafting clean, intuitive UI/UX experiences — from wireframes to high-fidelity prototypes." />
<ServiceCard title="Development" desc="Building responsive, user-friendly interfaces using modern frontend practices." />
<ServiceCard title="Consulting" desc="Providing product, design, and interaction strategy to help brands create meaningful digital experiences." />
</div>
</main>
);
}