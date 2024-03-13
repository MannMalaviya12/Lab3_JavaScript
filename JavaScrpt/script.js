function createHamburger(options) {
    const defaults = {
      bun: 'sesame seed',
      vegetables: ['lettuce', 'tomato'],
      cheeses: ['white'],
      sauces: ['mayo', 'ketchup'],
      patty: 'Vegan',
      pattyCount: 1,
      extras: ['pickles', 'hot peppers'],
    };
  
    const settings = { ...defaults, ...options };
  
    const hamburger = {
      bun: settings.bun,
      vegetables: settings.vegetables,
      cheeses: settings.cheeses,
      sauces: settings.sauces,
      patty: settings.patty,
      pattyCount: settings.pattyCount,
      extras: settings.extras,
  
      describe() {
        let description = `A ${this.pattyCount}x ${this.patty} patty hamburger on a ${this.bun} bun with `;
        if (this.vegetables.length) description += `${this.vegetables.join(", ")} vegetables, `;
        if (this.cheeses.length) description += `${this.cheeses.join(", ")} cheese, `;
        if (this.sauces.length) description += `${this.sauces.join(", ")} sauce, `;
        if (this.extras.length) description += `and ${this.extras.join(", ")} `;
        description = description.trim();
        description += ` that makes it uniquely delicious.`;
        return description;
      }
    };
  
    return hamburger;
  }
  
const myHamburger = createHamburger({
    bun: 'whole wheat',
    vegetables: ['lettuce', 'onion'],
    cheeses: ['jalapeno'],
    sauces: ['mustard', 'bbq'],
    patty: 'Tandoori',
    pattyCount: 2,
    extras: ['jalapenos', 'bacon']
});
  
console.log(myHamburger.describe());
