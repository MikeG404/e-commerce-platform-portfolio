import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [
        {   
            id: 1,
            title: 'jeans',
            imageUrl: 'https://www.realsimple.com/thmb/pylBi8okBliW5e5qvCQFWPQatoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-denim-GettyImages-598820544-c87ecea4d6454e4a9184a35226c97735.jpg',
            products: [
                {
                    id: 1,
                    name: 'Blue Skinny Jeans',
                    imageUrl: 'https://zentaro.nl/cdn/shop/files/Spring-Summer-Men-s-Jeans-Ripped-Stretch-cotton-Black-Blue-Slim-Pencil-Pants-Everyday-Casual-Social.jpg_640x640_c6e818d1-772b-4ccb-bdf9-d67a7525860f.webp?v=1741258832&width=3000',
                    price: 30
                },
                {
                    id: 2,
                    name: 'Black Ripped Jeans',
                    imageUrl: 'https://www.fashionnova.com/cdn/shop/products/RippedUpBaggyJeans-Black_mer_3_468x.jpg?v=1651780894',
                    price: 30

                },
                {
                    id: 3,
                    name: 'Light Wash Straight Jeans',
                    imageUrl: 'https://lscoglobal.scene7.com/is/image/lscoglobal/28833-1308_M_JEANS_SKINNY?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1200&hei=1500s',
                    price: 30
                }
            ]
        },
        {
            id: 2,
            title: 'clothing',
            imageUrl: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
            products: [
                {
                    id: 1,
                    name: 'Cotton T-Shirt',
                    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
                    price: 30
                },
                {
                    id: 2,
                    name: 'Casual Sweater',
                    imageUrl: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400',
                    price: 60,
                },
                {
                    id: 3,
                    name: 'Dress Shirt',
                    imageUrl: 'https://images.unsplash.com/photo-1598033129519-cb4b50d1b3ff?w=400',
                    price: 15,
                }
            ]
        },
        {
            id: 3,
            title: 'books',
            imageUrl: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg',
            products: [
                {
                    id: 1,
                    name: 'Programming Guide',
                    imageUrl: 'https://images.booksense.com/images/298/365/9781651365298.jpg',
                    price: 45
                },
                {
                    id: 2,
                    name: 'Adventure Novel',
                    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
                    price: 78
                },
                {
                    id: 3,
                    name: 'Self-Help Book',
                    imageUrl: 'https://images.unsplash.com/photo-1476014422502-898657433e0e?w=400',
                    price: 35
                }
            ]
        }
    ]
    },
    reducers: {
    }
})


export const categoriesReducer = categoriesSlice.reducer;