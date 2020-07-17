import React from "react";
import './TourPage-style.scss';
import InfoButton from "../InfoButton/InfoButton-comp";


class TourPage extends React.Component {
    constructor(props){
        super();
        this.state={
            gigs:[
                {
                    id:1,
                    date: "10.08.2020",
                    place: "Wrocław",},
                {
                    id:2,
                    date: "11.08.2020",
                    place: "Chrząszczyrzewoszyce",},
                {
                    id:3,
                    date: "12.08.2020",
                    place: "Kątki",},
                {
                    id:4,
                    date: "14.08.2020",
                    place: "Byczyna",},
                {
                    id:5,
                    date: "10.08.2020",
                    place: "Wrocław",},
                {
                    id:6,
                    date: "11.08.2020",
                    place: "Chrząszczyrzewoszyce",},
                {
                    id:7,
                    date: "12.08.2020",
                    place: "Kątki",},
                {
                    id:8,
                    date: "14.08.2020",
                    place: "Byczyna",},
                
            ]
        }
    }

    render() {
        return (
            <div className="TourContainer"> 
                <div className="Title"> <h1>TOUR</h1> </div>
                <div className="TourList">
                    <table>
                        <tr>
                            <th className="date">Date</th>
                            <th className="place">Place</th>
                            <th className="info"></th>
                        </tr>

                        {this.state.gigs.map(
                            gig=><tr key={gig.id}>
                                    <td className="date">{gig.date}</td>
                                    <td className="place">{gig.place}</td>
                                    <td className="info"><InfoButton/></td>
                                </tr>)}
                    </table>
                </div>
                <div className="TourSubscribe">
                    <h1>Can't you see your date?</h1>
                    <h2>Subscribe to be first to know about new shows near you.</h2>
                    <input className="emailInput" type="email" placeholder="email"></input>
                </div>


            </div>
        )
    }
};

export default TourPage;