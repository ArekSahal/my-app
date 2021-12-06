

function  Picker(props) {


  function setCar(x) {
    props.setTarget(props.cars_data[x][0])
    props.setTargetCar(props.cars_data[x][1])
    console.log(props.cars_data[x][0])

  }

  function create_options(li) {
    let opts = []
    for (let i=0;i<li.length;i++) {
      opts.push(<option value={i}>{li[i][1]}</option>)
    }
    return opts
  }


    return (
        <div className="cars">
      <label for="cars">Which car do you want to buy?</label>

      <select name="cars" id="cars" placeholder="Select Lambo" onChange={e => setCar(e.target.value)}>
        {create_options(props.cars_data)}
      </select>
      </div>
      
    )
}

export default Picker;