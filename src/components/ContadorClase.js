import React, { Component } from 'react';

class ContadorClase extends Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
    }

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 });
    };

    render() {
        return (
            <div className="p-4">
                <h2 className="text-xl">Contador: {this.state.contador}</h2>
                <button 
                    onClick={this.incrementar} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Incrementar
                </button>
            </div>
        );
    }
}

export default ContadorClase;
