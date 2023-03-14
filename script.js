const STAGES = [
	{
		id: 1,
		name: 'ІДЕЯ',
		description: 'Аналізуємо ідею та можлиівсть її втілення в проєкт',
	},
	{
		id: 2,
		name: 'ДИЗАЙН',
		description: 'Розробляємо дизайн та визначаємо технології',
	},
	{
		id: 3,
		name: 'РОЗРОБКА',
		description: 'Розробляємо та тестуємо проєкт',
	},
	{
		id: 4,
		name: 'ПІДТРИМКА',
		description: 'Підтримуємо проєкт та розвиваємо його',
	},
	{
		id: 5,
		name: 'ЗАВЕРШЕННЯ',
		description: 'Завершуємо проєкт та підготовлюємо до використання',
	}
]


function showPostsOnPage(stages) {
	let html = '';
	stages.forEach((stage) => {
		html += `
	  <div id="${stage.id}" class="item">
		 <h2 class="item__title">${stage.name}</h2>
		 <p class="item__price">${stage.description}</p>
	  </div>`
	})
	const TARGET = document.querySelector('#posts_list');
	TARGET.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
	showPostsOnPage(STAGES);
})