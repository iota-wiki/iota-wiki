import React from 'react';
import { useManaState } from '../hooks/useManaState';
import Select from 'react-select';
import { CongestionType } from '../enums';

export function OtherParametersSection() {
  const {
    state,
    handleCongestionChange,
    handleInitialEpochChange,
    handleFinalEpochChange,
  } = useManaState();
  return (
    <div className='grouped-form'>
      <p className='align-center'>Other parameters</p>
      <label className='inlined-label'>Congestion</label>
      <Select
        className='compact inlined'
        classNamePrefix='react-select'
        onChange={(e) => {
          handleCongestionChange(e.value);
        }}
        defaultValue={{
          value: CongestionType.LOW,
          label: 'Low Congestion',
        }}
        options={[
          { value: CongestionType.LOW, label: 'Low Congestion' },
          { value: CongestionType.MEDIUM, label: 'Stable Price' },
          { value: CongestionType.HIGH, label: 'Extreme Congestion' },
        ]}
      />
      <br />
      <label className='inlined-label'>Initial epoch</label>
      <input
        className='compact inlined'
        value={state.initialEpoch}
        onChange={(e) => handleInitialEpochChange(Number(e.target.value))}
      ></input>
      <br />
      <label className='inlined-label'>Final epoch</label>
      <input
        className='compact inlined'
        value={state.finalEpoch}
        onChange={(e) => handleFinalEpochChange(Number(e.target.value))}
      ></input>
    </div>
  );
}
