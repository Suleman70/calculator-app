import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  MonthlyNetIncome: number = 0;
  WeeklyNetIncome: number = 0;

  constructor(){

  }

  onSubmit(form: NgForm){
    this.MonthlyNetIncome = this.calculate(form.value.hourRate, form.value.fuelCostEachLesson, form.value.minLessonDuration, form.value.lessonPerDay, form.value.daysWorkedEachWeek, form.value.insurancePerMonth, form.value.franchiseFee, form.value.otherCostPerMonth)
    this.WeeklyNetIncome = (this.MonthlyNetIncome*12)/52
  }

  calculate(hourRate: number, fuelCostEachLesson: number, minLessonDuration: number, lessonPerDay: number, daysWorkedEachWeek: number,insurancePerMonth: number,  franchiseFee: number, otherCostPerMonth: number): number{
  
    let x = (hourRate * minLessonDuration) - fuelCostEachLesson;
    let y = (x * lessonPerDay) * daysWorkedEachWeek;
    let t = (y * 52)/12
    let franchiseAnnual = (franchiseFee * 52)/12
    t = t - (insurancePerMonth + franchiseAnnual + otherCostPerMonth);
    return t;

  }
}
