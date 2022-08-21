import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


export default function Search() {
    const [APIData, setAPIData] = useState([{}])
    const [filteredResults, setFilteredResults] = useState();
    const [searchInput, setSearchInput] = useState('');
    const {Upcomingmovie,Populargmovie, NowPlayinggmovie,Topratedmovie} = useSelector((state) => state.movie);
    
//  APIData = [{}];

// let newArr = [1,2,3,4,5,6,7];


    // useEffect( () => {
       
              setAPIData(Upcomingmovie);
            //   console.log(APIData);

            
    // },[])


    
    

   
    // const searchItems = (searchValue) => {
        // setSearchInput(searchValue)
        // if (searchInput !== '') {
        //     const filteredData = APIData.filter((item) => {
        //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        //     })
        //     setFilteredResults(filteredData)
        // }
        // else{
        //     setFilteredResults(APIData)
        // }
    // }



    return (
        <>
            {/* <input onChange={(e) => searchItems(e.target.value)} />

            <>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                        
                                <>
                                    <h2>{item.name}</h2>
                                    <p>
                                        {item.email}
                                    </p>
                                </>
                            
                        )
                    })
                ) : (
*/
                    // APIData.map((item) => {
                    //     return (
                        
                    //             <>
                    //             {/* <h2>{item.title}</h2> */}
                    //                 {/* <p>
                    //                     {item.email}
                    //                 </p> */}
                    //                 <h1>search</h1>
                    //             </>
                            
                    //     )
                    // })

                    /*

                )}
            </> */}

<h1>search</h1>
            
        </>
    )
}