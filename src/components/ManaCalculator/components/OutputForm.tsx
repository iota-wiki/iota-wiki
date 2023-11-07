import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro } from '../utils';
import humanizeDuration from 'humanize-duration';

export function OutputForm() {
  const { state } = useManaState();
  const {
    generatedRewards,
    passiveRewards,
    totalBPS,
    msToTransaction,
    passiveMsToTransaction,
  } = useResults(state);

  return (
    <div className='table'>
      <div className='row '>
        <div className='col col--6'>Mana generation (by holding)</div>
        <div className='col col--6 align-right'>
          {fromMicro(passiveRewards)}
        </div>
      </div>
      <div className='row '>
        <div className='col col--6'>Mana rewards</div>
        <div className='col col--6 align-right'>
          {fromMicro(generatedRewards)}
        </div>
      </div>
      <div className='row '>
        <div className='col col--6'>Total BPS granted with</div>
        <div className='col col--6 align-right'>{totalBPS}</div>
      </div>
      <div className='row '>
        <div className='col col--6'>
          Time it takes to accumulate enough mana for a standard transaction...
        </div>
      </div>
      <div className='row '>
        <div className='col col--6'>...as a delegator/validator</div>
        <div className='col col--6 align-right'>
          {humanizeDuration(msToTransaction)}
        </div>
      </div>
      <div className='row '>
        <div className='col col--6'>...as a holder</div>
        <div className='col col--6 align-right'>
          {humanizeDuration(passiveMsToTransaction)}
        </div>
      </div>
    </div>
  );
}
