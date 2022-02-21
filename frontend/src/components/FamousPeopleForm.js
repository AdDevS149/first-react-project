import React, { useState } from 'react';
import './FamousPeopleForm.css';

function FamousPeopleForm() {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [netWorth, setNetWorth] = useState('');

  const [fullNameErr, setFullNameErr] = useState({});
  const [jobTitleErr, setJobTitleErr] = useState({});
  const [countryErr, setCountryErr] = useState({});
  const [ageErr, setAgeErr] = useState({});
  const [netWorthErr, setNetWorthErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setFullName('');
      setJobTitle('');
      setCountry('');
      setAge('');
      setAge('');
      setNetWorth('');
    }
  };

  const formValidation = () => {
    const fullNameErr = {};
    const jobTitleErr = {};
    const countryErr = {};
    const ageErr = {};
    const netWorthErr = {};
    let isValid = true;

    if (!fullName.trim().length > 0) {
      fullNameErr.fullNameValueEmpty = 'Please insert username';
      isValid = false;
    }

    if (!jobTitle.trim().length > 0) {
      jobTitleErr.jobTitleValueEmpty = 'Please insert a job value';
      isValid = false;
      console.log(jobTitleErr.jobTitleValueEmpty);
    }

    if (!country.trim().length > 0) {
      countryErr.countryValueEmpty = 'Please insert a country value';
      isValid = false;
    }

    if (!age.trim().length > 0) {
      ageErr.ageEmptyValue = 'Please insert an age value';
      isValid = false;
    }

    if (!netWorth.trim().length > 0) {
      netWorthErr.netWorthEmptyValue = 'Please insert an net worth value';
      isValid = false;
    }

    setFullNameErr(fullNameErr);
    setJobTitleErr(jobTitleErr);
    setCountryErr(countryErr);
    setAgeErr(ageErr);
    setNetWorthErr(netWorthErr);
    return isValid;
  };

  return (
    <div className='form-container'>
      <div className='form-details'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            value={fullName}
            className='form-input'
            placeholder='Username'
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={jobTitle}
            className='form-input'
            placeholder='Job'
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={country}
            className='form-input'
            placeholder='Country'
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={age}
            className='form-input'
            placeholder='Age'
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br />

          <input
            type='text'
            value={netWorth}
            className='form-input'
            placeholder='Net worth'
            onChange={(e) => {
              setNetWorth(e.target.value);
            }}
          />
          <br />

          <button type='submit'>Add User</button>
          <br />
          <br />

          {Object.keys(fullNameErr).map((key) => {
            return <p className='input-message'>{fullNameErr[key]}</p>;
          })}

          {Object.keys(jobTitleErr).map((key) => {
            return <p className='input-message'>{jobTitleErr[key]}</p>;
          })}

          {Object.keys(countryErr).map((key) => {
            return <p className='input-message'>{countryErr[key]}</p>;
          })}

          {Object.keys(ageErr).map((key) => {
            return <p className='input-message'>{ageErr[key]}</p>;
          })}

          {Object.keys(netWorthErr).map((key) => {
            return <p className='input-message'>{netWorthErr[key]}</p>;
          })}
        </form>
      </div>
    </div>
  );
}

export default FamousPeopleForm;
