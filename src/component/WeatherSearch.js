import React from 'react'

const WeatherSearch = ({ handleSearch }) => {
    return (
        <div>
          <form
        action="/action_page.php"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <h2>
          {" "}
          <i className="fa fa-cloud"></i>
          <div className="title">Weather Api</div>
        </h2>
        <div className="input-container">
          <i className="fas fa-map-marker-alt"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Search"
            name="usrnm"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </form>  
        </div>
    )
}

export default WeatherSearch
