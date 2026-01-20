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
                    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400',
                    price: 30
                },
                {
                    id: 2,
                    name: 'Black Ripped Jeans',
                    imageUrl: 'https://images.unsplash.com/photo-1541099810657-40d6a9270acb?w=400',
                    price: 30

                },
                {
                    id: 3,
                    name: 'Light Wash Straight Jeans',
                    imageUrl: 'https://images.unsplash.com/photo-1505503693641-c55fb0270d71?w=400',
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
                    imageUrl: 'https://images.unsplash.com/photo-150784272343-583f20270319?w=400',
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