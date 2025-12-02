import React from 'react';


export default function Contact() {
const [state, setState] = React.useState({ name: '', email: '', message: '' });
return (
<main className="max-w-2xl mx-auto px-6 py-12">
<h2 className="text-2xl font-bold mb-4">Contact</h2>
<form onSubmit={(e) => { e.preventDefault(); alert('Form submitted Successfully .'); }} className="space-y-4">
<input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className="w-full border rounded px-3 py-2" placeholder="Your name" />
<input value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className="w-full border rounded px-3 py-2" placeholder="Email" />
<textarea value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} className="w-full border rounded px-3 py-2" rows={6} placeholder="Message" />
<button className="px-4 py-2 rounded bg-indigo-600 text-white">Send message</button>
</form>
</main>
);
}