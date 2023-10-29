import React, { createContext, useEffect, useState } from "react";
import items from "./data";
const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const data = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type:"all",
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
  };
  const [state,setState] = useState(data);
  

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = slug =>{
    let temprooms = [...state.rooms];
    let room  = temprooms.find((room)=> room.slug===slug);
    return room;
  }
 let Rooms=[]
  const handleChange = event =>{
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    if(value==='all'){
      Rooms=state.rooms
    }
    Rooms = state.rooms.filter((room)=>room.type===value);
    
  }

  


  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room)=>room.featured === true)
    let maxPrice = Math.max(...rooms.map(item=>item.price));
    let maxSize = Math.max(...rooms.map(item=>item.size));

    setState({
      rooms,
    sortedRooms:
    featuredRooms,
    loading: false,
    price:maxPrice,
    maxPrice,
    maxSize,
   
    })
    
  }, []);

  return (
    <RoomContext.Provider value={{ ...state,getRoom,handleChange,Rooms }}>{children}</RoomContext.Provider>
  );
};
// const RoomConsumer = RoomContext.Consumer;
export default RoomProvider;
export { RoomContext };
