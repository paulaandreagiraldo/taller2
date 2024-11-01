import React from 'react';

const DetalleProducto = ({ nombre, precio, descripcion }) => {
    return (
        <div className="border p-4 mb-2 rounded">
            <h2 className="text-xl">{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
        </div>
    );
};

export default DetalleProducto;
