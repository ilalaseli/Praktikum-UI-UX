document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('orderForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Terima kasih! Pesanan Anda telah diterima. Tim kami akan menghubungi Anda.');
      form.reset();
    });
  }
});
