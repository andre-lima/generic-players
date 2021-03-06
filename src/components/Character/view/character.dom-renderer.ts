import { characterTemplate, controlsTemplate } from "./character.template";
import { Character } from "../Character";
import { VisualEffectsController as VE } from "../../VisualEffects/VisualEffects";

export class RenderCharacter_DOM {
  private parentElement: Element;
  private characterElement: Element;
  private controlsElement: Element;
  private characterImage: string;
  private element: Element;
  private healthBarElement: Element;
  private specialBarElement: Element;
  private attackButtonElement: Element;
  private specialButtonElements: Element[];
  private chargeButtonElement: Element;
  public character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  public renderCharacter(parentElement?: Element): void {
    this.parentElement = parentElement || this.parentElement;

    const wrapper = document.createElement("div");
    this.characterElement = document.createElement("div");
    this.controlsElement = document.createElement("div");

    this.characterElement.innerHTML = characterTemplate({
      characterName: this.character.name.toUpperCase(),
      characterHealth: this.character.health,
      maxHealth: this.character.maxHealth,
      specialCharge: this.character.specialCharge,
      maxSpecial: this.character.maxSpecial,
      level: this.character.level,
      xp: this.character.xp,
      inventory: this.character.inventory
    });

    this.controlsElement.innerHTML = controlsTemplate({
      hasSpecial: !!this.character.specialPowers?.length,
      specials: this.character.specialPowers
    });

    this.attackButtonElement = this.controlsElement.getElementsByClassName(
      "attackButton"
    )[0];

    this.attackButtonElement?.addEventListener("click", () =>
      this.character.attack()
    );

    if (!!this.character.specialPowers?.length) {
      this.specialButtonElements = [
        ...this.controlsElement?.getElementsByClassName("specialButton")
      ];
      this.chargeButtonElement = this.controlsElement?.getElementsByClassName(
        "chargeSpecialButton"
      )[0];

      this.specialButtonElements?.forEach((button, index) => {
        button.addEventListener("click", () =>
          this.character.useSpecial(index)
        );
      });

      this.chargeButtonElement?.addEventListener("click", () =>
        this.character.chargeSpecial(20)
      );
    }
    wrapper.append(this.characterElement);
    wrapper.append(this.controlsElement);
    this.parentElement.append(wrapper);
  }

  public updateParameters() {
    this.characterElement.innerHTML = characterTemplate({
      characterName: this.character.name.toUpperCase(),
      characterHealth: this.character.health,
      maxHealth: this.character.maxHealth,
      hasSpecial: !!this.character.specialPowers,
      specialCharge: this.character.specialCharge,
      maxSpecial: this.character.maxSpecial,
      level: this.character.level,
      xp: this.character.xp,
      inventory: this.character.inventory
    });
  }

  public renderPostEffects(occurence: string, delay: number = 0) {
    VE.showEffect(occurence, delay);
  }
}
