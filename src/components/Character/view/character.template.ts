import handlebars from "handlebars";

export function characterTemplate(compilingData: any) {
  var source = `<div class='character'>
      <div id='js_characterParameters' class='characterParameters'>
        <div class='characterName'>{{characterName}} lvl{{level}} xp:{{xp}}</div>
        <div class='characterHealth'>{{characterHealth}} / {{maxHealth}}</div>
        {{#if hasSpecial}}<div class='characterSpecial'>{{specialCharge}} / {{maxSpecial}}</div>{{/if}}
      </div>
      <div class='controls'>
        <button class='attackButton'>Attack</button>
        {{#if hasSpecial}}<button class='specialButton'>Special!</button>
        <button class='chargeSpecialButton'>Charge</button>{{/if}}
      </div>
    </div>`;

  var template = handlebars.compile(source);

  return template(compilingData);
}
