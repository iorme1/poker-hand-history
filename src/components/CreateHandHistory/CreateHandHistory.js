import React, { Component } from 'react';
import {
  Button,
} from 'reactstrap';
import Board from '../Board/Board';
import Player from '../Player/Player';
import Notes from '../Notes/Notes';
import './CreateHandHistory.scss';
import { PreflopOrder } from '../../mapping.js';


class CreateHandHistory extends Component {
  state = {
    villains: 1,
    positions: [],
    screen_shot_view: false
  }

  incrementVillains() {
    if (this.state.villains === 8) return;
    this.setState({ villains: this.state.villains + 1 })
  }

  decrementVillains() {
    if (this.state.villains === 1) return;
    this.setState({ villains: this.state.villains - 1 })
  }

  addPosition(newPos, lastPos) {
    let nextPositions = [...this.state.positions]
      .filter(pos => pos !== lastPos);
    nextPositions.push(newPos);
    nextPositions.sort((a,b) => PreflopOrder[a] - PreflopOrder[b]);

    this.setState({ positions: nextPositions });
  }

  screenShotView() {
    this.setState({ screen_shot_view: !this.state.screen_shot_view })
  }

  render() {
    let { villains } = this.state;
    let villainPlaceholders = Array(villains).fill("active");
    let display = this.state.screen_shot_view ? "hide" : "col-6 text-right";

    return (
      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <div className="col-6 text-left">
            <i
              className="fa fa-camera icon"
              onClick={this.screenShotView.bind(this)}
            >
            </i>
          </div>
          <div className={display}>
            <span className="villain-adjust-label mr-2">Villains</span>
            <Button
              onClick={this.incrementVillains.bind(this)}
              className="btn btn-success mr-2 top-edit-btn"
            >
              +
            </Button>
            <Button
              className="btn btn-danger top-edit-btn"
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
              positionsTaken={new Set([...this.state.positions])}
              hideEditing={this.state.screen_shot_view}
            />
          </div>
          <div className="col-6">
            <Board/>
            <Notes
              hideEditing={this.state.screen_shot_view}
            />
          </div>
          <div className="col-3 text-center">
            <h4 className="player-title">
              Villains
            </h4>
            {villainPlaceholders.map((vil, i) => {
              return (
                <Player
                  player_type="Villain"
                  addPosition={this.addPosition.bind(this)}
                  key={`villain${i}`}
                  positionsTaken={new Set([...this.state.positions])}
                  hideEditing={this.state.screen_shot_view}
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
