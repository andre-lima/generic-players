import { Player } from "../Player";
import { Attack } from "../../interfaces/interfaces";
import { normalSword } from "../../Inventory/items/sword.item";
import { normalArmor } from "../../Inventory/items/armor.item";
import { powerAttack } from "../../Specials/powerAttack.special";

export class Orc extends Player {

  private powerAttack: Attack;

  constructor(
    image: string,
    name: string,
    type: string,
    health: number,
    special: number,
    leader: boolean = false
  ) {
    super(image, name, type, health, special, leader);

    this.init();
  }

  protected init() {
    super.init();

    this.inventory.weapon = normalSword;
    
    this.powerAttack = powerAttack(this.inventory.weapon, 2);
  }

  public specialAttack(): Attack {
    return this.powerAttack;
  }
}