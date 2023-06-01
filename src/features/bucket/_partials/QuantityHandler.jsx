import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQtyByInput, bucketTotalPrice } from '../bucketSlice';
import { toast } from 'react-toastify';
import './QuantityHandler.css';

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
        if (inputRef.current != null) {

            parseInt(newQuantity) < 1 ? setNewQuantity(1) : setNewQuantity(newQuantity);

            dispatch(addQtyByInput({
                id: id,
                quantity: parseInt(newQuantity),
            }));
            dispatch(bucketTotalPrice());
            toast.info('Successfully changed the qty', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                theme: "colored",
            });
        }
    }

    const handleOnChange = (e) => {
        const upQuantity = e.target.value;

        if (upQuantity < 1) {
            toast.error('Quantity must be greater than 0', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                theme: "colored",
            });
            setNewQuantity('');
        } else {
            setNewQuantity(upQuantity);
        }
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
                        <input type="number" id="first_name"
                            className="w-20 bg-purple-100 text-purple-900 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400" value={newQuantity} onBlur={handleToggleInput} onChange={handleOnChange} name='inputQty' ref={inputRef} />
                    </>
            }

        </>
    )
}
