import React, { useState } from 'react'

function Main() {
   let mobiles = [{
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: true},
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: false},
        {
        id:"003",
        name : "Redmi 10",
        price : 56999,
        isPurchased : true},
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : false},
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased : true},
        {
        id:"006",
        name : "Poco M4",
        price : 13999,
        isPurchased : true}];
    


   const[arr,setMobiles]=useState(mobiles);
  const sortMobilesLTH = () => {
   const sortedMobilesLTH = [...arr].sort((a, b) => a.price - b.price);
      setMobiles(sortedMobilesLTH);
   };
   const sortMobilesHTL = () => {
   const sortedMobilesHTL =[...arr].sort((a, b) => a.price - b.price);
      setMobiles(sortedMobilesHTL.reverse());
   };
   const filtermobiles=()=>{
      const filteredmobiles =arr.filter((elm)=>elm.isPurchased===true)
      setMobiles(filteredmobiles)
   }
   const sortMobilesAsc=()=>{
     const sortedAsc=[...arr].sort((a, b) =>{
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(sortedAsc)
    setMobiles(sortedAsc)
   }
   const sortMobilesDes=()=>{
    const sortedDes=[...arr].sort((a, b) =>{
     if (a.name < b.name) {
       return -1;
     }
     if (a.name > b.name) {
       return 1;
     }
     return 0;
   });
   setMobiles(sortedDes.reverse())
  }

  return (
    <div>Main
       {/* { arr.map((ele,i)=><p key={i}>{ele.name}</p>)} */}
       {arr.map((n,i) => (
          <div key={i}>
            <h3>Mobile name:{n.name}</h3>
            <p>Price: {n.price}</p>
          </div>
                ))}
       <button onClick={sortMobilesAsc}>Sort By Asc</button>
        <button  onClick={sortMobilesDes}>Sort By Des</button>
        <button  onClick={sortMobilesLTH}>LTH</button>
        <button onClick={sortMobilesHTL}>HTL</button>
        <button onClick={filtermobiles}>Filter</button>
       
    </div>
  )
}

export default Main