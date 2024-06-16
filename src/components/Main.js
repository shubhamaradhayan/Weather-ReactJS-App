import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import '../components/style.css'
const Main = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");
  useEffect(() => {
    const tempApi = async () =>{
      const apiKey = "cafbc07d3044203137b871d5cc33c239";
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`
      const response = await fetch(apiURL);
      const responseJson = await response.json()
      setCity(responseJson.main)
      console.log(response.ok)
    
    };
    tempApi();
  }, [search])


  return (
    <>

   
    <div className='body'>
    <div className="card text-center mb-3 temp-card m-auto my-4" >
    <div>

<h3 className='container my-2 text-center title'>Today's Weather </h3>
<hr></hr>
<input type='search' className='search-box px-4 py-1' value={search} onChange={(event) => {
  setSearch(event.target.value)
}}></input>
</div>
  <div className="card-body">
    { !city ? (<h1>Not Found ! </h1>):( 
      <div>

        <h5 className="card-title city-name"><i className="bi bi-geo-alt-fill loction-icon"></i>&nbsp;{search}</h5>
        
        <h3 className='temp'>{city.temp} &#8451; </h3>
        <p className="card-text my-0">Min : {city.temp_min} &#8451; || Max : {city.temp_max} &#8451; </p>
        </div>
      )

}
  </div>
</div>
    </div>
    </>
  )
}

export default Main
