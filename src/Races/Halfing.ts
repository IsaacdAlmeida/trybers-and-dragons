import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _raceInstance = 0;

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}

export default Halfling;