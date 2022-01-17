import React, { Fragment } from 'react';
import './Tile.css';
import Card from 'react-bootstrap/Card'
import { PersonFill } from 'react-bootstrap-icons';
import {LetterState} from "./services/interfaces";

type TileVariant = `tile-${'unknown' | 'wrong' | 'present' | 'right'}`

const stateVariantMap: Record<LetterState, TileVariant> = {
  [LetterState.UNKNOWN]: 'tile-unknown',
  [LetterState.WRONG]: 'tile-wrong',
  [LetterState.PRESENT]: 'tile-present',
  [LetterState.RIGHT]: 'tile-right',
}

export type TileProps = {
  letter: string;
  letterState: LetterState;
}

function Tile(props: TileProps) {
  return (
    <Card className={ "tile text-nowrap " + stateVariantMap[props.letterState] }>
      <Card.Body>
        <Card.Text>
          <div className="overlay">
            { props.letter.toString() == " " ?
              <Fragment>&nbsp;</Fragment> :
              props.letter.toString()
            }
          </div>
          <PersonFill className="person mb-1"/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tile;
