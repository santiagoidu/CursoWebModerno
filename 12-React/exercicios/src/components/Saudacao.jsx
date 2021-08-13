import React, { Component } from 'react'

export default class Saudacao extends Component {
    state = {
        tipo: "Fala",
        nome: "pedro"
    }
    setTipo(e){
        let i = 1
        setInterval(() => { 
            this.setState({ tipo: ++i })
        }, 1000)
    }
    render(){
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                onChange={e =>this.setTipo(e)}
                value={tipo} />
            </div>
        )
    }
}