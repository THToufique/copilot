function calculateDamage(attacker, defender) {
    // Basic damage calculation formula
    let baseDamage = attacker.attack - defender.defense;

    // Ensure damage is at least 1
    if (baseDamage < 1) {
        baseDamage = 1;
    }

    // Apply any skill modifiers (for example, critical hits)
    if (Math.random() < attacker.criticalChance) {
        baseDamage *= 2; // Critical hit doubles the damage
        console.log("Critical hit!");
    }

    return baseDamage;
}

function useSkill(attacker, defender, skill) {
    console.log(`${attacker.name} uses ${skill.name} on ${defender.name}!`);

    // Calculate damage based on the skill's power
    let damage = calculateDamage(attacker, defender) * skill.power;

    // Apply damage to the defender
    defender.health -= damage;

    console.log(`${defender.name} takes ${damage} damage! Remaining health: ${defender.health}`);

    // Check if the defender is defeated
    if (defender.health <= 0) {
        console.log(`${defender.name} has been defeated!`);
    }
}

// Example usage:
const attacker = {
    name: "Hero",
    attack: 50,
    criticalChance: 0.1
};

const defender = {
    name: "Monster",
    defense: 30,
    health: 100
};

const fireball = {
    name: "Fireball",
    power: 1.5
};

useSkill(attacker, defender, fireball);