import React from 'react';
import Saludo from './components/Saludo';
import ContadorFuncional from './components/ContadorFuncional';
import ContadorClase from './components/ContadorClase';
import ListaDeProductos from './components/ListaDeProductos';
import DetalleProducto from './components/DetalleProducto';

const App = () => {
    const productos = [
        { nombre: 'Producto 1', precio: 10 },
        { nombre: 'Producto 2', precio: 20 },
        { nombre: 'Producto 3', precio: 30 },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Ejercicios de React</h1>

            <Saludo nombre="Ana" />

            <h2 className="text-xl mt-4 mb-2">Contador Funcional</h2>
            <ContadorFuncional />

            <h2 className="text-xl mt-4 mb-2">Contador Clase</h2>
            <ContadorClase />

            <h2 className="text-xl mt-4 mb-2">Lista de Productos</h2>
            <ListaDeProductos productos={productos} />

            <h2 className="text-xl mt-4 mb-2">Detalle de un Producto</h2>
            <DetalleProducto 
                nombre="Producto Especial"
                precio={50}
                descripcion="Este es un producto especial."
            />
        </div>
    );
};

export default App;
