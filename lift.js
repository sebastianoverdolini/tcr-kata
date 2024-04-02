export class Lift {
  currentFloor;
  call = (floor) => {
    this.currentFloor = floor;
  };
}
