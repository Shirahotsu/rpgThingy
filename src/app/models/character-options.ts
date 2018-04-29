export enum raceOptions{
  human = 'Human',
  dwarf = 'Dwarf',
  elf = 'Elf'
}

export enum classOptions{
  warior = 'Warior',
  ranger = 'Ranger',
  rogue = 'Rogue',
  priest = 'Priest'
}

export enum genderOptions{
  male = 'Male',
  female = 'Female'
}

export const characterOptions = {
  races :[
    raceOptions.human,
    raceOptions.elf,
    raceOptions.dwarf
  ],
  classes:[
    classOptions.warior,
    classOptions.ranger,
    classOptions.rogue,
    classOptions.priest
  ],
  genders: [
    genderOptions.female,
    genderOptions.male
  ]
}