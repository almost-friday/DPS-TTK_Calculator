//Data Object
const information = {
    timeToKill: null,
    damagePerSecond: null,
    totalTime: 0
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
                    console.log("test");
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

information.currentMagazineSize = information.magazineSize;

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
        //stats.currentMagazineSize--;
        console.log('Ammo in current mag: ' + stats.currentMagazineSize);
        stats.currentMagazineSize -= 1;
        console.log('Ammo in current mag: ' + stats.currentMagazineSize);

        stats.enemyHealth -= stats.damage;
        console.log("Bang!");
        if (stats.enemyHealth <= 0) break;
        
        stats.totalTime += stats.fireRate.value;
        if (stats.currentMagazineSize <= 0) {
            stats.currentMagazineSize = stats.magazineSize;
            stats.totalTime += stats.reloadSpeed;
            console.log("Reloading!");
        } 
    }
    console.log(stats.currentMagazineSize);
    console.log(stats.totalTime);

    return stats.totalTime;
}



// Calculation update
function Update() {
    const [damage, fireRate, magazineSize, reloadSpeed, enemyHealth] = document.getElementsByClassName("timeToKillInput");
    const timeToKill = document.getElementById("timeToKillResult");

    information.damage = damage.value;
    information.fireRate = fireRate.value;
    information.magazineSize = magazineSize.value;
    information.reloadSpeed = reloadSpeed.value;
    information.enemyHealth = enemyHealth.value;

    if (information.damage && information.fireRate && information.magazineSize && information.reloadSpeed && information.enemyHealth) {
        console.log("Updated!");
        totalTime = TimeToKill(information);
        timeToKill.value = totalTime;
    }
}