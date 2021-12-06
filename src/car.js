import car_img from "./car.png"

function Car(props) {

        return (

            <div className="car-container">
                {props.car != "" ? <img src={car_img} alt={props.car}/> : <div></div>}

            </div>
        )
    }
    
    export default Car;
    