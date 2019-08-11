import React, { Component } from 'react';
import {
  Button,
} from 'reactstrap';
import Board from '../Board/Board';
import Player from '../Player/Player';
import Notes from '../Notes/Notes';
import './CreateHandHistory.scss';
import { PreflopOrder, PostflopOrder } from '../../mapping.js';

class CreateHandHistory extends Component {
  state = {
    villains: 1,
    positions: [],
    activePlayerIdx: 0,
    action_open: true,
    pot_size: 0
  }

  incrementVillains() {
    if (this.state.villains === 8) return;
    this.setState({ villains: this.state.villains + 1 })
  }

  decrementVillains() {
    if (this.state.villains === 1) return;
    this.setState({ villains: this.state.villains - 1 })
  }

  addPosition(pos) {
    let nextPositions = this.state.positions;
    nextPositions.push(pos);
    nextPositions.sort((a,b) => PreflopOrder[a] - PreflopOrder[b]);
    this.setState({ positions: nextPositions });
  }

  setPostflopOrder() {
    let nextPositions = this.state.positions;
    nextPositions.sort((a,b) => PostflopOrder[a] - PostflopOrder[b]);
  }

  render() {
    let { villains } = this.state;
    let villainPlaceholders = Array(villains).fill("active");

    return (
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-12 text-center">
            <Button
              onClick={this.incrementVillains.bind(this)}
              className="btn btn-success mr-2 top-edit-btn"
            >
              +
            </Button>
            <span className="villain-adjust-label">Villains</span>
            <Button
              className="btn btn-danger ml-2 top-edit-btn"
              onClick={this.decrementVillains.bind(this)}
            >
              -
            </Button>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-3 text-center">
            <h4 className="player-title">
              Hero
            </h4>
            <Player
              player_type="Hero"
              addPosition={this.addPosition.bind(this)}
            />
          </div>
          <div className="col-6">
            <Board/>
            <Notes/>
          </div>
          <div className="col-3 text-center">
            <h4 className="player-title">
              Villains <span className="villain-count">{villains}</span>
            </h4>
            {villainPlaceholders.map((vil, i) => {
              return (
                <Player
                  player_type="Villain"
                  addPosition={this.addPosition.bind(this)}
                  key={`villain${i}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateHandHistory;
