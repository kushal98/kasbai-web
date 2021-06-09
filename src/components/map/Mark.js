import React from 'react';

import { 
    Marker,
  } from 'react-simple-maps';
import { GoLocation } from "react-icons/go";
import { Table} from "react-bootstrap";

function Mark(props) {
    return (
                <Marker 
                    key={props.city} 
                    coordinates = {[props.latitude  , props.longitude]}
                    onMouseEnter={() => {
                        props.setDisplayContent(props.city)
                        props.setTooltipContent(
                        <>
                            {/* <div 
                                style={{
                                    padding: ".5rem",
                                    textAlign: "left",
                                    fontSize: ".8em",
                                }}
                            >
                                    <div>
                                        <>
                                            <b>Programs currently in  {props.city } : </b> <br/>
                                            <div style={{marginTop: "5px" , marginBottom: "10px"}}>
                                                <span><b>1. Primary Health Care </b></span><br />
                                                <span><b>2. Covid Relief Care </b></span><br />
                                                <span><b>3. Kit Distribution </b></span><br />
                                                
                                            </div>
                                            <div
                                                style={{
                                                    width: "100%",
                                                    borderBottom: "1px solid lightgrey",
                                                    marginBottom: ".5rem",
                                                }}
                                            >
                                            </div>
                                        </>
                                    </div>
                                </div> */}
                                <div style={{
                                    color:'#ffffff',
                                    borderColor: '#ffffff'
                                }}>
                                <Table  hover style={{
                                    color:'#ffffff',
                                    borderColor: '#ffffff'
                                }}>
                                    <thead>
                                        <tr>
                                        <th>Programs</th>
                                        <th>Target</th>
                                        <th>Achieved </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Vaccine Registration</td>
                                        <td>50 </td>
                                        <td>30</td>
                                        </tr>
                                        <tr>
                                        <td>Covid Survival Kits</td>
                                        <td>40</td>
                                        <td>15</td>
                                        </tr>
                                        <tr>
                                        <td>Connection To Primary Healthcare</td>
                                        <td>100</td>
                                        <td>40</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    );
                    }}
                    onMouseLeave={() => {
                        props.setDisplayContent("Pan India")
                        props.setTooltipContent("");
                    }}
                >
                    {
                    // <circle r={2} fill="#fff" stroke={props.city === "My Location" ? "#519137" : "#BE531C" } strokeWidth={0.3} />
                    <GoLocation size={10} />
                    }
                    <text
                        textAnchor="middle"
                        y={-0.5}
                        style={{ color: "#BE531C" , fontSize:"4px" }}
                    >
                        {props.city}
                    </text>

                </Marker>
    );
}

export default Mark;