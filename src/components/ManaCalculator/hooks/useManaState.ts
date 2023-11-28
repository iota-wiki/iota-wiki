import { createContext, useContext } from 'react';
import {
  FINAL_EPOCH,
  INITIAL_EPOCH,
  IOTA_DELEGATED,
  IOTA_HOLD,
  IOTA_STAKED,
  SHIMMER_DELEGATED,
  SHIMMER_HOLD,
  SHIMMER_STAKED,
} from '../constants';
import { CongestionType, NetworkType, UserType } from '../enums';
import { ManaCalculatorProps, ManaState, ValidatorProps } from '../types';
import {
  getNetworkCongestion,
  getNetworkGenerationPerSlot,
  getNetworkSupply,
  getStakedOrDelegated,
  toMicro,
} from '../utils';

export const ManaStateContext = createContext(null);

export function useManaState() {
  const { setState, state } = useContext<{
    setState: (state: ManaCalculatorProps) => void;
    state: ManaCalculatorProps;
  }>(ManaStateContext);

  return useGivenManaState(state, setState);
}

export function useGivenManaState(
  state: ManaCalculatorProps,
  setState: (state: ManaCalculatorProps) => void,
) {
  function handleDelete(id: number) {
    const validators = state.validators.filter((_, i) => i !== id);
    setState({ ...state, validators });
  }

  function handleStakeChange(value: string, id: number) {
    const stakedTokens = getValidInputValue(value, toMicro);
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          lockedStake: i === id ? stakedTokens : validator.lockedStake,
        };
      }),
    });
  }

  function handleDelegatedStakeChange(value: string, id: number) {
    const delegatedStake = getValidInputValue(value, toMicro);
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          delegatedStake: i === id ? delegatedStake : validator.delegatedStake,
        };
      }),
    });
  }

  function handlePFChange(value: string, id: number) {
    const performanceFactor = getValidInputValue(value);
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          performanceFactor:
            i === id ? performanceFactor : validator.performanceFactor,
        };
      }),
    });
  }

  function handleFCChange(value: string, id: number) {
    const fixedCost = getValidInputValue(value);
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          fixedCost: i === id ? fixedCost : validator.fixedCost,
        };
      }),
    });
  }

  function handleOwnStakeChange(value: string) {
    const stakedTokens = getValidInputValue(value, toMicro);
    setState({
      ...state,
      [getStakedOrDelegated(state.userType)]: stakedTokens,
    });
  }

  function handleValidatorChange(value: number) {
    setState({
      ...state,
      delegator: { ...state.delegator, validator: value },
    });
  }

  function handleCongestionChange(value: CongestionType) {
    setState({
      ...state,
      congestion: value,
    });
  }

  function handleOwnPFChange(value: string) {
    const performanceFactor = getValidInputValue(value);
    setState({
      ...state,
      validator: { ...state.validator, performanceFactor },
    });
  }

  function handleOwnFCChange(value: string) {
    const fixedCost = getValidInputValue(value);
    setState({
      ...state,
      validator: { ...state.validator, fixedCost },
    });
  }

  function handleAttractedNewDelegatedStakeChange(value: string) {
    const attractedNewDelegatedStake = getValidInputValue(value);
    setState({
      ...state,
      validator: { ...state.validator, attractedNewDelegatedStake },
    });
  }

  function handleInitialEpochChange(value: string) {
    const initialEpoch = getValidInputValue(value);
    setState({
      ...state,
      initialEpoch,
    });
  }

  function handleFinalEpochChange(value: string) {
    const finalEpoch = getValidInputValue(value);
    setState({
      ...state,
      finalEpoch,
    });
  }

  function handleNetworkChange(value: NetworkType) {
    setState({
      ...getDefaultParameters(value),
    });
  }

  function handleUserChange(value: UserType) {
    setState({
      ...state,
      userType: value,
    });
  }

  function handleAddValidator(value: ValidatorProps) {
    state.validators.push(value);
    setState({ ...state });
  }

  function handleOwnHoldChange(value: string) {
    const heldTokens = getValidInputValue(value, toMicro);
    setState({
      ...state,
      heldTokens,
    });
  }

  const congestionAmount = getNetworkCongestion(
    state.network,
    state.congestion,
  );
  const generationPerSlot = getNetworkGenerationPerSlot(state.network);
  const stakedOrDelegatedTokens = state[getStakedOrDelegated(state.userType)];

  const userOwned = state.heldTokens + stakedOrDelegatedTokens;
  const maxTotalSupply =
    userOwned +
    state.validators.reduce((a, b) => a + b.lockedStake, 0) +
    state.validators.reduce((a, b) => a + b.delegatedStake, 0);

  return {
    state: {
      ...state,
      congestionAmount,
      generationPerSlot,
      stakedOrDelegatedTokens,
    } as ManaState,
    maxTotalSupply,
    handleDelete,
    handleStakeChange,
    handleAddValidator,
    handleAttractedNewDelegatedStakeChange,
    handleCongestionChange,
    handleDelegatedStakeChange,
    handleFCChange,
    handleInitialEpochChange,
    handleNetworkChange,
    handleFinalEpochChange,
    handleOwnFCChange,
    handleOwnPFChange,
    handleUserChange,
    handleOwnStakeChange,
    handlePFChange,
    handleValidatorChange,
    handleOwnHoldChange,
  };
}

function getValidInputValue(
  num: string,
  transformNumber?: (number) => number,
): number {
  let value = inputValuetoNumber(num);

  if (transformNumber) {
    value = transformNumber(value);
  }

  const isInvalid = isNaN(value);

  if (isInvalid) {
    throw new Error('Invalid number');
  }

  return value;
}

function inputValuetoNumber(value: string) {
  return Number(Number(value).toString());
}

export function getDefaultParameters(
  network: NetworkType,
): ManaCalculatorProps {
  const networkParams = {
    [NetworkType.IOTA]: {
      stakedTokens: toMicro(IOTA_STAKED),
      delegatedTokens: toMicro(IOTA_DELEGATED),
      heldTokens: toMicro(IOTA_HOLD),
    },
    [NetworkType.SHIMMER]: {
      stakedTokens: toMicro(SHIMMER_STAKED),
      delegatedTokens: toMicro(SHIMMER_DELEGATED),
      heldTokens: toMicro(SHIMMER_HOLD),
    },
  };

  const finalNetworkParams = networkParams[network];
  const validators = getValidators(network);

  return {
    ...finalNetworkParams,
    initialEpoch: INITIAL_EPOCH,
    finalEpoch: FINAL_EPOCH,
    validators,
    userType: UserType.DELEGATOR,
    congestion: CongestionType.LOW,
    delegator: {
      validator: 0,
    },
    validator: {
      performanceFactor: 1.0,
      fixedCost: 0.0,
      shareOfYourStakeLocked: 1.0,
      attractedNewDelegatedStake:
        (finalNetworkParams.stakedTokens *
          validators.reduce((a, b) => a + b.delegatedStake, 0)) /
        validators.reduce((a, b) => a + b.lockedStake, 0),
      attractedDelegatedStakeFromOtherPools: 0,
    },
    network,
  } as ManaCalculatorProps;
}

export function getValidators(network: NetworkType): ValidatorProps[] {
  const supply = getNetworkSupply(network);

  const delegated = [1.5, 1, 1.5, 2.0];

  return delegated.flatMap((delegated) => {
    const stake = [1, 1, 0.25, 0.5, 0.75, 1.12, 1.5, 1.75];
    return stake.map((stake) => {
      return {
        lockedStake: (supply * stake) / 100,
        delegatedStake: (supply * delegated) / 100,
        performanceFactor: 1.0,
        fixedCost: 0.0,
      };
    });
  });
}
