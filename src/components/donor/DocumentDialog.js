import React from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function DocumentDialog({ docdialog, setDocDialog }) {

    const DialogFooter = ({setDialog}) => (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
        </div>
    )
    
    return (
        <Dialog 
            header= 'View Uploaded Documents'
            visible={docdialog} 
            onHide={() => setDocDialog(false)}
            style={{width: '50vw'}}
            footer={<DialogFooter setDialog={setDocDialog} />}
        >

        </Dialog>
    );
}

export default DocumentDialog;