
namespace TTKCalculator
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.damageLabel = new System.Windows.Forms.Label();
            this.fireRateLabel = new System.Windows.Forms.Label();
            this.magazineSizeLabel = new System.Windows.Forms.Label();
            this.reloadTimeLabel = new System.Windows.Forms.Label();
            this.damageValue = new System.Windows.Forms.NumericUpDown();
            this.fireRateValue = new System.Windows.Forms.NumericUpDown();
            this.magazineValue = new System.Windows.Forms.NumericUpDown();
            this.reloadTimeValue = new System.Windows.Forms.NumericUpDown();
            ((System.ComponentModel.ISupportInitialize)(this.damageValue)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fireRateValue)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.magazineValue)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.reloadTimeValue)).BeginInit();
            this.SuspendLayout();
            // 
            // damageLabel
            // 
            resources.ApplyResources(this.damageLabel, "damageLabel");
            this.damageLabel.Name = "damageLabel";
            // 
            // fireRateLabel
            // 
            resources.ApplyResources(this.fireRateLabel, "fireRateLabel");
            this.fireRateLabel.Name = "fireRateLabel";
            // 
            // magazineSizeLabel
            // 
            resources.ApplyResources(this.magazineSizeLabel, "magazineSizeLabel");
            this.magazineSizeLabel.Name = "magazineSizeLabel";
            // 
            // reloadTimeLabel
            // 
            resources.ApplyResources(this.reloadTimeLabel, "reloadTimeLabel");
            this.reloadTimeLabel.Name = "reloadTimeLabel";
            // 
            // damageValue
            // 
            resources.ApplyResources(this.damageValue, "damageValue");
            this.damageValue.Name = "damageValue";
            this.damageValue.ValueChanged += new System.EventHandler(this.value_Update);
            this.damageValue.Click += new System.EventHandler(this.damageValue_Click);
            // 
            // fireRateValue
            // 
            resources.ApplyResources(this.fireRateValue, "fireRateValue");
            this.fireRateValue.Name = "fireRateValue";
            this.fireRateValue.ValueChanged += new System.EventHandler(this.value_Update);
            // 
            // magazineValue
            // 
            resources.ApplyResources(this.magazineValue, "magazineValue");
            this.magazineValue.Name = "magazineValue";
            this.magazineValue.ValueChanged += new System.EventHandler(this.value_Update);
            // 
            // reloadTimeValue
            // 
            resources.ApplyResources(this.reloadTimeValue, "reloadTimeValue");
            this.reloadTimeValue.Name = "reloadTimeValue";
            this.reloadTimeValue.ValueChanged += new System.EventHandler(this.value_Update);
            // 
            // Form1
            // 
            resources.ApplyResources(this, "$this");
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.damageLabel);
            this.Controls.Add(this.fireRateLabel);
            this.Controls.Add(this.magazineSizeLabel);
            this.Controls.Add(this.reloadTimeLabel);
            this.Controls.Add(this.reloadTimeValue);
            this.Controls.Add(this.magazineValue);
            this.Controls.Add(this.fireRateValue);
            this.Controls.Add(this.damageValue);
            this.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.Name = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.damageValue)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fireRateValue)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.magazineValue)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.reloadTimeValue)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label damageLabel;
        private System.Windows.Forms.Label magazineSizeLabel;
        private System.Windows.Forms.Label reloadTimeLabel;
        private System.Windows.Forms.NumericUpDown damageValue;
        private System.Windows.Forms.Label fireRateLabel;
        private System.Windows.Forms.NumericUpDown fireRateValue;
        private System.Windows.Forms.NumericUpDown magazineValue;
        private System.Windows.Forms.NumericUpDown reloadTimeValue;
    }
}

