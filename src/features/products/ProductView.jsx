import React from 'react';
import CardView from './card/CardView';

export default function ProductView({ data }) {
    return (
        <div>
            <div className="flex flex-wrap justify-center m-auto">
                {
                    data && data.map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="p-2">
                                    <CardView product={product} index={index} />
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}
