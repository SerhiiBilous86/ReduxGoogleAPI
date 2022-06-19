
function SingleHistory (props) {
    console.log ('single history > ' , props )

    return (
        <div className="cardlist">           
            <div className="histcapt"> {props.data.locate} </div>
            <div className="timecapt"> {props.data.date} </div>
        </div>
    )
}

export default SingleHistory;