const character = {
    race: [
        {
            name: 'dwarf',
            subrace: ['mountain', 'hill']
        },
        {
            name: 'elf',
            subrace: ['high', 'wood', 'dark']
        },
        {
            name: 'halfling',
            subrace: ['stout', 'lightfoot']
        },
        {
            name: 'human'
        },
        {
            name: 'dragonborn',
            subrace: ['gold', 'silver', 'bronze', 'copper', 'brass', 'black', 'white', 'red', 'green', 'blue']
        },
        {
            name: 'gnome',
            subrace: ['rock', 'forest']
        },
        {
            name: 'half-elf'
        },
        {
            name: 'half-orc'
        },
        {
            name: 'tiefling'
        }
    ],
    class: ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorceror', 'warlock', 'wizard'],
    background: ['an acolyte', 'a charlatan', 'a criminal', 'an entertainer', 'a folk hero', 'a guild artisan', 'a hermit', 'a noble', 'an outlander', 'a sage', 'a sailor', 'a soldier', 'an urchin'],

    generateRandomRace() {
        let raceIndex = 0;
        let subraceIndex = 0;
        let selection = '';

        raceIndex = Math.floor(Math.random() * this.race.length);
        selection += this.race[raceIndex].name;

        if (this.race[raceIndex].subrace) {
            subraceIndex = Math.floor(Math.random() * this.race[raceIndex].subrace.length)
            selection = this.race[raceIndex].subrace[subraceIndex] + ' ' + selection;
        }
        
        return selection;
    },
    generateRandomClass() {
        let classIndex = 0;
        let selection = '';
        classIndex = Math.floor(Math.random() * this.class.length);
        selection += this.class[classIndex];
        return selection;
    },
    generateRandomBackground() {
        let backgroundIndex = 0;
        let selection = '';
        backgroundIndex = Math.floor(Math.random() * this.background.length);
        selection += this.background[backgroundIndex];
        return selection;
    }
};

console.log(`You are a ${character.generateRandomRace()} ${character.generateRandomClass()} with a background as ${character.generateRandomBackground()}.`);