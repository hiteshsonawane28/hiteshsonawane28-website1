import React from 'react';


export default function Card({ title, children }) {
return (
<div className="p-6 bg-white rounded-lg shadow">
<h4 className="font-semibold mb-2">{title}</h4>
<div className="text-gray-600">{children}</div>
</div>
);
}