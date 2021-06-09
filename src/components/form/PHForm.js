import React from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function PHForm({ phdialog, setPhDialog }) {

    const DialogFooter = ({setDialog}) => (
        <div>
            <Button label="Edit" icon="pi pi-user-edit" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary'  />
            <Button label="Cancel" icon="pi pi-times" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
        </div>
    )

    return (
        <Dialog 
            header= 'Primary Healthcare Form'
            visible={phdialog} 
            onHide={() => setPhDialog(false)}
            style={{width: '50vw'}}
            footer={<DialogFooter setDialog={setPhDialog} />}
        >

        </Dialog>
    );
}

export default PHForm;