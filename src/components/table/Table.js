import React from 'react';

import { Table} from "react-bootstrap";

function TableC(props) {

  const data = [
    {
        "No.": "1",
        "CITY": "MADHYA PRADESH",
        "COMMUNITY NAME": "Korku Tribe",
        "TOTAL OUTREACH": "3000",
        "TOTAL INDIVIDUALS (RATION KITS)": "1250",
        "TOTAL VACCINE REGISTRATIONS": "110",
        "NO. (HEALTH CARE)": "1200"
    },
    {
        "No.": "2",
        "CITY": "UTTARPRADESH'S",
        "COMMUNITY NAME": "Kol,Mawasi, Kuchbandhiya Tribal Community",
        "TOTAL OUTREACH": "4000",
        "TOTAL INDIVIDUALS (RATION KITS)": "650",
        "TOTAL VACCINE REGISTRATIONS": "85",
        "NO. (HEALTH CARE)": "2415"
    },
    {
        "No.": "3",
        "CITY": "WEST BENGAL",
        "COMMUNITY NAME": "Sex Worker Families",
        "TOTAL OUTREACH": "3500",
        "TOTAL INDIVIDUALS (RATION KITS)": "1000",
        "TOTAL VACCINE REGISTRATIONS": "70",
        "NO. (HEALTH CARE)": "650"
    },
    {
        "No.": "4",
        "CITY": "RAJASTHAN'S",
        "COMMUNITY NAME": "Bunkar Community",
        "TOTAL OUTREACH": "3000",
        "NO. (HEALTH CARE)": "600"
    },
    {
        "No.": "5",
        "CITY": "HARYANA'S",
        "COMMUNITY NAME": "Banjara Community",
        "TOTAL OUTREACH": "5000",
        "TOTAL INDIVIDUALS (RATION KITS)": "2500"
    },
    {
        "No.": "6",
        "CITY": "UTTRAKHAND'S",
        "COMMUNITY NAME": "Van Gujjars And Women'S Group",
        "TOTAL OUTREACH": "3000",
        "TOTAL INDIVIDUALS (RATION KITS)": "500"
    },
    {
        "No.": "7",
        "CITY": "ASSAM",
        "COMMUNITY NAME": "Tea Estate Workers",
        "TOTAL OUTREACH": "1250",
        "TOTAL INDIVIDUALS (RATION KITS)": "500"
    },
    {
        "No.": "8",
        "CITY": "BIHAR'S",
        "COMMUNITY NAME": "Mushahar",
        "TOTAL OUTREACH": "4000",
        "TOTAL INDIVIDUALS (RATION KITS)": "500",
        "NO. (HEALTH CARE)": "600"
    },
    {
        "No.": "9",
        "CITY": "JHARKHAND'S",
        "COMMUNITY NAME": "Asur,Birhor, Korwa,Kharia And Ho Tribal Communities"
    },
    {
        "No.": "10",
        "CITY": "ORISSA'S",
        "COMMUNITY NAME": "Santhal And Ho Tribal Communities"
    },
    {
        "No.": "11",
        "CITY": "CHATTISGARH'S",
        "COMMUNITY NAME": "Coal Labourers,Kondh, Kawar,Paikar, Binjwar,Bariha,Savar,Basor And Karra Tribal Communities",
        "TOTAL OUTREACH": "5000"
    },
    {
        "No.": "12",
        "CITY": "ANDHRA PRADESH'S",
        "COMMUNITY NAME": "Fishing Community",
        "TOTAL OUTREACH": "1500"
    },
    {
        "No.": "13",
        "CITY": "TELANGANA",
        "COMMUNITY NAME": "Bhil Tribe",
        "TOTAL OUTREACH": "5000",
        "TOTAL INDIVIDUALS (RATION KITS)": "500"
    },
    {
        "No.": "14",
        "CITY": "KARNATAKA",
        "COMMUNITY NAME": "Bhil,Konda,Karya, Siddi,Kammara, Kaniyan"
    },
    {
        "No.": "15",
        "CITY": "MAHARASHTRA",
        "COMMUNITY NAME": "Migrant Families"
    },
    {
        "No.": "16",
        "CITY": "GUJARAT'S",
        "COMMUNITY NAME": "Sabarkantha Widows",
        "TOTAL OUTREACH": "1500",
        "TOTAL INDIVIDUALS (RATION KITS)": "100",
        "NO. (HEALTH CARE)": "450"
    }
];

    return (
        <div>
            <Table  hover>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Community Name</th>
                  <th>Total Outreach </th>
                  <th>Total Individual Ration Kits </th>
                  <th>Total Vaccine </th>
                  <th>Total Health Care Facility </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item,index)=> (
                    <tr>
                      <td>{item["CITY"]}</td>
                      <td>{item["COMMUNITY NAME"]}</td>
                      <td>{item["TOTAL OUTREACH"]}</td>
                      <td>{item["TOTAL INDIVIDUALS (RATION KITS)"]}</td>
                      <td>{item["TOTAL VACCINE REGISTRATIONS"]}</td>
                      <td>{item["NO. (HEALTH CARE)"]}</td>
                    </tr>
                  ))
                }
                {/* <tr>
                  <td>Rajasthan</td>
                  <td>Kit </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Gujarat</td>
                  <td>Covid Care</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Kerela</td>
                  <td>Primary Healthcare</td>
                  <td>40</td>
                </tr> */}
              </tbody>
            </Table>
        </div>
    );
}

export default TableC;