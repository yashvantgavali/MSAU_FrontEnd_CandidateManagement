import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { EdudetailsService } from '../edudetails.service';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private joiningdetailsservice : JoiningdetailsService,private edudetailsservice : EdudetailsService) { }

  ngOnInit(): void {

    this.joiningdetailsservice.getcountPerYear().subscribe(data => {
      this.setBarGraphValues(data);
      console.log(data);
    })
    this.joiningdetailsservice.getcountPerLocation().subscribe(data =>{
      this.setSelectedChartValues(data);
      console.log(data);
    })
    this.joiningdetailsservice.getcountPerTechnology().subscribe(data =>{
      this.setTechnologyChartValues(data);
      console.log(data);
    })

    this.edudetailsservice.getcountPerCourse().subscribe(data =>{
      this.setCourseChartValues(data);
      console.log(data);
    })
  }

  // Bar-chart-Year Wise Joining
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Candidates',

        },
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };



barChartLabels: Label[] = [];
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataSets[] =
  [{
    data: [],
    label: 'Candidate Hired'
  }];


  setBarGraphValues(data : any) {
    for (const i in data) {
      console.log(data[i].date);
      console.log(data[i].id);
      this.barChartLabels.push(data[i].date);
      this.barChartData[0].data!.push(data[i].id);
    }
  }


 
slChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


slChartLabels: Label[]=[];
slChartType: ChartType = 'pie' ;     
slChartLegend = true;

slChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
  }];

setSelectedChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].location);
  console.log(data[i].id);
  this.slChartLabels.push(data[i].location);
  this.slChartData[0].data!.push(data[i].id);
  }
  
 
}



 //Pie chart 2 --Technology


 techChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


techChartLabels: Label[]=[];
techChartType: ChartType = 'doughnut' ;     //'pie';
techChartLegend = true;

techChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
  }];

setTechnologyChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].technology);
  console.log(data[i].id);
  this.techChartLabels.push(data[i].technology);
  this.techChartData[0].data!.push(data[i].id);
  }
 
}


//Pie chart 3 --Course


courseChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};


courseChartLabels: Label[]=[];
courseChartType: ChartType = 'polarArea' ;     //'pie';
courseChartLegend = true;

courseChartData: ChartDataSets[] =
  [{
    data: [],
    backgroundColor:['rgb(55,99,132)','rgb(54,162,235)','rgb(255,205,86)'],
  }];

setCourseChartValues(data: any) {
  for (const i in data) {
  console.log(data[i].course);
  console.log(data[i].id);
  this.courseChartLabels.push(data[i].course);
  this.courseChartData[0].data!.push(data[i].id);
  }
  
}


}