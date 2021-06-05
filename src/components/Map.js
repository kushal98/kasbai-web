import React, {useState} from 'react';
import { 
    ComposableMap, Geographies, Geography, 
  } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { Card } from 'primereact/card';

import {GiLoveInjection} from 'react-icons/gi'
import { MdKitchen } from "react-icons/md";
import Mark from './Mark';

function Map(props) {
    const [content, setContent] = useState("");
    const [community, setCommunityContent] = useState("Pan India");

    const INDIA_TOPO_JSON = require('../assets/map/india.topo.json');

    const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937]
    };

    const map_data = [
        {
            "Customer": "1500141168",
            "City": "Jaipur",
            "Latitude": "75.7873",
            "Longitude": "26.9124"
        },
        {
            "Customer": "2500122490",
            "City": "Rajkot",
            "Latitude": "70.8022",
            "Longitude": "22.3039"
        },
        {
            "Customer": "1500141110",
            "City": "Mumbai",
            "Latitude": "72.8777",
            "Longitude": "19.0760"
        },
        {
            "Customer": "1500141110",
            "City": "Hyderabad",
            "Latitude": "78.4867",
            "Longitude": "17.3850"
        },
    ]

    return (
        <div style={{
            display: 'flex',
            marginTop: "50px",
        }}>
            <ReactTooltip>{content}</ReactTooltip>
            <div style={{
                width: "40%",
            }}>
                <Card 
                    className="prime-card prime-card-community-selected"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title">
                        <GiLoveInjection />
                        Selection
                    </p>
                    <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            {community}
                    </p>
                </Card>
                <Card 
                    className="prime-card prime-card-community-reached"
                    style={{
                        marginBottom: "25px",
                        justifyContent: 'center',
                    }}
                >
                    <p className="p-card-title">
                        <GiLoveInjection />
                        Communities Reached
                    </p>
                    <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            20
                    </p>
                </Card>
                <Card 
                    className="prime-card prime-card-community-donor"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title">
                        <GiLoveInjection />
                        Donors Till Now
                    </p>
                    <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            20
                    </p>
                </Card>
                <Card 
                    className="prime-card prime-card-community-vaccine"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title">
                        <GiLoveInjection />
                        Vaccine Registrations
                    </p>
                    <p className="p-card-subtitle" style={{
                            fontSize: '25px',
                        }}>
                            20
                    </p>
                </Card>
                <Card 
                    className="prime-card prime-card-community-ration"
                >
                    <p className="p-card-title">
                        <MdKitchen />
                        Ration Kits Distributed
                    </p>
                    <p className="p-card-subtitle" style={{
                            fontSize: '25px',
                        }}>
                            20
                    </p>
                </Card>
                <h1 style={{
                    marginTop : '40px',
                    marginLeft: '20px',
                }}>
                    Funds <br/> Summary :
                </h1>
            </div>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                data-tip=""
                viewBox="300 210 230 215"
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                    geographies.map((geography, index) => {
                    //   const current = data.find(s => s.id === geo.id);
                    return (
                        <Geography
                        key={index}
                        geography={geography}
                        fill={"#efefef"}
                        style={{
                            default: {
                            // fill: "#D6D6DA",
                            fill: "#a6a6a6",
                            opacity: 0.4,
                            outline: "none",
                            stroke: "#fff",
                            strokeWidth: 0.3,
                            },
                            hover: {
                            // fill: "#6C757C",
                            fill: "#1EA362",
                            outline: "none",
                            stroke: "#000",
                            strokeWidth: 0.1,
                            },
                            pressed: {
                            fill: "#E42",
                            outline: "none",
                            stroke: "#000",
                            strokeWidth: 0.01,
                            },
                        }}
                        >
                        </Geography>
                    );
                    })
                }
                </Geographies>

                {map_data.map((item , index) => (
                    <Mark 
                        index={index}
                        latitude={item.Latitude}
                        longitude={item.Longitude}
                        city={item.City}
                        setTooltipContent={setContent}
                        setDisplayContent={setCommunityContent}
                    />
                ))
                }
            </ComposableMap>
        </div>
    );
}

export default Map;