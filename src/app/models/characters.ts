 import { raceOptions, classOptions, genderOptions } from './character-options';
import { cleanSession } from 'selenium-webdriver/safari';

export class Armor {
  name: string;
  attackBarrierBonus: number;

  constructor(name: string, attackBarrierBonus: number){
    this.name = name;
    this.attackBarrierBonus = attackBarrierBonus;
  }
}

export class Weapon {
  name: string;
  minDamage: number;
  maxDamage: number;

  constructor(name: string, minDamage: number, maxDamage: number){
    this.name = name;
    this.maxDamage = maxDamage;
    this.minDamage= minDamage;
  }
}

export enum characterSkills {
  attack = 'attack',
  sneak = 'sneak',
  persuade = 'persuade',
  intelligence = 'inteligence'
}

export enum fightOptions {
  attack = 'attack',
  specialAttack = 'special attack',
  none = 'none'
}

export const experienceToLevel = {
  1: 1000,
  2: 2000,
  3: 3000,
  4: 4000,
  5: 5000,
  6: 6000,
  7: 7000,
  8: 8000,
  9: 9000
}

export class baseCHaracter {
  name: string;
  maxHealth: number;
  currentHealth: number;
  isIncapacitated: boolean;
  barriers: {
    attack: number,
    sneak: number,
    persuade: number
  };
  skills: {
    attack: number,
    sneak: number,
    persuade: number,
    inteligence: number
  };
  equippedWeapon: Weapon;
  equippedArmor: Armor;

  constructor(name: string, health: number, skills = { attack: 0,sneak: 0, persuade: 0, inteligence: 0 }) {
    this.name = name;
    this.maxHealth = health;
    this.currentHealth = health;
    this.skills = skills;
    this.isIncapacitated = false;
    this.barriers = {
      attack: 10,
      sneak: 10,
      persuade: 10
    }
  }

  attack() {
    return Math.floor(Math.random() * 20) + 1 + this.skills.attack;
  }

  sneak() {
    return Math.floor(Math.random() * 20) + 1 + this.skills.sneak;
    
  }

  persuade() {
    return Math.floor(Math.random() * 20) + 1 + this.skills.persuade;
  }

  dealDemage() {
    return Math.floor(Math.random() * (this.equippedWeapon.maxDamage - this.equippedWeapon.minDamage + 1)) + this.equippedWeapon.minDamage;
  }
}