// Calculation
function TimeToKill(damage, fireRate, magazineSize, reloadSpeed, health) {
    let ttk = 0;
    let currentMagCapacity = magazineSize;
    console.log("Hello");
    console.log(currentMagCapacity);
    currentMagCapacity = FireShot(currentMagCapacity);
    console.log(currentMagCapacity);
    /*
    let timer = 0;
    if (damage <= 0) {
        ttk = 0;
        return;
    }
    if (fireRate <= 0) fireRate = 0;
    ttk = damage * fireRate;
    console.log(ttk);
    */
}
function FireShot(mag){
    mag => mag > 0 ? --mag : false;
    /*
    if (mag > 0){
        return --mag;
    } 
    else return false;
    */
}

function Reload(currentmagcapacity, magcapacity, reloadspeed, totaltime){
    currentmagcapacity = magcapacity;
    totaltime += reloadspeed;
}

// Updates calculation
function Update() {
    console.log("Updated kindof");
    let damage = document.getElementById("damageEntry");
    let fireRate = document.getElementById("fireRateEntry");
    let magazineSize = document.getElementById("magazineSizeEntry");
    let reloadSpeed = document.getElementById("reloadSpeedEntry");
    let enemyHealth = document.getElementById("healthEntry");
    if (damage.value && fireRate.value && magazineSize.value && reloadSpeed.value && enemyHealth.value) {
        console.log("Updated!");
        TimeToKill(damage.value, fireRate.value, magazineSize.value, reloadSpeed.value, enemyHealth.value);
    }
}