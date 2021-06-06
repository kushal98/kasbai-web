import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import './DataTable.css';

const DataTableDemo = () => {

    // const data = [
    //     {
    //         "id": 1000,
    //         "name": "James Butt",
    //         "country": {
    //         "name": "Algeria",
    //         "code": "dz"
    //         },
    //         "company": "Benton, John B Jr",
    //         "date": "2015-09-13",
    //         "status": "unqualified",
    //         "activity": 17,
    //         "representative": {
    //         "name": "Ioni Bowcher",
    //         "image": "ionibowcher.png"
    //         }
    //     },
    //     {
    //         "id": 1001,
    //         "name": "Josephine Darakjy",
    //         "country": {
    //         "name": "Egypt",
    //         "code": "eg"
    //         },
    //         "company": "Chanay, Jeffrey A Esq",
    //         "date": "2019-02-09",
    //         "status": "proposal",
    //         "activity": 0,
    //         "representative": {
    //         "name": "Amy Elsner",
    //         "image": "amyelsner.png"
    //         }
    //     },
    //     {
    //         "id": 1002,
    //         "name": "Art Venere",
    //         "country": {
    //         "name": "Panama",
    //         "code": "pa"
    //         },
    //         "company": "Chemel, James L Cpa",
    //         "date": "2017-05-13",
    //         "status": "qualified",
    //         "activity": 63,
    //         "representative": {
    //         "name": "Asiya Javayant",
    //         "image": "asiyajavayant.png"
    //         }
    //     },
    //     {
    //         "id": 1003,
    //         "name": "Lenna Paprocki",
    //         "country": {
    //         "name": "Slovenia",
    //         "code": "si"
    //         },
    //         "company": "Feltz Printing Service",
    //         "date": "2020-09-15",
    //         "status": "new",
    //         "activity": 37,
    //         "representative": {
    //         "name": "Xuxue Feng",
    //         "image": "xuxuefeng.png"
    //         }
    //     },
    //     {
    //         "id": 1004,
    //         "name": "Donette Foller",
    //         "country": {
    //         "name": "South Africa",
    //         "code": "za"
    //         },
    //         "company": "Printing Dimensions",
    //         "date": "2016-05-20",
    //         "status": "proposal",
    //         "activity": 33,
    //         "representative": {
    //         "name": "Asiya Javayant",
    //         "image": "asiyajavayant.png"
    //         }
    //     },
    //     {
    //         "id": 1005,
    //         "name": "Simona Morasca",
    //         "country": {
    //         "name": "Egypt",
    //         "code": "eg"
    //         },
    //         "company": "Chapman, Ross E Esq",
    //         "date": "2018-02-16",
    //         "status": "qualified",
    //         "activity": 68,
    //         "representative": {
    //         "name": "Ivan Magalhaes",
    //         "image": "ivanmagalhaes.png"
    //         }
    //     },
    //     {
    //         "id": 1006,
    //         "name": "Mitsue Tollner",
    //         "country": {
    //         "name": "Paraguay",
    //         "code": "py"
    //         },
    //         "company": "Morlong Associates",
    //         "date": "2018-02-19",
    //         "status": "renewal",
    //         "activity": 54,
    //         "representative": {
    //         "name": "Ivan Magalhaes",
    //         "image": "ivanmagalhaes.png"
    //         }
    //     },
    //     {
    //         "id": 1007,
    //         "name": "Leota Dilliard",
    //         "country": {
    //         "name": "Serbia",
    //         "code": "rs"
    //         },
    //         "company": "Commercial Press",
    //         "date": "2019-08-13",
    //         "status": "renewal",
    //         "activity": 69,
    //         "representative": {
    //         "name": "Onyama Limba",
    //         "image": "onyamalimba.png"
    //         }
    //     },
    //     {
    //         "id": 1008,
    //         "name": "Sage Wieser",
    //         "country": {
    //         "name": "Egypt",
    //         "code": "eg"
    //         },
    //         "company": "Truhlar And Truhlar Attys",
    //         "date": "2018-11-21",
    //         "status": "unqualified",
    //         "activity": 76,
    //         "representative": {
    //         "name": "Ivan Magalhaes",
    //         "image": "ivanmagalhaes.png"
    //         }
    //     }
    // ]

    const data1 =[ 
        {
            "id" : "1",
            "phone" : "+91 9548179238",
            "role" : "Volunteer",
            "region" : "Gujarat",
            "date" : "2020-09-13",
        },
        {
            "id" : "2",
            "phone" : "+91 8548179838",
            "role" : "Volunteer",
            "region" : "Gujarat",
            "date" : "2021-01-23",
        },
        {
            "id" : "3",
            "phone" : "+91 9548479238",
            "role" : "Volunteer",
            "region" : "Gujarat",
            "date" : "2021-05-01",
        },
        {
            "id" : "4",
            "phone" : "+91 9048171238",
            "role" : "Volunteer",
            "region" : "Mizoram",
            "date" : "2021-04-10",
        },
        {
            "id" : "5",
            "phone" : "+91 7548139238",
            "role" : "Approver",
            "region" : "Kerela",
            "date" : "2021-06-04",
        },
        {
            "id" : "6",
            "phone" : "+91 9548179238",
            "role" : "Donor",
            "region" : "Rajasthan",
            "date" : "2015-09-13",
        },
        {
            "id" : "6",
            "phone" : "+91 9508179238",
            "role" : "Donor",
            "region" : "Maharastra",
            "date" : "2015-09-13",
        },
        {
            "id" : "7",
            "phone" : "+91 6548279238",
            "role" : "Approver",
            "region" : "Telangana",
            "date" : "2015-09-13",
        },
    ];

    const [customers, setCustomers] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const dt = useRef(null);

    const statuses = [
        'Volunteer', 'Approver', 'Donor'
    ];


    useEffect(() => {
        // customerService.getCustomersLarge().then(data => setCustomers(data));
        setCustomers(data1)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    }

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', 'custom');
        setSelectedDate(e.value);
    }

    const onStatusChange = (e) => {
        dt.current.filter(e.value, 'role', 'equals');
        setSelectedStatus(e.value);
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Phone No.</span>
                {rowData.phone}
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Region</span>
                <span className="image-text">{rowData.region}</span>
            </React.Fragment>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Role</span>
                <span className={`customer-badge status-${rowData.role}`}>{rowData.role}</span>
            </React.Fragment>
        );
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    const reset = () => {
        setSelectedDate(null);
        setSelectedStatus(null);
        setGlobalFilter('');
        dt.current.reset();
    }

    const header = (
        <div className="table-header">
            <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    const dateFilter = <Calendar value={selectedDate} onChange={onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
    const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={onStatusChange} itemTemplate={statusItemTemplate} placeholder="Select a Role" className="p-column-filter" showClear />;

    return (
        <div className="datatable-filter-demo">
            <div className="card">
                <DataTable ref={dt} value={customers} paginator rows={10}
                    header={header} className="p-datatable-customers"
                    globalFilter={globalFilter} emptyMessage="No customers found.">
                    <Column field="name" header="Phone No" body={nameBodyTemplate} filter filterPlaceholder="Search by Number" />
                    <Column field="region" header="Region" body={representativeBodyTemplate} filter filterPlaceholder="Search by Region"  />
                    <Column field="date" header="Registration Date" body={dateBodyTemplate} filter filterElement={dateFilter} filterFunction={filterDate} />
                    <Column field="role" header="Role" body={statusBodyTemplate} filter filterElement={statusFilter}/>
                </DataTable>
            </div>
        </div>
    );
}

export default DataTableDemo;