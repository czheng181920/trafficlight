export default function TrafficLight(props){
    let red, yellow, green = false;
    if (props.light === 'red'){
        red = true;
    } else if ( props.light === 'green'){
        green = true;
    } else {
        yellow = true;
    }
    return (
        <div className="gridItem street">
            <div className="traffic-container">
                {red 
                    ? <div className="lightContainer red"></div>
                    : <div className="lightContainer noLight"></div>}
                {yellow 
                    ? <div className="lightContainer yellow"></div>
                    : <div className="lightContainer noLight"></div>}
                {green 
                    ? <div className="lightContainer green"></div>
                    : <div className="lightContainer noLight"></div>}
            </div>
        </div>
    )
}