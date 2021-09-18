//Data Object
const information = {
    timeToKill: 0,
    damagePerSecond: 0,
    totalTime: 0,
    currentMagazineSize: 0,
    currentEnemyHealth: 0
};

for (const field of document.getElementsByClassName("timeToKillInput")) {
    Object.defineProperty(
        information,
        field.name,
        {
            get() {
                return parseFloat(field.value || 0);
            },
            set(value) {
                value = parseFloat(value || 0);
                
                if (value > 0) {
                    field.value = value;
                }
                else {
                    field.value = 0;
                }

                return value;
            }
        }
    );
}

console.log("Initialized");

    /*
function information(damage, fireRate, magazineSize, reloadSpeed, enemyHealth) {
    this.damage = damage.value;
    this.fireRate = fireRate.value;
    this.magazineSize = magazineSize.value;
    this.reloadSpeed = reloadSpeed.value;
    this.enemyHealth = enemyHealth.value;
    
    this.currentMagazineSize = this.magazineSize;
    this.timeToKill = null;
    this.damagePerSecond = null;
    this.totalTime = 0;
    console.log("Initialized");
    }
    */

// Main calculation
function TimeToKill(stats) {
    while (true) {
        // console.log(stats.totalTime);
        // console.log('Ammo in current mag: ' + stats.currentMagazineSize);
        stats.currentMagazineSize--;

        stats.currentEnemyHealth = stats.currentEnemyHealth - stats.damage;
        if (stats.currentEnemyHealth <= 0) break;
        
        stats.totalTime = stats.totalTime + (stats.fireRate / 60); // i don't know matf
        if (stats.currentMagazineSize <= 0) {
            stats.currentMagazineSize = stats.magazineSize;
            stats.totalTime = stats.totalTime + stats.reloadSpeed;
            console.log("Reloading!");
        } 
    }

    return stats.totalTime;
}

// Calculation update
function Update() {
    console.log("wtf");
    const [damage, fireRate, magazineSize, reloadSpeed, enemyHealth] = document.getElementsByClassName("timeToKillInput");
    const timeToKill = document.getElementById("timeToKillResult");

    information.damage = damage.value;
    information.fireRate = fireRate.value;
    information.magazineSize = magazineSize.value;
    information.reloadSpeed = reloadSpeed.value;
    information.enemyHealth = enemyHealth.value;

    information.currentEnemyHealth = information.enemyHealth;
    information.currentMagazineSize = information.magazineSize;

    if (information.damage && information.fireRate && information.magazineSize && information.reloadSpeed && information.enemyHealth) {
        console.log("Updated!");
        totalTime = TimeToKill(information);
        timeToKill.value = `${Math.fround(information.totalTime)} seconds.`;
        information.totalTime = 0;
    }
}