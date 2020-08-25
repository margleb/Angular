// в данном классе будет реализован доступ к данным из компонента
import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { Subject } from "rxjs"

@Injectable({
	providedIn: 'root' // доступ к данному классу из корня
})

export class DataHandlerService {
	taskSubject = new Subject<Task[]>()
	constructor() {

	}
	getCategories(): Category[] {
		return TestData.categories;
	}
	fillTasks() {
		this.taskSubject.next(TestData.tasks)
	}
	fillTasksByCategory(category:Category) {
		// будут отфильтрованны все задачи у которых категория равна переданной категории
		const tasks = TestData.tasks.filter(task => task.category === category);
		this.taskSubject.next(tasks)
	}
} 