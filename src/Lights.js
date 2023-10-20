import TrafficLight from './TrafficLight';
export default function Lights(props){
    let red = props.red;
    let green = props.green;
    let seconds = props.seconds;
    let eastWestColor= (seconds%(red*2)) >= red 
      ? "red"
      : (seconds%(red*2)) < green 
        ? "green"
        : "yellow"
    let northSouthColor = (seconds%(red*2)) < red 
      ? "red"
      : (seconds%(red*2)) < red+green 
        ? "green"
        : "yellow"
    console.log(northSouthColor)
    return (
        <div className="gridContainer">
        <div className="gridItem">
          <div className={"pedestrianLights bottom left " + eastWestColor}>
          
          </div>
          <div className={"pedestrianLights top right " + northSouthColor}></div>
        </div>
        {(seconds%(red*2)) >= red 
          ? <TrafficLight light={'red'} />
          : (seconds%(red*2)) < green 
            ? <TrafficLight light={'green'} />
            : <TrafficLight light={'yellow'} />
        }
        <div className="gridItem">
          <div className={"pedestrianLights bottom right " + eastWestColor}></div>
          <div className={"pedestrianLights top left " + northSouthColor}></div>
        </div>
        {(seconds%(red*2)) < red 
          ? <TrafficLight light={'red'} />
          : (seconds%(red*2)) < red+green 
            ? <TrafficLight light={'green'} />
            : <TrafficLight light={'yellow'} />
        }
        <div className="gridItem street">
        </div>
        {(seconds%(red*2)) < red 
          ? <TrafficLight light={'red'} />
          : (seconds%(red*2)) < red+green 
            ? <TrafficLight light={'green'} />
            : <TrafficLight light={'yellow'} />
        }
        <div className="gridItem">
          <div className={"pedestrianLights top left " + eastWestColor}></div>
          <div className={"pedestrianLights bottom right " + northSouthColor}></div>
        </div>
        {(seconds%(red*2)) >= red 
          ? <TrafficLight light={'red'} />
          : (seconds%(red*2)) < green 
            ? <TrafficLight light={'green'} />
            : <TrafficLight light={'yellow'} />
        }
        <div className="gridItem">
          <div className={"pedestrianLights top right " + eastWestColor}></div>
          <div className={"pedestrianLights bottom left " + northSouthColor}></div>
        </div>
      </div>
    )
}