//Data Object
const information = {
    ttk: null,
    dps: null
};

const [damage, fireRate, magazineSize, reloadSpeed, enemyHealth] = document.getElementsByClassName("timeToKillInput");
const timeToKillElement = document.getElementById("timeToKillResult");
const damagePerSecondElement = document.getElementById("damagePerSecondResult");

// Populates information with several important properties directly from the document.
for (const field of document.getElementsByClassName("timeToKillInput")) {
    field.addEventListener('onInput', TestUpdate(this))
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
    //Checking for common errors
    if (stats.magazineSize < 1) return -1;
    if (stats.damage < 1) return -2;
    if (stats.fireRate <= 0) return -3;

    let _totalTime = 0;
    let _dps = stats.damage * (1 / stats.fireRate);
    let _enemyHealth = stats.enemyHealth;

    let _currentMag = stats.magazineSize;

    while (true) {
        _currentMag -= 1;
        console.log('Ammo in current mag: ' + _currentMag);

        _enemyHealth -= stats.damage;
        if (_enemyHealth <= 0) break;
        
        _totalTime += stats.fireRate;

        //Reload if magazine depleted
        if (_currentMag <= 0) {            
            console.log("Reloading!");
            _currentMag = stats.magazineSize;
            _totalTime += stats.reloadSpeed;
        } 
    }
    console.log('Total time elapsed: ' + _totalTime);

    stats.ttk = _totalTime;
    stats.dps = _dps;
    return 0;
}
function TestUpdate(context){
    console.log(context);
}
// Calculation update
function Update() {
    information.damage = damage.value;
    information.fireRate = fireRate.value;
    information.magazineSize = magazineSize.value;
    information.reloadSpeed = reloadSpeed.value;
    information.enemyHealth = enemyHealth.value;

    information.currentEnemyHealth = information.enemyHealth;

    if (information.damage && information.fireRate && information.magazineSize && information.reloadSpeed && information.enemyHealth) {

        totalTime = TimeToKill(information);

        switch (totalTime) {
            case 0:
                timeToKillElement.value = information.ttk + ' seconds';
                damagePerSecondElement.value = information.dps + ' damage per second';
                break;
            case -1:
                console.log('The magazine size must be greater than 0!');
                break;
            case -2:
                console.log('The damage must be greater than 0!');
                break;
            case -3:
                console.log("The fire rate must be above 0!");
                break;
        
            default:
                timeToKillElement.value = null;
                console.log('Error code does not exist!!');
                break;
        }
    }
}