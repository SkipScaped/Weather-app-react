import Servicejs from './service.js'
function Weather() {

    return(
        <>
            <div id="main">
                <div className="header">
                    <header>
                        <input
                            type="text"
                            id="input-box"
                            className="input-box"
                            placeholder="City Name and Press Enter"
                        />
                    </header>
                </div>
                <div className="wrapper">
                    <button id="b">
                        <div className="item">
                            <div id="mday" className="day"/>
                            <div id="mtemp"/>
                            <h5>Friday</h5>
                            <div id="logo">
                                <img id="ico" src="" alt="" height="25px"/>
                            </div>
                            <div id="mdes"/>
                        </div>
                    </button>
                    <button id="b1">
                        <div className="item">
                            <h5>Saturday</h5>
                            <div id="day1" className="day"/>
                            <div id="temp1"/>
                            <div id="logo">
                                <img id="icon1" src="" alt="" height="25px"/>
                            </div>
                            <div id="des1"/>
                        </div>
                    </button>
                    <button id="b2">
                        <div className="item">
                            <h5>Sunday</h5>
                            <div id="day2" className="day"/>
                            <div id="temp2"/>
                            <div id="logo">
                                <img id="icon2" src="" alt="" height="25px"/>
                            </div>
                            <div id="des2"/>
                        </div>
                    </button>
                    <button id="b3">
                        <div className="item">
                            <h5>Monday</h5>
                            <div id="day3" className="day"/>
                            <div id="temp3"/>
                            <div id="logo">
                                <img id="icon3" src="" alt="" height="25px"/>
                            </div>
                            <div id="des3"/>
                        </div>
                    </button>
                    <button id="b4">
                        <div className="item">
                            <h5>Tuesday</h5>
                            <div id="day4" className="day"/>
                            <div id="temp4"/>
                            <div id="logo">
                                <img id="icon4" src="" alt="" height="25px"/>
                            </div>
                            <div id="des4"/>
                        </div>
                    </button>
                    <button id="b5">
                        <div className="item">
                            <h5>Wednesday</h5>
                            <div id="day5" className="day"/>
                            <div id="temp5"/>
                            <div id="logo">
                                <img id="icon5" src="" alt="" height="25px"/>
                            </div>
                            <div id="des5"/>
                        </div>
                    </button>
                </div>
                <div id="section">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temp" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-1">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps1" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon1" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure1"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity1"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr1"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss1"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-2">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps2" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon2" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="vl"/>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure2"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity2"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr2"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss2"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-3">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps3" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon3" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="vl"/>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure3"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity3"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr3"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss3"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-4">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps4" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon4" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="vl"/>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure4"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity4"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr4"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss4"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-5">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps5" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon5" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="vl"/>
                        </div>
                        <div className="temp">
                            <div className="temp2">
                                <h4>Pressure</h4>
                                <div id="pressure5"/>
                            </div>
                            <div className="temp2">
                                <h4>Humidity</h4>
                                <div id="humidity5"/>
                            </div>
                        </div>
                        <div>
                            <div className="sun">
                                <div>
                                    <h3>Sunrise</h3>
                                    <p id="sr5"/>
                                </div>
                                <div>
                                    <h3>Sunset</h3>
                                    <p id="ss5"/>
                                </div>
                            </div>
                            <div>
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                <div className="time">
                                    <div>5am</div>
                                    <div>2pm</div>
                                    <div>5pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-6">
                    <div className="inner-div">
                        <div className="temp-div">
                            <div className="temp">
                                <div id="temps6" className="temp1">
                                    <h1/>
                                </div>
                                <div className="temp1">
                                    <img id="micon6" src="" alt="" height="30px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="vl"/>
                        </div>
                        <div className="item">
                            <div id="day1"/>
                            <div id="temp1"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des1"/>
                        </div>
                        <div className="item">
                            <div id="day2"/>
                            <div id="temp2"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des2"/>
                        </div>
                        <div className="item">
                            <div id="day3"/>
                            <div id="temp3"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des3"/>
                        </div>
                        <div className="item">
                            <div id="day4"/>
                            <div id="temp4"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des4"/>
                        </div>
                        <div className="item">
                            <div id="day5"/>
                            <div id="temp5"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des5"/>
                        </div>
                        <div className="item">
                            <div id="day6"/>
                            <div id="temp6"/>
                            <div id="logo">
                                <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="25px"/>
                            </div>
                            <div id="des6"/>
                        </div>
                    </div>
                    <div>
                        <div className="inner-div">
                            <div className="temp-div">
                                <div className="temp">
                                    <div id="temp" className="temp1">
                                        <h1/>
                                    </div>
                                    <div id="day" className="temp1">
                                        <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/01n.png" alt="" height="35px"/>
                                    </div>
                                </div>
                            </div>
                            <div className="temp">
                                <div className="temp2">
                                    <h4>Pressure</h4>
                                    <div id="pressure6"/>
                                </div>
                                <div className="temp2">
                                    <h4>Humidity</h4>
                                    <div id="humidity6"/>
                                </div>
                            </div>
                            <div>
                                <div className="sun">
                                    <div>
                                        <h3>Sunrise</h3>
                                        <p id="sr6"/>
                                    </div>
                                    <div>
                                        <h3>Sunset</h3>
                                        <p id="ss6"/>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://aaliyan-bot.github.io/Weather-app-vanillajs/sun.png" alt="" srcSet="" width="443px" height="100px"/>
                                    <div className="time">
                                        <div>5am</div>
                                        <div>2pm</div>
                                        <div>5pm</div>
                                    </div>
                                    <div id="pressure"/>
                                </div>
                                <div className="temp2">
                                    <h4>Humidity</h4>
                                    <div id="humidity"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Weather
