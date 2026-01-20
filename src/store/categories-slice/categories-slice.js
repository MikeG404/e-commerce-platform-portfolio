import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [
        {   
            id: 1,
            title: 'jeans',
            imageUrl: 'https://www.realsimple.com/thmb/pylBi8okBliW5e5qvCQFWPQatoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-denim-GettyImages-598820544-c87ecea4d6454e4a9184a35226c97735.jpg'
        },
        {
            id: 2,
            title: 'clothing',
            imageUrl: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg'
        },
        {
            id: 3,
            title: 'books',
            imageUrl: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_1080xN.4841007885_potp.jpg'
        }
    ]
    },
    reducers: {
    }
})


export const categoriesReducer = categoriesSlice.reducer;