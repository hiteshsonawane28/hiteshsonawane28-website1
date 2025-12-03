import React from 'react';


const ServiceCard = ({ title, desc }) => {
    return (
        <div className="p-6 border rounded-lg">
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}

export default ServiceCard;