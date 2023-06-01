import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQtyByInput, bucketTotalPrice } from '../bucketSlice';

export default function QuantityHandler(props) {

    const { id } = props;
    const [input, setInput] = React.useState(true); // [false, function

    const quantity = useSelector(state => state.bucket.data.find(item => item.id === id).quantity);


    const [newQuantity, setNewQuantity] = React.useState(quantity);
    const dispatch = useDispatch();

    const handleToggleInput = () => {
        setInput(!input);
        dispatch(addQtyByInput({
            id: id,
            quantity: parseInt(newQuantity),
        }));
        dispatch(bucketTotalPrice());
    }

    const handleOnChange = (e) => {
        const upQuantity = e.target.value;
        if (upQuantity < 1) {
            setNewQuantity(quantity);
            return;
        }
        setNewQuantity(upQuantity);
    }

    useEffect(() => {
        setNewQuantity(quantity);
    }, [quantity]);

    return (
        <>
            {
                input ? <>
                    <span onClick={handleToggleInput} className="bg-purple-100 text-purple-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                        {newQuantity}
                    </span>
                </> :
                    <>
                        <input type="text" id="first_name"
                            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={newQuantity} onBlur={handleToggleInput} onChange={handleOnChange} name='inputQty' />
                    </>
            }

        </>
    )
}
