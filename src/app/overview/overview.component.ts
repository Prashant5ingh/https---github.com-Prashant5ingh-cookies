import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { faChartLine, } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { Sensor } from '../sensorData';
import { DialogboxService } from '../dialogbox.service';
import { SharedService } from '../shared.service';
import * as common from '../baseurl';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs';


declare const CanvasJS: any;

function current_avg_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer5", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Current Average",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_Avg
        });

      }
      chart.render();
    }
   
    $.getJSON(common.endpoint +'/Graph_current-avg.php?mid='+mid, addData);
  })
}

function current_phase1_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer6", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Current Phase1",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_A
        });

      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_current-phase1.php?mid='+mid, addData);
  })
}

function current_phase2_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer7", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Current Phase2",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_B
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_current-phase2.php?mid='+mid, addData);
  })
}

function current_phase3_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer8", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Current Phase3",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_C
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_current-phase3.php?mid='+mid, addData);
  })
}

function voltage_avg_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Voltage Average",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data:[{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_Avg
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_voltage-avg.php?mid='+mid, addData);
  })
}

function voltage_phase1_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Voltage Phase1",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_AN
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_voltage-phase1.php?mid='+mid, addData);
  })
}

function voltage_phase2_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Voltage Phase2",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_BN
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_voltage-phase2.php?mid='+mid, addData);
  })
}

function voltage_phase3_Graph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer4", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Voltage Phase3",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_CN
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_voltage-phase3.php?mid='+mid, addData);
  })
}

function activePowerGraph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer9", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Active Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Active_Power
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_activepower.php?mid='+mid, addData);
  })
}

function reactivePowerGraph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer10", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Reactive Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Reactive_Power
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_reactivepower.php?mid='+mid, addData);
  })
}

function apparentPowerGraph(mid:string) {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];

    var chart = new CanvasJS.Chart("chartContainer11", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Apparent Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Apparent_Power
        });
      }
      chart.render();
    }
    $.getJSON(common.endpoint +'/Graph_apparentpower.php?mid='+mid, addData);
  })
}



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  [x: string]: any;
  showModal: boolean | any;
  submitted = false;
  data: Sensor[] = [];
  data2: Sensor[] = [];
  value: any;
  faChartLine = faChartLine;
  mid:any;
  mySub!: Subscription;

  constructor(private cardService: CardService, private shared: SharedService, private dialogboxService: DialogboxService) {
   
  }

  ngOnInit(): void {
    this.value = JSON.parse(window.sessionStorage.getItem('userdata') || '{}');  
    if (this.shared.subsVar1 == undefined) {
      console.log("overviewngonit");
      this.shared.subsVar1 = this.shared.invoketableFunction.subscribe((meterid: string) => {
        this.mySub = interval(1000).subscribe((func=>{
          this.myFunctionOne(meterid);
        }))
      });
    }
  }

  myFunctionOne(meterid: string) {
    console.log("overview running");
    this.m_id = meterid;
    console.log(this.m_id);
    this.cardService.get_meterCardData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }

  graph_Current_avg() {
    current_avg_Graph(this.m_id);
  }
  graph_Current_phase1() {
    current_phase1_Graph(this.m_id);
  }
  graph_Current_phase2() {
    current_phase2_Graph(this.m_id);
  }
  graph_Current_phase3() {
    current_phase3_Graph(this.m_id);
  }
  graph_Voltage_avg() {
    voltage_avg_Graph(this.m_id);
  }
  graph_Voltage_phase1() {
    voltage_phase1_Graph(this.m_id);
  }
  graph_Voltage_phase2() {
    voltage_phase2_Graph(this.m_id);
  }
  graph_Voltage_phase3() {
    voltage_phase3_Graph(this.m_id);
  }
  graph_Activepower() {
    activePowerGraph(this.m_id);
  }
  graph_Reactivepower() {
    reactivePowerGraph(this.m_id);
  }
  graph_Apparentpower() {
    apparentPowerGraph(this.m_id);
  }
}
