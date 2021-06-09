import React from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function SurvivalKitForm({ skdialog , setSkDialog }) {

    const DialogFooter = ({setDialog}) => (
        <div>
            <Button label="Edit" icon="pi pi-user-edit" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary'  />
            <Button label="Cancel" icon="pi pi-times" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
        </div>
    )

    return (
        <Dialog 
            header= 'Survival Kit Form'
            visible={skdialog} 
            onHide={() => setSkDialog(false)}
            style={{width: '50vw'}}
            footer={<DialogFooter setDialog={setSkDialog} />}
        >

        </Dialog>
    );
}

export default SurvivalKitForm;