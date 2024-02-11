import "./project.css"
import { Carousel } from 'antd';
const Project=()=>{
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
    return(
        <div className="project">
            <p className="headline">Project</p>
        <img className="projectimg" src="project (2).png"/>
        <div className="horizontal"></div>
        <div className="square-box">
            <div className="square-box1">
              <a href="https://github.com/riteshkumar7/PRODIGY_WD_01-Stopwatch-">
              <img src="stopwatch.png"/>
              </a>
            </div>
            <div className="square-box2">
              <a href="https://github.com/riteshkumar7/PRODIGY_WD_05-WeatherApp-">
              <img src="weather.png"/>
              </a>
            </div>
            <div className="square-box3">
            <Carousel autoplay autoplaySpeed={3000} afterChange={onChange}>
      <div className="sbox">
        <a href="https://github.com/riteshkumar7/PRODIGY_WD_02-Tic-tac-toe-">
        <img src="tic.png"/>
        </a>
      </div>
      <div className="sbox">
      <img src="tac.png"/>
      </div>
      <div className="sbox">
      <img src="toe.png"/>
      </div>
      <div className="sbox">
      <img src="win.png"/>
      </div>
    </Carousel>
            </div>
            <div className="square-box4">
            <Carousel autoplay autoplaySpeed={3000} afterChange={onChange}>
      <div className="sbox1">
        <a href="https://github.com/riteshkumar7/PRODIGY_WD_03-ResponsiveWebsite-">
        <img src="fullscreen.png"/>
        </a>
      </div>
      <div className="sbox1">
      <img src="for tab.png"/>
      </div>
      <div className="sbox1">
      <img src="for mobile.png"/>
      </div>
    </Carousel>
            </div>
            <div className="square-box5">
              <a href="https://github.com/riteshkumar7/calculator">
              <img src="calculator.png"/>
              </a>
            </div>
        </div>
        
        </div>
    );
}
export default Project;