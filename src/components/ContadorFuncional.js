import React, { useState } from 'react';

const ContadorFuncional = () => {
    const [contador, setContador] = useState(0);

    return (
        <div className="p-4">
            <h2 className="text-xl">Contador: {contador}</h2>
            <button 
                onClick={() => setContador(contador + 1)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Incrementar
            </button>
        </div>
    );
};

export default ContadorFuncional;

