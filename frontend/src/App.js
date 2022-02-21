import FamousPeople from './components/FamousPeople';
import FamousPeopleForm from './components/FamousPeopleForm';

const details = [
  { id: 1, name: 'John Meyer', job: 'Singer', country: 'USA', age: 44, netWorth: '40m' },
  { id: 2, name: 'Dwayne Johnson', job: 'Actor', country: 'USA', age: 49, netWorth: '320m' },
  { id: 3, name: 'Mike Tyson', job: 'Boxer', country: 'USA', age: 55, netWorth: '10m' },
];

function App() {
  return (
    <div>
      <FamousPeopleForm />
      <div className='famous-people__container'>
        {details.map((detail) => (
          <FamousPeople name={detail.name} job={detail.job} country={detail.country} age={detail.age} netWorth={detail.netWorth} />
        ))}
      </div>
    </div>
  );
}

export default App;
