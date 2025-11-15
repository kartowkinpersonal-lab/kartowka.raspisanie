// Простая авторизация через localStorage
// Логин по умолчанию: admin пароль: 1234

if (!localStorage.getItem('adminUser')) {
  localStorage.setItem('adminUser', 'admin');
  localStorage.setItem('adminPass', '1234');
}

function login() {
  const u = document.getElementById('user').value;
  const p = document.getElementById('pass').value;
  if (u === localStorage.getItem('adminUser') && p === localStorage.getItem('adminPass')) {
    window.location.href = "admin.html";
  } else {
    document.getElementById('msg').textContent = "Неверный логин или пароль";
  }
}
