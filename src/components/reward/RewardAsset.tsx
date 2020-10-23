import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import Config from 'config';
import { numberWithDecimals } from 'utils';

interface OwnProps {
  earned: number;
  onHarvest: () => void;
}

type Props = OwnProps;

export const RewardAsset = ({ earned, onHarvest }: Props) => {
  return (
    <Card className='card card-h medium transparent'>
      <CardContent>
        <div className='section'>
          <div className='center-h'>
            <h2 className='text-blue'>{Config.Token.symbol}</h2>
          </div>
          <div className='circle'>
            <img className="logo-image" src={Config.Token.image} alt={Config.Token.name} />
          </div>
          <div className='center-h boxsize mt-50'>
            <span className='text-number'>
              {numberWithDecimals(earned, Config.Token.decimals, Config.Utils.decimals)}
            </span>
          </div>
          <div className='center-h'>
            <span className='text-small'>{`Estimated ${Config.Token.symbol} earned`}</span>
          </div>
        </div>
        <div className='section'>
          <div className='mt-20' />
          <div className='center-h'>
            <Button
              variant='contained'
              className='btn-primary'
              onClick={onHarvest}
              disabled={earned <= 0}
            >
              Harvest
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RewardAsset;

