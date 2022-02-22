import FamousPeople from './components/Famous/FamousPeople';
// import FamousPeopleForm from './components/FamousPeopleForm';

const App = () => {
  const people = [
    { id: 1, title: 'John Mayer', job: 'Singer', country: 'USA', age: 44, netWorth: '40M' },
    { id: 2, title: 'Dwayne Johnson', job: 'Actor', country: 'USA', age: 49, netWorth: '320M' },
    { id: 3, title: 'Mike Tyson', job: 'Boxer', country: 'USA', age: 55, netWorth: '10M' },
  ];

  return (
    <div className='famous-people__container'>
      <FamousPeople title={people[0].title} job={people[0].job} country={people[0].country} age={people[0].age} netWorth={people[0].netWorth}></FamousPeople>
      <FamousPeople title={people[1].title} job={people[1].job} country={people[1].country} age={people[1].age} netWorth={people[1].netWorth}></FamousPeople>
      <FamousPeople title={people[2].title} job={people[2].job} country={people[2].country} age={people[2].age} netWorth={people[2].netWorth}></FamousPeople>
    </div>
  );
};

export default App;
