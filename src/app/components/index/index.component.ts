import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import 'chartjs-plugin-streaming';
// @ts-ignore
import {SocketService} from '../../services/socket.service';
import {Alerts} from '../../../utils/alerts';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
// @ts-ignore
    active;

    measurment = {
        kwh: 0,
        value: 0
    };

    constructor(private  socketService: SocketService, private alerts: Alerts) {
        this.active = true;
        this.socketService.myEmitter.subscribe((value) => {
            if (this.active) {
                this.measurment = value;
                this.datasets.forEach(function (dataset: any) {
                    dataset.data.push({
                        x: Date.now(),
                        y: value.kwh
                    });
                });
                // this.alerts.presentToast(((value * 1000)).toString() + 'W');
            }
        });
    }

    ionViewWillLeave() {
        this.active = false;
    }

    ionViewWillEnter() {
        this.active = true;
    }

    datasets: any[] = [{
        data: []
    }];

    options: any = {
        scales: {
            xAxes: [{
                type: 'realtime',
                // duration: 20000,    // data in the past 20000 ms will be displayed
                // refresh: 1000,      // onRefresh callback will be called every 1000 ms
                delay: 5000,        // delay of 1000 ms, so upcoming values are known before plotting a line
                pause: true,       // chart is not paused
                realtime: {
                    // onRefresh: function (chart: any) {
                    //     chart.data.datasets.forEach(function (dataset: any) {
                    //         dataset.data.push({
                    //             x: Date.now(),
                    //             y: Math.random()
                    //         });
                    //     });
                    // },
                    delay: 2000
                }
            }]
        }
    };

    newRandom() {
        return Math.random();
    }
}

