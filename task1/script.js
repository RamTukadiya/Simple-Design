document.querySelectorAll('.price-box').forEach(priceBox => {
  priceBox.addEventListener('click', function() {
      document.querySelectorAll('.price-box').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('active'));
      this.classList.add('active');
      document.querySelector(`.plan[data-plan="${this.dataset.plan}"]`).classList.add('active');
      document.querySelector('.get-funded-btn').style.display = 'block';
  });
});

document.querySelectorAll('.plan').forEach(plan => {
  plan.addEventListener('click', function() {
      document.querySelectorAll('.plan').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.price-box').forEach(priceBox => priceBox.classList.remove('active'));
      this.classList.add('active');
    document.querySelector(`.price-box[data-plan="${this.dataset.plan}"]`).classList.add('active');
      document.querySelector('.get-funded-btn').style.display = 'block';
  });
});