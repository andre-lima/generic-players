import { Attack } from "../interfaces/interfaces";

export function fireBall(
  usageDepletion: number = 70,
  damage: number = 30
): void {
  if (this.specialCharge < usageDepletion) return;

  const target = this.myParty.enemies;

  const specialAttack: Attack = {
    damage: damage,
    damageType: "fire"
  };

  this.specialCharge -= usageDepletion;

  this.attack(target, specialAttack);
}
