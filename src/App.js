import FamousPeople from './components/FamousPeople';

function App() {
  const details = [
    { name: 'John Meyer', job: 'Singer', country: 'USA', age: 44, net: '40m' },
    { name: 'Dwayne Johnson', job: 'Actor', country: 'USA', age: 49, net: '320m' },
    { name: 'Mike Tyson', job: 'Boxer', country: 'USA', age: 55, net: '10m' },
  ];

  return (
    <div>
      <FamousPeople name={details[0].name} job={details[0].job} country={details[0].country} age={details[0].age} net={details[0].net}></FamousPeople>
  <FamousPeople name={details[1].name} job={details[1].job} country={details[1].country} age={details[1].age} net={details[1].net}></FamousPeople>
    <FamousPeople name={details[2].name} job={details[2].job} country={details[2].country} age={details[2].age} net={details[2].net}></FamousPeople>


    
    </div>
  );
}

export default App;
