import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subjects: Subject[] = [
    {value: 'Maths', viewValue: 'Maths'},
    {value: 'Hindi', viewValue: 'Hindi'},
    {value: 'English', viewValue: 'English'}
  ];

 // Pie
 public pieChartLabels:string[] = ['Chrome', 'Safari', ];
 public pieChartData:number[] = [40, 20];
 public pieChartType:string = 'pie';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

 public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};

  public mbarChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartColors:Array<any> = [
  { 
    backgroundColor: 'rgba(77,20,96,0.3)',
    borderColor: 'rgba(77,20,96,1)',
    pointBackgroundColor: 'rgba(77,20,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,20,96,1)'
  }
];
  public barChartData:any[] = [
    {data: [0, 20, 40, 60, 80, 100], label: 'Company B'}
  ];

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],  
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      favoriteSubject: ['']
    });
  }
  get f() { return this.contactForm.controls; }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
}

}
