// в данном классе будет реализован доступ к данным из компонента
import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';

@Injectable({
	providedIn: 'root' // доступ к данному классу из корня
})

export class DataHandlerService {
	constructor() {}
	getCategories(): Category[] {
		return TestData.categories;
	}
	getTasks():Task[] {
		return TestData.tasks
	}
}