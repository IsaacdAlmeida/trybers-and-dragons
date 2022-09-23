import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _fighterOne: Fighter;
  private _fighterTwo: Fighter;

  constructor(fighterOne: Fighter, fighterTwo: Fighter) {
    super(fighterOne);
    this._fighterOne = fighterOne;
    this._fighterTwo = fighterTwo;
  }

  public fight(): number {
    while (this._fighterOne.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
      this._fighterOne.attack(this._fighterTwo);
      this._fighterTwo.attack(this._fighterOne);
    }

    // console.log(this._fighterOne.lifePoints);
    // console.log(this._fighterTwo.lifePoints);
    
    return this._fighterOne.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;