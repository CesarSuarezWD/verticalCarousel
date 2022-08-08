import React from 'react'
import { dataNft } from './dataNft'

export const VerticalCarousel = () => {
  return (
    <div className='img'>

        <div className='img-stripe stripe1'>
            { dataNft.map( item => {
                return <img src={ item.linkImg } alt='Test Imagen NFT' />
            }) } 
        </div>

        <div className='img-stripe stripe2'>
        { dataNft.map( item => {
                return <img src={ item.linkImg } alt='Test Imagen NFT' />
            }) } 
        </div>

        <div className='img-stripe stripe3'>
        { dataNft.map( item => {
                return <img src={ item.linkImg } alt='Test Imagen NFT' />
            }) } 
            </div>
        </div>
  )
}
