import axios from 'axios';
import React from 'react';
import Card from '../../components/card/Card';
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

  const [loading, setLoading] = React.useState(true);
  const state = useSelector(state => state);
  console.log(state);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const getData = await axios.get('https://dummyjson.com/products');
    dispatch({ type: 'GET_SUCCESS', payload: getData.data.products });
  };

  React.useEffect(() => {
    fetchData();
  }, [loading]);


  return (
    <div style={{ marginTop: "3%" }}>
      <div className="grid grid-cols-6 gap-4 md:grid-cols-5 md:gap-4 sm:grid-cols-2 sm:gap-2">
        {
          loading ? <div>Loading...</div> :
            <>
              Hello
              {/* {
                data.map((item, index) => {
                  return <Card key={index} index={index} data={item} />
                })
              } */}
            </>
        }
      </div>
    </div>
  )
}
