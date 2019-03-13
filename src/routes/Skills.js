// import React, { Component } from 'react';
// import { Bar } from 'react-chartjs-2';




// export default class Skills extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             chartData:{
//                 labels: ['React', 'Redux', 'MongoDB', 'Express', 'Node', 'Javascript'],
//                 datasets:[
//                   {
//                     label:'Technologies',
//                     data:[
//                        85,
//                        80,
//                        75,
//                        75,
//                        80,
//                        90,
//                        65,
//                        75

//                     ],
//                     backgroundColor:[
//                       'black',
//                       'rgba(54, 162, 235, 0.6)',
//                       'teal',
//                       'rgba(75, 192, 192, 0.6)',
//                       'rgba(153, 102, 255, 0.6)',
//                       'rgb(33, 255, 0)'
//                     ]
//                   }
//                 ]
//               }
//             };
//     }
    
//     render() {
        
//         return(
//             <div className="skills">
//             <center><h1 style={{ paddingBottom: '2cm' }}>My Skills:</h1></center>
//                 <Bar 
//                    data={this.state.chartData}
//                    width={400}
//                    height={400}
//                    options={{
//                        maintainAspectRatio: false
//                    }}
                   
//                 />
//             </div>
//         );
//     }
// }