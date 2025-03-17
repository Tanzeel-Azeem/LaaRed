

export const ProductSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
        name : 'productName',
        title: 'Product Name',
        type: 'string'
    },
    {
        name : 'productPrice',
        title: 'Product Price',
        type: 'number'
    },
    {
        name : 'productImage',
        title: 'Product Image',
        type: 'image'
    }
]
}