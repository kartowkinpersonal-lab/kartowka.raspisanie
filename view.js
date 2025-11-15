const daySelect = document.getElementById('daySelect');
const scheduleBox = document.getElementById('scheduleBox');
const days = ['Понедельник','Вторник','Среда','Четверг','Пятница'];

let schedule = JSON.parse(localStorage.getItem('schedule'));

days.forEach(d=>{
  const opt = document.createElement('option');
  opt.value = d;
  opt.textContent = d;
  daySelect.appendChild(opt);
});

daySelect.addEventListener('change', ()=> render(daySelect.value));

function render(day){
  scheduleBox.innerHTML = '';
  schedule[day].forEach((subj,i)=>{
    const div = document.createElement('div');
    div.className = 'lesson';
    div.textContent = (i+1)+'. '+subj;
    scheduleBox.appendChild(div);
  });
}

render('Понедельник');
