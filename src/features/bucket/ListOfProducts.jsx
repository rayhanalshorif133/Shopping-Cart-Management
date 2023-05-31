import React from 'react'

export default function ListOfProducts({ data }) {
    console.log(data);
    return (
        <div className=''>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index} className="mb-5 justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="py-3 px-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={item.img} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.price}
                                </p>
                            </div>
                        </div>);
                })
            }
        </div>
    )
}
