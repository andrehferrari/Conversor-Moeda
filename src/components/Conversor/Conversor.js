import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }
    converter () {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`

        let url = `https://economia.awesomeapi.com.br/json/last/${de_para}`

        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            let sigla = `${this.props.moedaA}${this.props.moedaB}`
            let cotacao = json[sigla].ask;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
            this.setState({moedaB_valor})
        })
    }
  render() {
    return (
      <div className='conversor'>
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type='text'
        onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}>
        </input>
        <button onClick={this.converter}>Converter</button>
        <h2>R$ {this.state.moedaB_valor}</h2>
      </div>
    )
  }
}