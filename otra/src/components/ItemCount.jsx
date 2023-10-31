import { useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementarStock = () => {
        if (items <= itemStock) {
            setItems(items + 1  );
    }
}
    const decrementarStock = () => {


}}
export default ItemCount;