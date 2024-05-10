let currentWeekStart = new Date();
  
function updateCalendar() {
  const weekDaysContainer = document.getElementById('weekDays');
  const weekLabel = document.getElementById('weekLabel');
  weekDaysContainer.innerHTML = ''; // Limpiamos los días de la semana antes de volver a generarlos
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  let weekStart = new Date(currentWeekStart);
  weekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay());
  let weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const weekStartFormatted = weekStart.getDate() + '-' + (weekStart.toLocaleString('default', { month: 'short' }));
  const weekEndFormatted = weekEnd.getDate() + '-' + (weekEnd.toLocaleString('default', { month: 'short' }));
  
  weekLabel.textContent = weekStartFormatted + ' - ' + weekEndFormatted;
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    const dayName = days[day.getDay()];
    const dayNumber = day.getDate();
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    if (i === new Date().getDay() && currentWeekStart.toDateString() === new Date().toDateString()) {
      dayElement.classList.add('selected'); // Aplicamos la clase 'selected' al día actual
    }
    dayElement.innerHTML = `
      <div class="day-name">${dayName}</div>
      <div class="day-number">${dayNumber}</div>
    `;
    weekDaysContainer.appendChild(dayElement);
  }
}

updateCalendar();

document.querySelector('.arrow-left').addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  updateCalendar();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  updateCalendar();
});

document.querySelector('.calendar').addEventListener('click', (event) => {
  if (event.target.classList.contains('day')) {
    document.querySelectorAll('.day').forEach((day) => {
      day.classList.remove('selected'); // Eliminamos la clase 'selected' de todos los días
    });
    event.target.classList.add('selected'); // Agregamos la clase 'selected' al día seleccionado
  } else if (event.target.parentElement.classList.contains('day')) {
    document.querySelectorAll('.day').forEach((day) => {
      day.classList.remove('selected'); // Eliminamos la clase 'selected' de todos los días
    });
    event.target.parentElement.classList.add('selected'); // Agregamos la clase 'selected' al día seleccionado
  }
});
  