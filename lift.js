export class Lift {
  _currentFloor;
  call = (floor) => {
    this._currentFloor = floor;
  };

  reach = (floor) => {
    this._currentFloor = floor;
  }

  run = () => {
    
  }

  currentFloor = () => {
    return this._currentFloor
  }
}
