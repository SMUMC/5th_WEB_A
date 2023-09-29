const popupBtn = document.getElementById('popupBtn');
const modal = document.getElementById('modalWrap');
const closeBtn = document.getElementById('closeBtn');

modal.style.display = 'none';

popupBtn.onclick = function () {
    modal.style.display = 'block';
  }
  
closeBtn.onclick = function () {
    modal.style.display = 'none';
};

