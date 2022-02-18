import FamousPeople from './components/FamousPeople';

const details = [
  { name: 'John Meyer', job: 'Singer', country: 'USA', age: 44, net: '40m' },
  { name: 'Dwayne Johnson', job: 'Actor', country: 'USA', age: 49, net: '320m' },
  { name: 'Mike Tyson', job: 'Boxer', country: 'USA', age: 55, net: '10m' },
];

function App() {
  return (
    <div className='famous-people'>
      {details.map((detail) => (
        <FamousPeople name={detail.name} job={detail.job} country={detail.country} age={detail.age} net={detail.net} />
      ))}
    </div>
  );
}

export default App;
