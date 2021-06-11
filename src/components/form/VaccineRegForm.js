import React from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function VaccineRegForm({ vrdialog, setVrDialog }) {

    const DialogFooter = ({setDialog}) => (
        <div>
            <Button label="Edit" icon="pi pi-user-edit" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
            <Button label="Save" icon="pi pi-check" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
            <Button label="Cancel" icon="pi pi-times" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
        </div>
    )

    return (
        <Dialog 
            header= 'Vaccine Registration Form'
            visible={vrdialog} 
            onHide={() => setVrDialog(false)}
            style={{width: '50vw'}}
            footer={<DialogFooter setDialog={setVrDialog} />}
        >

        </Dialog>
    );
}

export default VaccineRegForm;