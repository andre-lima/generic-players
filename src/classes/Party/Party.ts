import { sample, remove, filter } from "lodash";
import { Player } from "../Player/Player";

export class Party {
  private partyMembers: Player[];
  private enemyMembers: Player[];

  constructor(members: Player[]) {
    this.partyMembers = members;

    this.partyMembers.forEach(member => {
      member.party = this;
    });
  }

  public setEnemyParties(members: Player[]) {
    this.enemyMembers = members;
  }

  getRandomMember(): Player {
    return sample(this.members);
  }

  getRandomEnemy(): Player {
    console.log(sample(filter(this.enemyMembers, member => !member.isDead)));
    return sample(filter(this.enemyMembers, member => !member.isDead));
  }

  public get members(): Player[] {
    return this.partyMembers;
  }

  public placeMembers(element: Element) {
    // Putting leaders on the middle of the party
    const leaders = remove(this.members, member => member.isLeader);
    this.members.splice(Math.floor(this.members.length / 2), 0, ...leaders);

    this.members.forEach(member => {
      member.renderPlayer(element);
    });
  }

  public update() {
    this.members.forEach(member => {
      member.update();
    });
  }
}
