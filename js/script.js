window.addEventListener('DOMContentLoaded', () => {
     async function getResource(url) {
          let res = await fetch(url);
      
          if (!res.ok) {
              throw new Error(`Could not fetch ${url}, status: ${res.status}`);
          }
      
          return await res.json();
      }

     const getZero = (num) => {
          if(num < 10) {
               return `0${num}`;
          } 
          return `${num}`;
     };

     const createCard = (obj, list) => {
          const card = document.createElement('div');
          card.classList.add('lesson__item');
          
          const date = new Date(obj.date);
          
          if (new Date() > date) {
               card.classList.add('opacity');
          }
          card.innerHTML = `
               <div class="lesson__header">
                    <h3>${obj.title}</h3>
                    <div class="clock">
                         <i class="fa fa-calendar-o" aria-hidden="true"></i>
                         ${getZero(date.getDate())}.${getZero(date.getMonth() + 1)}
                         <span>|</span>
                         <i class="fa fa-clock-o" aria-hidden="true"></i>
                         ${getZero(date.getHours())}:${getZero(date.getMinutes())}
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
     const lessonListWednesday = document.querySelector('#wednesday__list');
     const lessonListThursday = document.querySelector('#thursday__list');
     const lessonListFriday = document.querySelector('#friday__list');

     getResource('db.json').then(
          data => {
               createList(data.monday, lessonListMonday);
               createList(data.tuesday, lessonListTuesday);
               createList(data.wednesday, lessonListWednesday);
               createList(data.thursday, lessonListThursday);
               createList(data.friday, lessonListFriday);
          }
     );
});