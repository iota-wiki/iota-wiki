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

  function handleStakeChange(value: number, id: number) {
    const newStateWithValidators = {
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          lockedStake: i === id ? value : validator.lockedStake,
        };
      }),
    };
    setState({
      ...newStateWithValidators,
      ...getDerivedRoleValues(newStateWithValidators, state.stakedTokens),
    });
  }

  function handleDelegatedStakeChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          delegatedStake: i === id ? value : validator.delegatedStake,
        };
      }),
    });
  }

  function handlePFChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          performanceFactor: i === id ? value : validator.performanceFactor,
        };
      }),
    });
  }

  function handleFCChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          fixedCost: i === id ? value : validator.fixedCost,
        };
      }),
    });
  }

  function handleOwnStakeChange(stakedTokens: number) {
    setState({
      ...state,
      [getStakedOrDelegated(state.userType)]: stakedTokens,
      ...getDerivedRoleValues(state, stakedTokens),
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

  function handleOwnPFChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, performanceFactor: value },
    });
  }

  function handleOwnFCChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, fixedCost: value },
    });
  }

  function handleAttractedNewDelegatedStakeChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, attractedNewDelegatedStake: value },
    });
  }

  function handleInitialEpochChange(value: number) {
    setState({
      ...state,
      initialEpoch: value,
    });
  }

  function handleFinalEpochChange(value: number) {
    setState({
      ...state,
      finalEpoch: value,
    });
  }

  function handleNetworkChange(value: NetworkType) {
    setState({
      ...getDefaultParameters(value),
    });
  }

  function handleUserChange(newUserType: UserType) {
    const validators = [...state.validators];

    if (newUserType === UserType.VALIDATOR) {
      validators[0].excluded = true;
    } else {
      validators[0].excluded = false;
    }

    const newState = {
      ...state,
      userType: newUserType,
      validators,
      [getStakedOrDelegated(newUserType)]: state.heldTokens,
    };

    setState({
      ...newState,
      ...getDerivedRoleValues(newState, newState.heldTokens, newUserType),
    });
  }

  function handleAddValidator(value: ValidatorProps) {
    state.validators.push(value);
    setState({ ...state });
  }

  function handleOwnHoldChange(value: number) {
    const newState = {
      ...state,
      heldTokens: value,
      [getStakedOrDelegated(state.userType)]: value,
    };

    setState({ ...newState, ...getDerivedRoleValues(newState, value) });
  }

  const congestionAmount = getNetworkCongestion(
    state.network,
    state.congestion,
  );
  const generationPerSlot = getNetworkGenerationPerSlot(state.network);
  const stakedOrDelegatedTokens = state[getStakedOrDelegated(state.userType)];

  return {
    state: {
      ...state,
      congestionAmount,
      generationPerSlot,
      stakedOrDelegatedTokens,
    } as ManaState,
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

function getDerivedRoleValues(
  state: ManaCalculatorProps,
  stakedTokens: number,
  userType: UserType = state.userType,
) {
  return userType === UserType.VALIDATOR
    ? {
        validator: {
          ...state.validator,
          attractedNewDelegatedStake:
            (stakedTokens *
              state.validators.reduce((a, b) => a + b.delegatedStake, 0)) /
            state.validators.reduce((a, b) => a + b.lockedStake, 0),
        },
      }
    : {};
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
