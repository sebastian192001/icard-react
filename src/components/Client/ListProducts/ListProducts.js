import { map } from 'lodash'
import React from 'react'
import { toast } from 'react-toastify'
import { Button, Icon, Image } from 'semantic-ui-react'
import { addProductCart } from "../../../api/cart"
import "./ListProducts.scss"

export function ListProducts(props) {
    const { products } = props

    const addCart = (product) => {
        addProductCart(product.id)
        toast.success(`${product.title} añadido al carrito`)
    }
  return (
    <div className='list-products-client'>
        {map(products, (product) => (
            <div key={product.id} className = 'list-products-client__product'>
                <div>
                    <Image src = {product.image} />
                    <span> {product.title} </span>
                </div>
                <Button primary icon onClick={() => addCart(product)}>
                    <Icon name='add' />
                </Button>
            </div>
        ))}
    </div>
  )
}
