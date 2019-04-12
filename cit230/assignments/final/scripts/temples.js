// [
//     {
//         "name": "Provo City Center Temple",
//         "closures": [
//             {
//                 "start": "2019-06-23",
//                 "end": "2019-07-06"
//             },
//             {
//                 "start": "2019-07-24",
//                 "end": "2019-07-24"
//             },
//             {
//                 "start": "2019-10-05",
//                 "end": "2019-10-05"
//             },
//             {
//                 "start": "2019-11-27",
//                 "end": "2019-11-28"
//             },
//             {
//                 "start": "2019-12-01",
//                 "end": "2019-12-14"
//             },
//             {
//                 "start": "2019-12-24",
//                 "end": "2019-12-25"
//             },
//             {
//                 "start": "2019-12-31",
//                 "end": "2020-1-1"
//             }
//         ]
//     },
//     {
//         "name": "Rexburg Idaho Temple",
//         "closures": [
//             {
//                 "start": "2019-04-06",
//                 "end": "2019-04-06"
//             },
//             {
//                 "start": "2019-04-15",
//                 "end": "2019-04-29"
//             },
//             {
//                 "start": "2019-07-04",
//                 "end": "2019-07-04"
//             },
//             {
//                 "start": "2019-07-27",
//                 "end": "2019-07-27"
//             },
//             {
//                 "start": "2019-09-02",
//                 "end": "2019-09-16"
//             },
//             {
//                 "start": "2019-10-05",
//                 "end": "2019-10-05"
//             },
//             {
//                 "start": "2019-11-27",
//                 "end": "2019-11-28"
//             },
//             {
//                 "start": "2019-12-24",
//                 "end": "2019-12-25"
//             },
//             {
//                 "start": "2019-12-31",
//                 "end": "2020-1-1"
//             }
//         ]
//     },
//     {
//         "name": "Sacramento California Temple",
//         "closures": [
//             {
//                 "start": "2019-07-04",
//                 "end": "2019-07-04"
//             },
//             {
//                 "start": "2019-08-06",
//                 "end": "2019-08-19"
//             },
//             {
//                 "start": "2019-10-05",
//                 "end": "2019-10-05"
//             },
//             {
//                 "start": "2019-11-27",
//                 "end": "2019-11-28"
//             },
//             {
//                 "start": "2019-12-24",
//                 "end": "2019-12-25"
//             },
//             {
//                 "start": "2019-12-31",
//                 "end": "2020-1-1"
//             }
//         ]
//     },
//     {
//         "name": "Seattle Washington Temple",
//         "closures": [
//             {
//                 "start": "2019-07-04",
//                 "end": "2019-07-04"
//             },
//             {
//                 "start": "2019-08-18",
//                 "end": "2019-09-02"
//             },
//             {
//                 "start": "2019-10-05",
//                 "end": "2019-10-05"
//             },
//             {
//                 "start": "2019-11-27",
//                 "end": "2019-11-28"
//             },
//             {
//                 "start": "2019-12-24",
//                 "end": "2019-12-25"
//             }
//         ]
//     }
// ]

var apiTemples = 'json/temples.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiTemples, true);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function() {
    var templeData = templeRequest.response;

    document.getElementById('provoCloseStart0').innerHTML = templeData[0].closures[0].start;
    document.getElementById('provoCloseEnd0').innerHTML = templeData[0].closures[0].end;
    document.getElementById('provoCloseStart1').innerHTML = templeData[0].closures[1].start;
    document.getElementById('provoCloseEnd1').innerHTML = templeData[0].closures[1].end;
    document.getElementById('provoCloseStart2').innerHTML = templeData[0].closures[2].start;
    document.getElementById('provoCloseEnd2').innerHTML = templeData[0].closures[2].end;
    document.getElementById('provoCloseStart3').innerHTML = templeData[0].closures[3].start;
    document.getElementById('provoCloseEnd3').innerHTML = templeData[0].closures[3].end;
    document.getElementById('provoCloseStart4').innerHTML = templeData[0].closures[4].start;
    document.getElementById('provoCloseEnd4').innerHTML = templeData[0].closures[4].end;
    document.getElementById('provoCloseStart5').innerHTML = templeData[0].closures[5].start;
    document.getElementById('provoCloseEnd5').innerHTML = templeData[0].closures[5].end;
    document.getElementById('provoCloseStart6').innerHTML = templeData[0].closures[6].start;
    document.getElementById('provoCloseEnd6').innerHTML = templeData[0].closures[6].end;

    document.getElementById('rexburgCloseStart0').innerHTML = templeData[1].closures[0].start;
    document.getElementById('rexburgCloseEnd0').innerHTML = templeData[1].closures[0].end;
    document.getElementById('rexburgCloseStart1').innerHTML = templeData[1].closures[1].start;
    document.getElementById('rexburgCloseEnd1').innerHTML = templeData[1].closures[1].end;
    document.getElementById('rexburgCloseStart2').innerHTML = templeData[1].closures[2].start;
    document.getElementById('rexburgCloseEnd2').innerHTML = templeData[1].closures[2].end;
    document.getElementById('rexburgCloseStart3').innerHTML = templeData[1].closures[3].start;
    document.getElementById('rexburgCloseEnd3').innerHTML = templeData[1].closures[3].end;
    document.getElementById('rexburgCloseStart4').innerHTML = templeData[1].closures[4].start;
    document.getElementById('rexburgCloseEnd4').innerHTML = templeData[1].closures[4].end;
    document.getElementById('rexburgCloseStart5').innerHTML = templeData[1].closures[5].start;
    document.getElementById('rexburgCloseEnd5').innerHTML = templeData[1].closures[5].end;
    document.getElementById('rexburgCloseStart6').innerHTML = templeData[1].closures[6].start;
    document.getElementById('rexburgCloseEnd6').innerHTML = templeData[1].closures[6].end;
    document.getElementById('rexburgCloseStart7').innerHTML = templeData[1].closures[7].start;
    document.getElementById('rexburgCloseEnd7').innerHTML = templeData[1].closures[7].end;
    document.getElementById('rexburgCloseStart8').innerHTML = templeData[1].closures[8].start;
    document.getElementById('rexburgCloseEnd8').innerHTML = templeData[1].closures[8].end;


    document.getElementById('sacramentoCloseStart0').innerHTML = templeData[2].closures[0].start;
    document.getElementById('sacramentoCloseEnd0').innerHTML = templeData[2].closures[0].end;
    document.getElementById('sacramentoCloseStart1').innerHTML = templeData[2].closures[1].start;
    document.getElementById('sacramentoCloseEnd1').innerHTML = templeData[2].closures[1].end;
    document.getElementById('sacramentoCloseStart2').innerHTML = templeData[2].closures[2].start;
    document.getElementById('sacramentoCloseEnd2').innerHTML = templeData[2].closures[2].end;
    document.getElementById('sacramentoCloseStart3').innerHTML = templeData[2].closures[3].start;
    document.getElementById('sacramentoCloseEnd3').innerHTML = templeData[2].closures[3].end;
    document.getElementById('sacramentoCloseStart4').innerHTML = templeData[2].closures[4].start;
    document.getElementById('sacramentoCloseEnd4').innerHTML = templeData[2].closures[4].end;
    document.getElementById('sacramentoCloseStart5').innerHTML = templeData[2].closures[5].start;
    document.getElementById('sacramentoCloseEnd5').innerHTML = templeData[2].closures[5].end;

    document.getElementById('seattleCloseStart0').innerHTML = templeData[3].closures[0].start;
    document.getElementById('seattleCloseEnd0').innerHTML = templeData[3].closures[0].end;
    document.getElementById('seattleCloseStart1').innerHTML = templeData[3].closures[1].start;
    document.getElementById('seattleCloseEnd1').innerHTML = templeData[3].closures[1].end;
    document.getElementById('seattleCloseStart2').innerHTML = templeData[3].closures[2].start;
    document.getElementById('seattleCloseEnd2').innerHTML = templeData[3].closures[2].end;
    document.getElementById('seattleCloseStart3').innerHTML = templeData[3].closures[3].start;
    document.getElementById('seattleCloseEnd3').innerHTML = templeData[3].closures[3].end;
    document.getElementById('seattleCloseStart4').innerHTML = templeData[3].closures[4].start;
    document.getElementById('seattleCloseEnd4').innerHTML = templeData[3].closures[4].end;
}