import { useContext } from "react"
import { selectedProduct } from "../Context/ShopContext"

export const useSelected = () => {
    const context = useContext(selectedProduct)
    return context
}


