export function heal(
  usageDepletion: number = 40,
  healingAmount: number = 50
): void {
  if (this.specialCharge < usageDepletion) return;

  this.specialCharge -= usageDepletion;

  this.heal(healingAmount);
}
