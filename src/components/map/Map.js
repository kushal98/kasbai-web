import React, {useState} from 'react';

import { Row, Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap'
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

    const INDIA_TOPO_JSON = require('../../assets/map/india.topo.json');

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
            <Col lg={4} md={12} sm={12}>
            <div style={{
                // width: "40%",
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
                    className="prime-card prime-card-survival-kit"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <GiLoveInjection />
                        Survival Kits
                    </p>
                    {/* <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                            marginBottom: '30px'
                        }}>
                            20K
                    </p> */}
                    <OverlayTrigger
                        key={'top'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                <b>Target : </b> 50k Individuals<br />
                                <b>Achieved till now : </b> 20k
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={40} label={"40 %"} bsPrefix="sk" />
                    </OverlayTrigger>
                    
                </Card>
                <Card 
                    className="prime-card prime-card-community-vaccine"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <GiLoveInjection />
                        Vaccine Registrations
                    </p>
                    {/* <p className="p-card-subtitle" style={{
                            fontSize: '25px',
                        }}>
                            60K
                    </p> */}

                    <OverlayTrigger
                        key={'top'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                <b>Target : </b> 100k Individuals<br />
                                <b>Achieved till now : </b> 60k
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={60} label={"60 %"} bsPrefix="cv" />
                    </OverlayTrigger>
                </Card>
                <Card 
                    className="prime-card prime-card-ph-connect"
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <MdKitchen />
                        Primary Health Connectivity
                    </p>
                    {/* <p className="p-card-subtitle" style={{
                            fontSize: '25px',
                        }}>
                            5K 
                    </p> */}

                    <OverlayTrigger
                        key={'top'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                <b>Target : </b> 10k Families <br />
                                <b>Achieved till now : </b> 5K
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={50} label={"50 %"} bsPrefix="ph" />
                    </OverlayTrigger>
                </Card>
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                    <h1 style={{
                        marginTop : '40px',
                        marginLeft: '20px',
                    }}>
                        Impacted  Areas :
                    </h1>
                </div>
            </div>
            </Col>
            <Col lg={8} md={12} sm={12} className="map-col">
                <Row>
                    <ComposableMap
                        projectionConfig={PROJECTION_CONFIG}
                        projection="geoMercator"
                        data-tip=""
                        viewBox="250 200 320 220"
                        style={{
                            marginTop : '-100px'
                        }}
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
                </Row>
                <Row>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Card 
                            className="prime-card prime-card-ph-connect"
                        >
                            <p className="p-card-title">
                                1000+
                            </p>
                            <p className="p-card-subtitle" style={{
                                    fontSize: '25px',
                                }}>
                                    Frontliners
                            </p>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className="prime-card prime-card-ph-connect"
                        >
                            <p className="p-card-title">
                                200k
                            </p>
                            <p className="p-card-subtitle" style={{
                                    fontSize: '25px',
                                }}>
                                    Families
                            </p>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className="prime-card prime-card-ph-connect"
                        >
                            <p className="p-card-title">
                                80+
                            </p>
                            <p className="p-card-subtitle" style={{
                                    fontSize: '25px',
                                }}>
                                    Communities
                            </p>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className="prime-card prime-card-ph-connect"
                        >
                            <p className="p-card-title">
                                16
                            </p>
                            <p className="p-card-subtitle" style={{
                                    fontSize: '25px',
                                }}>
                                States
                            </p>
                        </Card>
                    </div>
                </div>
                </Row>
            </Col>
            
        </div>
    );
}

export default Map;