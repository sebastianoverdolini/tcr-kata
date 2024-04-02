export class Lift {
  constructor(_currentFloor)
  {
    this._currentFloor = _currentFloor
  }

  call = (floor) => {
    this._currentFloor = floor;
  };

  reach = (floor) => {
    this._currentFloor = floor;
  }

  run = () => {
    this._currentFloor = this._currentFloor
  }

  currentFloor = () => {
    return this._currentFloor
  }
}
