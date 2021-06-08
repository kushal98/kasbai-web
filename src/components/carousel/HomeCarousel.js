import React from 'react';

import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

import './HomeCarousel.css';

function HomeCarousel(props) {

      const campaigns = [
        {"id": "1000","name": "Food Packet Distribution","image": "https://www.indiagainstcorona.com/06373603ffdc0bcc7e79908efab9e31c.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive."},
        {"id": "1001","name": "O2 Concentrators","image": "http://www.theupasana.org/wp-content/uploads/2016/10/ME-YOU-THEM-UPASANA-Society-NGO-HEALTH-CAMPAIGN-860x500.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive"},
        {"id": "1002","name": "Corona Kit","image": "https://www.indiagainstcorona.com/da1d01fb4e64d81dc858562df81751c1.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive"},
        {"id": "1003","name": "Home Essentials Distribution","image": "https://www.indiagainstcorona.com/3a892072ef0e5dc95d65dc5ecd79c430.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive"},
        {"id": "1004","name": "Vaccine Awareness","image": "http://www.theupasana.org/wp-content/uploads/2016/10/ME-YOU-THEM-UPASANA-Society-NGO-HEALTH-CAMPAIGN-860x500.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive"},
        {"id": "1005","name": "Medical Consultation","image": "https://www.indiagainstcorona.com/da1d01fb4e64d81dc858562df81751c1.jpg","description": "COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive"},
        ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const campaignTemplate = (campaign) => {
        return (
            <Card style={{ 
                margin: '10px', 
                // border: '3px dashed #676767', 
                borderBottom: '2px solid #676767', 
            }}>
                <div className="product-item">
                    <div className="product-item-content">
                        <div className="p-mb-3 campaign-image">
                            <img src={`${campaign.image}`} width="100%" height="300px" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={campaign.name} className="product-image" />
                        </div>
                        <div>
                            <h4 className="p-mb-1">{campaign.name}</h4>
                            <span className={`product-badge status-${campaign.description}`}>{campaign.description}</span>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <div style={{
            marginTop: "20px",
        }}>
            <Carousel 
                value={campaigns} 
                numVisible={3} 
                numScroll={1} 
                circular={true} 
                responsiveOptions={responsiveOptions}
                itemTemplate={campaignTemplate} 
            />
        </div>
    );
}

export default HomeCarousel;