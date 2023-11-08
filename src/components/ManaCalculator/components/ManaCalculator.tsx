import React, { useState } from 'react';
import '../styles.css';
import { NetworkType } from '../enums';
import {
  getDefaultParameters,
  ManaStateContext,
  useResultsPerEpoch,
  useResultsWithUnit,
} from '../hooks';
import {
  OutputForm,
  NetworkSection,
  AdvancedSettingsValidator,
  RoleSection,
  OtherParametersSection,
  ManaAccumulation,
  BlocksAllowance,
} from './';

export function ManaCalculator() {
  const [state, setState] = useState(getDefaultParameters(NetworkType.IOTA));
  const results = useResultsPerEpoch(state);
  const { data, manaUnit, blocksUnit } = useResultsWithUnit(results);
  return (
    <ManaStateContext.Provider value={{ state, setState }}>
      <h3>Configuration</h3>
      <NetworkSection />
      <RoleSection />
      <OtherParametersSection />
      <br />
      <h3>Results</h3>
      <OutputForm />
      <ManaAccumulation results={data} unit={manaUnit} />
      <BlocksAllowance results={data} unit={blocksUnit} />
    </ManaStateContext.Provider>
  );
}
