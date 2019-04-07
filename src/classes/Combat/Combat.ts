import { Player } from "../Player/Player";
import { Attack } from "../interfaces/interfaces";
import { Party } from "../Party/Party";

export class Combat {

  private heroesParty: Party;
  private enemyParty: Party;

  constructor(yourParty: Party, enemyParty: Party) {
    this.heroesParty = yourParty;
    this.enemyParty = enemyParty;

    this.heroesParty.setEnemyParties(this.enemyParty.members);
    this.enemyParty.setEnemyParties(this.heroesParty.members);
  }

  public placePlayers(id: string) {
    const gameCanvas = document.getElementById(id);
    const enemiesSpot = document.createElement('div');
    const myPartySpot = document.createElement('div');

    gameCanvas.appendChild(enemiesSpot);
    gameCanvas.appendChild(myPartySpot);

    this.enemyParty.placeMembers(enemiesSpot);
    this.heroesParty.placeMembers(myPartySpot);
  }

}