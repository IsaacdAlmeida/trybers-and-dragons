import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighterOne: Fighter;
  private _monsters: SimpleFighter[];

  constructor(fighterOne: Fighter, monsters: SimpleFighter[]) {
    super(fighterOne);
    this._fighterOne = fighterOne;
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      while (this._fighterOne.lifePoints > 0 && monster.lifePoints > 0) {
        this._fighterOne.attack(monster);
        monster.attack(this._fighterOne);
      }
    });

    return this._fighterOne.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;