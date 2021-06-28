
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

            if (response.ok) {

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
    },[url] );    

    return data;
}
export default useFetch;