import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=> {
    
    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState ("")
    const [food_list,setFoodList] = useState([])


    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            console.log(item,cartItems[item]);
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id == Number(item));
            console.log(itemInfo);
            totalAmount += itemInfo.price * cartItems[item];
          }
        }
        return totalAmount;
      }

      const fetchFoodList = async ()=> {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
      }


      useEffect (()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        async function localData(){
            await fetchFoodList();
            if(localStorage.get("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        localData();

      },[])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
             {props.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;