import './FamousPeople.css';

function FamousPeople(props) {
  return (
    <div className='famous-people__container'>
      <div className='famous-people__details'>
        <h2 className='famous-people__name'>{props.name}</h2>
        <ul>
          <li className='famous-people__job'>
            <span>Job:</span> {props.job}
          </li>
          <li className='famous-people__country'>
            <span>Country:</span> {props.country}
          </li>
          <li className='famous-people__age'>
            <span>Age:</span> {props.age}
          </li>
          <li className='famous-people__net'>
            <span>Net worth:</span> {props.net}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FamousPeople;
