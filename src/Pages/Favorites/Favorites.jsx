import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavoriteCard from "./FavoriteCard";


const Favorites = () => {
    const [favorites,setFavorites]=useState([]);
    const [noFound,setNoFound] = useState(false);

    const [isShow,setIsShow] = useState(false);
    const [totalPrice,setTotalPrice]=useState();

   useEffect(()=>{
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
    
    if(favoriteItems){
     setFavorites( favoriteItems );

   const total= favoriteItems.reduce((preValue,currentItem)=>preValue+currentItem.price,0);
   console.log(total);
   setTotalPrice(total)

    }else{
        setNoFound('No Data Found')
    }

   
   },[])
  console.log(favorites);
  const handleRemove =()=>{
    localStorage.clear();
    setFavorites([]);
    setNoFound('No Data Found');
  }

  console.log(isShow);
    return (
        <div>
            {favorites.length>0 && (
            <div>
              <button
            onClick={handleRemove}
            className="px-5 bg-green-200 block mx-auto">Deleted All Favorites</button>
            <h1>Total price:{totalPrice}</h1>
            </div>
            )}
           {
            noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            :<div>
              <div className="grid grid-cols-2 gap-5">
                {
                  isShow?favorites.map(phone =><FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                  :
                  favorites.slice(0,2).map(phone =><FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                }
              </div>

           {
            favorites.length > 2 &&  <button onClick={()=>setIsShow(!isShow)}
            className="px-5 bg-green-200 block mx-auto">
               {isShow?'see less':'see more'}
               </button>
           }
            </div>
           }
        </div>
    );
};

export default Favorites;