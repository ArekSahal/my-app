import logo from "./multivac_logo.png"

function get_price(init_value, end_value, ndays, days) {
    const rate = (end_value/init_value)**(1/ndays)
    let price = init_value*(rate**days)
    return price
}


function Card(props) {


  let price_of_lambo = parseFloat(props.target_price)
  let target_day = parseInt(props.target)
  let target_car = props.target_car

  let initial_price = 0.017
  let future_price = 1
  let future_date = 1200

  let price = get_price(initial_price,future_price,future_date,target_day)

  let tokens_needed = price_of_lambo/price

  return (
    <div className="card">

      <div className="card-head">
      <p className="card-coins">
        {Math.round(tokens_needed).toString()}
      </p>
      <img src={logo} className="card-logo"/>
      </div>

      <div className="card-middle">

      <label className="card-middle-text">
        will buy me a
      </label>
      <label className="card-middle-car">
        {target_car}
      </label>
      </div>

      <div className="card-foot">
      <label>
        in {target_day} days
      </label>
      </div>
    </div>
  );
}

export default Card;
