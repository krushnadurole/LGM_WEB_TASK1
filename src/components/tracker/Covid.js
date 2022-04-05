// import React, { useEffect, useState } from 'react'
// import './covid.css'
// const Covid = () => {
//     const [data, setdata] = useState([]);
//     const getcovidata = async () => {
//         try {
//             const res = await fetch('https://data.covid19india.org/data.json');
//             const actualdata = await res.json();
//             setdata(actualdata.statewise[0]);
//             console.log(actualdata.statewise[0]);
//         }
//         catch (err) {
//             console.log(err);
//         }

//     }

//     useEffect(() => {
//         getcovidata();

//     }, []);

//     return (
//         <div>
//             <div className='head'>
//             <h1> LIVE</h1>
//             <h2>COVID-19 CORONA VIRUS</h2>
//             </div>
//             <section className='s'>

//                 <div className='container'>
//                     <div className="card">

//                         <div className="card-body">
//                             <h5 className="card-title">Live</h5>
//                             <p className="card-text">India</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     <div className="card">

//                         <div className="card-body">
//                             <h5 className="card-title">Total Recovered</h5>
//                             <p className="card-text">{data.recovered}</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     <div className="card">

//                         <div className="card-body">
//                             <h5 className="card-title">Total Recovered</h5>
//                             <p className="card-text">{data.recovered}</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     <div className="card">

//                         <div className="card-body">
//                             <h5 className="card-title">Total Recovered</h5>
//                             <p className="card-text">{data.recovered}</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Total confirmed</h5>
//                             <p className="card-text">{data.confirmed}</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Total Active</h5>
//                             <p className="card-text">{data.active}</p>
//                             <a className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Covid