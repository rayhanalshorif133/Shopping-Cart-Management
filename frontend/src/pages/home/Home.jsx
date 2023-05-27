import axios from 'axios';
import React from 'react';
import Card from '../../components/card/Card';

export default function Home() {

 const [data, setData] = React.useState([]);
 const [loading, setLoading] = React.useState(true);

 React.useEffect(() => {
  axios.get('https://dummyjson.com/products')
   .then((res) => {
    setData(res.data.products);
    setLoading(false);
    console.log(data);
   });
 }, [loading]);


 return (
  <div style={{ marginTop: "3%" }}>
   <div className="grid grid-cols-6 gap-4 md:grid-cols-5 md:gap-4 sm:grid-cols-2 sm:gap-2">
    {
     loading ? <div>Loading...</div> :
      <>
       {
        data.map((item, index) => {
         return <Card key={index} index={index} data={item} />
        })
       }
      </>
    }
   </div>
  </div>
 )
}
