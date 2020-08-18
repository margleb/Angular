// тестовые данные в виде массивов (заменяют таблицы БД)

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
	static categories:Category[] = [
		{id: 1, title: 'Работа'},
		{id: 2, title: 'Cемья'},
		{id: 3, title: 'Учеба'},
		{id: 4, title: 'Автомобиль'},
	];
	static properties:Priority[] = [
		{id: 1, title: 'Низкий', color: '#e5e5e5'},
		{id: 2, title: 'Средний', color: '#85d1b2'},
		{id: 3, title: 'Высокий', color: '#f1828d'},
		{id: 4, title: 'Очень срочно', color: '#f1128d'},
	];

	// не забывать индексация приоритетов и категорий начинается с нуля
	static tasks: Task[] = [
		{
			id: 1,
			title: 'Залить бензин полный бак',
			priority: TestData.properties[2],
			completed: false,
			category: TestData.categories[4],
			date: new Date('2019-04-10')
		},
	]
}