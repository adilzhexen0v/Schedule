window.addEventListener('DOMContentLoaded', () => {
     const monday = [
          {
               title: 'Торжественная линейка',
               date: new Date(2022, 11, 28, 8, 15),
               classes: '5-11 классы',
               teachers: ['Тулендинова К.Ж', 'Фаткулина Л.И', 'Мусабекова Ж.А', 'Жагалбайлинова У.К', 'Хамзин Р.А'],
               place: 'Актовый зал',
               type: 'Линейка'
          },
          {
               title: '"Кім жылдам?"',
               date: new Date(2022, 11, 28, 10, 5),
               classes: '7"A"-11"A" классы',
               teachers: ['Мусабекова Ж.А'],
               place: 'Кабинет №27',
               type: 'Переменка'
          },
          {
               title: '"Математическая карусель"',
               date: new Date(2022, 11, 28, 13, 45),
               classes: '5"Б"-6"Б" классы',
               teachers: ['Жагалбайлинова У.К'],
               place: 'Актовый зал',
               type: 'Внеклассное мероприятие'
          }
     ];

     const tuesday = [
          {
               title: '"Путешествие в мир физики"',
               date: new Date(2022, 11, 29, 10, 5),
               classes: '9"Б"-11"Б" классы',
               teachers: ['Фаткулина Л.И'],
               place: 'Кабинет №34',
               type: 'Переменка'
          },
          {
               title: '"Кім шапшаң?"',
               date: new Date(2022, 11, 29, 10, 5),
               classes: '5"А"-11"А" классы',
               teachers: ['Тулендинова К.Ж'],
               place: 'Кабинет №40',
               type: 'Переменка'
          },
          {
               title: '"Информатика мейрамханасы"',
               date: new Date(2022, 11, 29, 14, 0),
               classes: '9"А" сыныбы',
               teachers: ['Мусабекова Ж.А'],
               place: 'Кабинет №27',
               type: 'Сыныптан тыс іс-шара'
          },
          {
               title: '"Последний герой"',
               date: new Date(2022, 11, 29, 14, 35),
               classes: '7"Б"-8"Б" классы',
               teachers: ['Фаткулина Л.И'],
               place: 'Кабинет №34',
               type: 'Внеклассное мероприятие '
          },
     ];

     const getZero = (num) => {
          if(num < 10) {
               return `0${num}`;
          } 
          return `${num}`;
     };

     const createCard = (obj, list) => {
          const card = document.createElement('div');
          card.classList.add('lesson__item');
          if (new Date() > obj.date) {
               card.classList.add('opacity');
          }
          card.innerHTML = `
               <div class="lesson__header">
                    <h3>${obj.title}</h3>
                    <div class="clock">
                         <i class="fa fa-calendar-o" aria-hidden="true"></i>
                         ${getZero(obj.date.getDate())}:${getZero(obj.date.getMonth())}
                         <span>|</span>
                         <i class="fa fa-clock-o" aria-hidden="true"></i>
                         ${getZero(obj.date.getHours())}:${getZero(obj.date.getMinutes())}
                    </div>
               </div>
               <div class="lesson__body">
                    <div class="time__list">
                         <div class="time__item">
                              <i class="fa fa-map-marker" aria-hidden="true"></i>${obj.place}
                              |
                              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                              ${obj.classes}
                         </div>
                    </div>
                    <div class="time__list">
                         <div class="time__item">
                              <i class="fa fa-leanpub" aria-hidden="true"></i>
                              ${obj.type}
                         </div>
                    </div>
                    <div class="teacher__title">Ответственные:</div>
                    <ul class="teachers">
                    </ul>
               </div>
          `;
          const teachers = card.querySelector('.teachers');
          obj.teachers.forEach(teacherData => {
               const teacher = document.createElement('li');
               teacher.classList.add('teacher');
               teacher.textContent = teacherData;
               teachers.append(teacher);
          });
          list.append(card);
     };

     const createList = (arr, list) => {
          arr.forEach(item => {
               createCard(item, list);
          });
     };

     const lessonListMonday = document.querySelector('#monday__list');
     const lessonListTuesday = document.querySelector('#tuesday__list');
     createList(monday, lessonListMonday);
     createList(tuesday, lessonListTuesday);
});