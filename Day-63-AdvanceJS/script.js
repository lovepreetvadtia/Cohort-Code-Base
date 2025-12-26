async function getWeather(city){
    try {
    let apiKey=  'b92e57938eaebc6ded1fcf3a2f5b4bc3'

    let timeApi= 'af46a4d0024e46dfb576c2b1b936c3a0';
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    let rawtime= await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${timeApi}&location=${city}`)

    if(!raw.ok){
    throw new Error('City Not Found or Something Went Wrong')
    }
    let real =  await raw.json()
    let realTime =  await rawtime.json()
    console.log(real) 
    console.log(realTime) 


let body = document.querySelector('body')

body.innerHTML =`<div class="container">
        <aside class="sidebar">
            <div class="logo">
                <i class="fa-solid fa-sun"></i>
            </div>
            <nav class="nav-menu">
                <a href="#" class="active"><i class="fa-solid fa-table-cells-large"></i></a>
                <a href="#"><i class="fa-solid fa-location-dot"></i></a>
                <a href="#"><i class="fa-regular fa-calendar"></i></a>
                <a href="#"><i class="fa-regular fa-compass"></i></a>
                <a href="#"><i class="fa-regular fa-star"></i></a>
                <a href="#"><i class="fa-solid fa-gear"></i></a>
            </nav>
            <div class="logout">
                <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
        </aside>

        <main class="main-content">
            <header>
                <div class="search-bar">
                    <i class="fa-solid fa-magnifying-glass" id="searchBtn"></i>
                    <input type="text" id="cityInput" placeholder="Search City...">
                </div>
                <div class="header-profile">
                    <div class="theme-toggle">
                        <i class="fa-regular fa-sun"></i>
                        <i class="fa-regular fa-moon"></i>
                    </div>
                    <div class="notification">
                        <i class="fa-regular fa-bell"></i>
                        <span class="dot"></span>
                    </div>
                    <div class="profile">
                        <span>Hi, John</span>
                        <img src="https://i.pravatar.cc/100?img=12" alt="Profile">
                    </div>
                </div>
            </header>

            <div class="dashboard">
                
                <div class="left-col">
                    <div class="card weather-card-blue">
                        <div class="weather-header">
                            <div>
                                <p>${realTime.datetime}</p>
                                <h4>${real.name} <i class="fa-solid fa-angle-down"></i></h4>
                            </div>
                        </div>
                        <div class="weather-main">
                            <h1>${Math.floor(real.main.temp)}°</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163657.png" alt="Cloudy" class="weather-icon-lg">
                        </div>
                        <p class="weather-status">${real.weather[0].description}</p>
                        <div class="weather-details">
                            <div class="detail">
                                <i class="fa-solid fa-wind"></i>
                                <span>${real.wind.speed} km/h<br><small>Wind</small></span>
                            </div>
                            <div class="detail">
                                <i class="fa-solid fa-droplet"></i>
                                <span>${real.main.humidity}%<br><small>Humidity</small></span>
                            </div>
                            <div class="detail">
                                <i class="fa-regular fa-eye"></i>
                                <span>1.7 km<br><small>Visibility</small></span>
                            </div>
                        </div>
                    </div>

                    <div class="card city-card">
                        <div class="city-info">
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163657.png" width="30">
                            <div>
                                <h4>New York</h4>
                                <small>Sunny</small>
                            </div>
                        </div>
                        <h3>24°</h3>
                    </div>

                    <div class="card city-card">
                        <div class="city-info">
                            <img src="https://cdn-icons-png.flaticon.com/512/1146/1146860.png" width="30">
                            <div>
                                <h4>California</h4>
                                <small>Rainy</small>
                            </div>
                        </div>
                        <h3>17°</h3>
                    </div>

                    <div class="add-city-btn">
                        <i class="fa-solid fa-plus"></i>
                        <p>Add the cities you are interested in.</p>
                    </div>
                </div>

                <div class="right-col">
                    
                    <div class="top-widgets">
                        <div class="card forecast-card">
                            <div class="card-header">
                                <h3>Next 7 Days</h3>
                                <a href="#">See all</a>
                            </div>
                            <div class="forecast-list">
                                <div class="f-item">
                                    <span>Monday</span>
                                    <div class="f-icon"><i class="fa-solid fa-cloud"></i> Windy</div>
                                    <span>23° / 18°</span>
                                </div>
                                <div class="f-item">
                                    <span>Tuesday</span>
                                    <div class="f-icon"><i class="fa-solid fa-bolt"></i> Storm</div>
                                    <span>18° / 15°</span>
                                </div>
                                <div class="f-item active">
                                    <span>Tomorrow</span>
                                    <div class="f-icon"><i class="fa-solid fa-cloud-rain"></i> Rainy</div>
                                    <span>24° / 17°</span>
                                </div>
                            </div>
                        </div>

                        <div class="card map-card">
                            <div class="map-overlay">
                                <div class="map-tag">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>${Math.floor(real.main.temp)}° ${real.name}<br><small>${real.weather[0].description}</small></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card chart-card">
                        <div class="card-header">
                            <h3>Overview</h3>
                            <div class="chart-filters">
                                <span class="active">Temperature</span>
                                <span>Humidity</span>
                                <span>Rainfall</span>
                            </div>
                        </div>
                        <div class="chart-container">
                            <svg viewBox="0 0 500 100" class="line-chart">
                                <path d="M0,80 Q50,90 100,50 T200,80 T300,20 T400,80 T500,60" fill="none" stroke="#5b9bf3" stroke-width="3"/>
                                <path d="M0,80 Q50,90 100,50 T200,80 T300,20 T400,80 T500,60 V100 H0 Z" fill="url(#grad1)" opacity="0.3"/>
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" style="stop-color:#5b9bf3;stop-opacity:1" />
                                      <stop offset="100%" style="stop-color:#5b9bf3;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <circle cx="300" cy="20" r="5" fill="#fff" stroke="#5b9bf3" stroke-width="2"/>
                            </svg>
                            <div class="chart-tooltip" style="left: 60%; top: 10%;">${Math.floor(real.main.temp)}°</div>
                            
                            <div class="chart-labels">
                                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>`

}catch (err) {
    console.log(err.message)
  }

}

getWeather('Toronto')