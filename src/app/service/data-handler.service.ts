// в данном классе будет реализован доступ к данным из компонента
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root' // доступ к данному классу из корня
})

export class DataHandlerService {
	constructor() {}
}