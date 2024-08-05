import { Carousel } from 'primereact/carousel'
import React, { useContext } from 'react'
import { ApiContext } from '../hooks/ApiContext';
import { responsiveOptions } from '../responsiveOptions'
import Carrousel from '../Carrousel';

function CarrouselTemplate() {
    const { data, isLoading } = useContext(ApiContext);

    // console.log(data?.results);

    return (
        isLoading ? (
            <div>Cargando...</div>
        ) : (
            data?.results?.length > 0 ? (
                <Carousel 
                    className='custom-carousel'
                    value={data.results}
                    numVisible={3}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={Carrousel} 
                />
            ) : (
                <div>No data available</div>
            )
        )
    );
}

export default CarrouselTemplate;
