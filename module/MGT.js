// Import Modules
import { MGTActor } from "./actor/actor.js";
import { MGTActorSheet } from "./actor/actor-sheet.js";
import { MGTItem } from "./item/item.js";
import { MGTItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.MGT = {
    MGTActor,
    MGTItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = MGTActor;
  CONFIG.Item.entityClass = MGTItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("MGT", MGTActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("MGT", MGTItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});