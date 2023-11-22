import React from 'react';
import { useManaState } from '../hooks';
import Select from 'react-select';
import { UserType } from '../enums';
import { fromMicro, toMicro } from '../utils';
import { ValidatorSettings } from './ValidatorSettings';
import { DelegatorSettings } from './DelegatorSettings';

export function RoleSection() {
  const { state, handleUserChange, handleOwnHoldChange } = useManaState();
  return (
    <div className='mana_calculator__card'>
      <h4>Role configuration</h4>
      <label className='inlined-label'>Your Role</label>
      <Select
        className='mana_calculator__compact inlined'
        defaultValue={{ value: UserType.DELEGATOR, label: `Delegator` }}
        onChange={(e) => {
          handleUserChange(e.value);
        }}
        classNamePrefix='react-select'
        options={[
          { value: UserType.DELEGATOR, label: `Delegator` },
          { value: UserType.VALIDATOR, label: `Validator` },
          { value: UserType.HOLDER, label: `Holder` },
        ]}
      />
      <br />
      <label className='inlined-label'>Owned amount ({state.network})</label>
      <input
        className='mana_calculator__compact inlined'
        value={fromMicro(state.heldTokens)}
        onChange={(e) => handleOwnHoldChange(toMicro(Number(e.target.value)))}
      ></input>
      <br />
      {state.userType === UserType.VALIDATOR ? (
        <ValidatorSettings />
      ) : state.userType === UserType.DELEGATOR ? (
        <DelegatorSettings />
      ) : (
        <></>
      )}
    </div>
  );
}
