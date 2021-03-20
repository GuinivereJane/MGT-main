// Import Modules
import { MGT-mainActor } from "./actor/actor.js";
import { MGT-mainActorSheet } from "./actor/actor-sheet.js";
import { MGT-mainItem } from "./item/item.js";
import { MGT-mainItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.MGT-main = {
    MGT-mainActor,
    MGT-mainItem
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
  CONFIG.Actor.entityClass = MGT-mainActor;
  CONFIG.Item.entityClass = MGT-mainItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("MGT-main", MGT-mainActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("MGT-main", MGT-mainItemSheet, { makeDefault: true });

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