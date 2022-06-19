import SingleHistory from './singlehistory'
import { useSelector } from 'react-redux'
import { historyReducer } from './../redux/historyReducer';

function History (props) {

    const point = useSelector(state => {
        console.log ( "History > ", state.historyReducer.history)
        let lpoint = state.historyReducer.history;
        return lpoint ;
    })

    //useEfect

    return (
        <div className='historybox' style={{visibility: props.visible}}>
            <img className='iconhis' src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" alt="icon" />
            <h3 className='cpths'>My History list:</h3>
            {
                 point.map ((dats, index) => (
                    <SingleHistory key={index} id={index} data={dats} />
                 ))
            }
            
        </div>
    )
}

export default History;