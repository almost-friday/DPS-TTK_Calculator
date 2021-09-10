using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TTKCalculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        // Text changes //
        private void damageValue_Click(object sender, EventArgs e)
        {

        }

        private void value_Update(object sender, EventArgs e)
        {
            calculateTTK(damageValue.Value, fireRateValue.Value, magazineValue.Value, reloadTimeValue.Value);
        }


        // Algorithm that calculates the TTK and DPS based on the inputs.
        private decimal calculateTTK(decimal damage, decimal fireRate, int magSize, decimal reloadSpeed, decimal enemyHealth  =  100)
        {
            if (damage < 1) damage = 1; // Preventing the possibility of an endless loop 
            if (fireRate < 0) fireRate = 0;
            if (magSize <= 0) magSize = 1; // Preventing jank
            if (reloadSpeed < 0) reloadSpeed = 0;

            int shotsTaken = 0;
            int ammoInMag = magSize;
            decimal timeTaken = 0;
            decimal dps = CalculateDPS(damage, fireRate);

            while (enemyHealth > 0)
            {
                enemyHealth -= damage;
                shotsTaken++;
                if (enemyHealth <= 0) break;
                // timeTaken += fireRate;
                ammoInMag--;

                // Reload
                if (ammoInMag <= 0)
                {
                    // timeTaken += reloadSpeed;
                    ammoInMag = magSize;
                }
            }

            return timeTaken;
        }

        private decimal CalculateDPS(decimal damage, decimal fireRate) => damage * fireRate;
    }
}
