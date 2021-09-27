//Data Object
const information = {
    timeToKill: null,
    damagePerSecond: null
};

// Populates information with several important properties directly from the document.
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

// \/ THIS DOESN'T WORK!! it gets assigned before anything is loaded
/*  // declaring new property in information and assigning to it
information.currentMagazineSize = Math.ceil(information.magazineSize); */

console.log("Initialized");

// Main calculation
function TimeToKill(stats) {
    let totalTime = 0;
    stats.currentMagazineSize = stats.magazineSize;

    //Checking for common errors
    if (stats.magazineSize < 1) return -1;
    if (stats.damage < 1) return -2;

    damagePerSecond = stats.damage * stats.fireRate;

    while (true) {
        stats.currentMagazineSize -= 1;
        console.log('Ammo in current mag: ' + stats.currentMagazineSize);

        stats.enemyHealth -= stats.damage;
        if (stats.enemyHealth <= 0) break;
        
        totalTime += stats.fireRate;

        //Reload if magazine depleted
        if (stats.currentMagazineSize <= 0) {            
            console.log("Reloading!");
            stats.currentMagazineSize = stats.magazineSize;
            totalTime += stats.reloadSpeed;
        } 
    }
    console.log('Total time elapsed: ' + totalTime);

    stats.timeToKill = totalTime;
    return 0;
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

        totalTime = TimeToKill(information);

        switch (totalTime) {
            case 0:
                timeToKill.value = information.timeToKill + ' seconds';
                break;
            case -1:
                timeToKill.value = 'The magazine size must be greater than 0!';
                break;
            case -2:
                timeToKill.value = 'The damage must be greater than 0!';
                break;
        
            default:
                timeToKill.value = null;
                console.log('Error code does not exist!!');
                break;
        }
    }
}