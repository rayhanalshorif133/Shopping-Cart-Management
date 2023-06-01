import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQtyByInput, bucketTotalPrice } from '../bucketSlice';

export default function QuantityHandler(props) {


    const { id } = props;
    const [input, setInput] = React.useState(true); // [false, function
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const quantity = useSelector(state => state.bucket.data.find(item => item.id === id).quantity);
    const [newQuantity, setNewQuantity] = React.useState(quantity);

    const handleToggleInput = (e) => {
        e.preventDefault();
        setInput(!input);
        dispatch(addQtyByInput({
            id: id,
            quantity: parseInt(newQuantity),
        }));
        dispatch(bucketTotalPrice());
    }

    const handleOnChange = (e) => {
        const upQuantity = e.target.value;
        setNewQuantity(upQuantity);
    }

    useEffect(() => {
        setNewQuantity(quantity);
        if (inputRef.current != null) {
            inputRef.current.focus();
        }
    }, [quantity, input]);

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
                            className="w-20 bg-purple-100 text-purple-900 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400" value={newQuantity} onBlur={handleToggleInput} onChange={handleOnChange} name='inputQty' ref={inputRef} />
                    </>
            }

        </>
    )
}
