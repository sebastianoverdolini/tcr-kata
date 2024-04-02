export class Lift {
  _currentFloor;
  call = (floor) => {
    this._currentFloor = floor;
  };
}
