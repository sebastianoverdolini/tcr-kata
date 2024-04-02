export class Lift {
  _currentFloor;
  call = (floor) => {
    this._currentFloor = floor;
  };

  reach = (floor) => {
    this._currentFloor = floor;
  }

  currentFloor = () => {
    return this._currentFloor
  }
}
