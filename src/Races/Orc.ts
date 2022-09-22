import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _raceInstance = 0;

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}

export default Orc;