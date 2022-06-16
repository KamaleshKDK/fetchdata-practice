import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

function Country() {
    const [country, setCountry] = useState([])

    // Method - 1

     // const fetchData = () => {
    //     axios.get("https://restcountries.com/v3.1/all").then((res) => {
    //     console.log(res.data)
    //     setCountry(res.data)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    
    
    // Method - 2
    
    // const fetchData = () => {
    //     fetch("https://restcountries.com/v3.1/all").then(response =>{
    //         return response.json()
    //     }).then(data=>{
    //         setCountry(data)
    //     })
    // }
   

    // Method - 3

    const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            setCountry(data)
    }

    useEffect(() => {
        fetchData()
    },[])

        return (
            <>
                <h1>COUNTRY DETAILS</h1>

                <div className='container'>
                    <table>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Region</th>
                        <th>Flag</th>
                    </tr>
                    {
                        country.map((countries, index)=>(
                            <tr key={index}>
                        <td>{countries.name.common}</td>
                        <td>{countries.capital}</td>
                        <td>{countries.population}</td>
                        <td>{countries.region}</td>
                        <img src={countries.flags.png} style={{width:"25px",height:"25px"}}/>
                    </tr>
                        ))
                    }  
                    </table>


                </div>
            </>
        )
    }

    export default Country