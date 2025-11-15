// Проверка входа
if (!localStorage.getItem('adminUser') || !localStorage.getItem('adminPass')) {
  window.location.href = "index.html";
}

function logout() {
  window.location.href = "index.html";
}

const days = ['Понедельник','Вторник','Среда','Четверг','Пятница'];

if (!localStorage.getItem('schedule')) {
  const def = {
    'Понедельник': ['Математика','Русский язык','Английский','История','Физика','Биология'],
    'Вторник': ['Литература','География','Химия','Алгебра','Физика','Труд'],
    'Среда': ['Математика','Русский язык','История','Музыка','Физкультура','Биология'],
    'Четверг': ['Литература','География','Алгебра','Химия','Физика','Физкультура'],
    'Пятница': ['Математика','Русский язык','Английский','История','Биология','Классный час']
  };
  localStorage.setItem('schedule', JSON.stringify(def));
}

let schedule = JSON.parse(localStorage.getItem('schedule'));
const daySelect = document.getElementById('daySelect');
const lessonsBox = document.getElementById('lessonsBox');

days.forEach(d => {
  const opt = document.createElement('option');
  opt.value = d;
  opt.textContent = d;
  daySelect.appendChild(opt);
});

daySelect.addEventListener('change', ()=> show(daySelect.value));

function show(day){
  lessonsBox.innerHTML = '';
  schedule[day].forEach((subj, i)=>{
    const row = document.createElement('div');
    row.className = 'lesson-edit';

    const input = document.createElement('input');
    input.value = subj;
    input.oninput = ()=> schedule[day][i] = input.value;

    row.appendChild(document.createTextNode((i+1)+'. '));
    row.appendChild(input);
    lessonsBox.appendChild(row);
  });
}

show('Понедельник');

function saveSchedule(){
  localStorage.setItem('schedule', JSON.stringify(schedule));
  alert("Расписание сохранено!");
}
