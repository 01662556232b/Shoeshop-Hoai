import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class HomePage extends Component {

  renderShoes = () => {
    return this.props.arrayShoes.map((shoes) => {
        return <div className="col-4" key={`shoes-${shoes.id}`}>
           <ProductItem showDetail={this.props.showDetail} shoes={shoes}/>
        </div>
    })
}

  render() {
    return (
      <div className="col-9">
      <h1 style={{ color: 'rgb(122, 24, 187)' ,display:'inline-block','padding-top':'30px'}} className='text-center'>SHOES SHOP</h1>
      <span style={{display:'block',color:'green','padding-bottom':'30px'}}>Make Somthing Powerfull For Your Life</span>
      <div className="row">
          {this.renderShoes()}
      </div>
  </div>
    )
  }
}
