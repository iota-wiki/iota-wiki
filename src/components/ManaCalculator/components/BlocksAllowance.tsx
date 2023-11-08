import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Unit } from '../hooks';
import { EpochReward } from '../types';
import { chartTooltip } from './CharTooltip';

export function BlocksAllowance({
  results,
  unit,
}: {
  results: EpochReward[];
  unit: Unit;
}) {
  return (
    <>
      <h3>Blocks Allowance</h3>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart data={results} margin={{ top: 10 }}>
          <defs>
            <linearGradient id='totalTps' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#7caae6' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#7caae6' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='epoch'
            height={50}
            label={{ value: 'Epochs', position: 'insideBottom' }}
          />
          <YAxis
            width={100}
            label={{ value: 'Blocks', angle: -90, position: 'insideLeft' }}
            color='rgb(169, 184, 214)'
            unit={unit}
          />
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='rgb(255, 255, 255, 0.15)'
          />
          <Tooltip content={chartTooltip('Epoch', 'Blocks', unit)} />
          <Area
            type='monotone'
            dataKey='totalTps'
            stroke='#7caae6'
            fillOpacity={1}
            fill='url(#totalTps)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
