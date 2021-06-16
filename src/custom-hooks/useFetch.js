
import  { useEffect, useState } from 'react';

const useFetch = (url) =>{

    
   const [data, setData] = useState(
       {
           data: {},
           loading: true,
           status: true
       })

    useEffect( () => {
     
        fetch(url)
        .then(async response => {
            const dataResp = await response.json();

            // check for error response
            if (response.ok) {
                // get error message from body or default to response statusText
                //const error = (data && data.message) || response.statusText;
                //return Promise.reject(error);
                setData({loading:false,
                    status:true,
                    data: {
                    name      : dataResp.location.name,
                    condition : dataResp.current.condition.text,
                    icon      : dataResp.current.condition.icon,
                    tempeature: dataResp.current.temp_c,
                    humidity  : dataResp.current.humidity  
                    }
                });


            }else{
                console.error('There was an error aqui!');
                setData({loading:false,
                    status:false,
                    data: {
                    name      : '',
                    condition : '',
                    icon      : '',
                    tempeature: '',
                    humidity  : ''  
                    }
                });
                console.log(data);


            }
        })
        .catch(error => {
            console.error('There was an error alla!', error);
            setData({loading:false,
                status:false,
                data: {
                name      : '',
                condition : '',
                icon      : '',
                tempeature: '',
                humidity  : ''  
                }
            });

        });


        /*1111
        getFetch()
        .then(weatherData =>{
            setData({data:weatherData.weather,loading:false});
        })*/

    },[url] );    


    const getFetch = async () => {

        await fetch(url)
        const resp = await fetch( url );
        const dataResp  = await resp.json();

        const weather = {
            name      : dataResp.location.name,
            condition : dataResp.current.condition.text,
            icon      : dataResp.current.condition.icon,
            tempeature: dataResp.current.temp_c,
            humidity  : dataResp.current.humidity  
        }
        return {weather};
    }
    return data;
}
export default useFetch;