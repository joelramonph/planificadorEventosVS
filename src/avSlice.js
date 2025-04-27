import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      image: "https://pixabay.com/photos/event-venue-auditorium-meeting-1597531/",
      name: "",
      cost: 200,
      quantity: 0
    },
    {
      image: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0
    },
    {
      image: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0
    },

    {
      image: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0
    },

    {
    image: "https://pixabay.com/images/download/signpost-235079_640.jpg",
    name: "Signage",
    cost: 80,
    quantity: 0
    }


  ],


  reducers: {

    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];

      if(item){
        item.quantity++

      }
    },

    decrementAvQuantity: (state, action) => {
     const item = state[action.payload]
     if(item && item > 0){
       item.quantity--
     }
    },
  },


});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
