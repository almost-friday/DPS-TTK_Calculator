// Helper functions
let FireShot = magazine => magazine > 0 ? --magazine : false;

function Reload(magazineSize, reloadSpeed, totalTime) { return (magazineSize); }

// Main calculation
function TimeToKill(damage, fireRate, magazineSize, reloadSpeed, health) {
    let timeToKill = 0;
    let currentMagCapacity = magazineSize;

    currentMagCapacity = FireShot(currentMagCapacity);
    console.log(currentMagCapacity);
    if (currentMagCapacity === 0) {
        currentMagCapacity, timeToKill = Reload(magazineSize, reloadSpeed, timeToKill);
        console.log(currentMagCapacity);
        console.log(timeToKill);
        console.log("Hellooo");
    }

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

    return timeToKill;
}

// Calculation update
function Update() {
    const [damage, fireRate, magazineSize, reloadSpeed, enemyHealth] = document.getElementsByTagName("input");
    const timeToKill = document.getElementById("timeToKillResult");

    if (damage.value && fireRate.value && magazineSize.value && reloadSpeed.value && enemyHealth.value) {
        console.log("Updated!");
        totalTime = TimeToKill(damage.value, fireRate.value, magazineSize.value, reloadSpeed.value, enemyHealth.value);
        timeToKill.value = totalTime;
    }
}