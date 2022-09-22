import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstance = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType; 
  }

  public static createdArchetypeInstances(): number {
    this._archetypeInstance += 1;
    return this._archetypeInstance;
  }
}

export default Warrior;