function DayForm(props) {
//<input type="datetime-local"/>

    return (
      <div className="dayform">
      <form >
        <label>In how many days do you want it?
        </label>
        <input
            type="number" 
            min="0"
            max="1000" 
            placeholder={"100"}
            onChange={(e) => props.setDate(e.target.value)}
          />
      </form>
      </div>
    )
}

export default DayForm;
