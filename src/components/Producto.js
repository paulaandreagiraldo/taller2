import React from 'react';

const Producto = ({ nombreProducto, precio }) => {
    return (
        <div className="border p-4 mb-2 rounded">
            <h2 className="text-xl">{nombreProducto}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Producto;
