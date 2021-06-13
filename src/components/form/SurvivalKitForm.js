import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

function SurvivalKitForm({ skdialog , setSkDialog }) {

    const [questionList , setQuestionList] = useState([
        {
            id: 1,
            question: 'What is your name?',
        }
    ]);

    const handleQuestionAdd = () => {
        setQuestionList(
            [
                ...questionList,
                {
                    id : questionList.length + 1,
                    question: '',
                }
            ]
        )
    }

    const handleQuestionRemove = (id) => {
        setQuestionList(
            questionList.filter(ques => ques.id !== id)
        )
    }

    const handleInputChange = (event, id) => {
        
    }

    const DialogFooter = ({setDialog}) => (
        <div style={{ marginTop: '10px' }}>
            {/* <Button label="Edit" icon="pi pi-user-edit" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' /> */}
            <Button label="Save" icon="pi pi-check" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
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

            <Button label='Add' icon="pi pi-plus" onClick={handleQuestionAdd} style={{ margin: '5px' }} className='p-button-raised p-button-secondary' />
            <div className="p-field">
                {
                    questionList.map((item,index) => (
                        <div key={index}>
                            <label htmlFor={index} className="p-d-block" style={{ margin: '5px' }}>Question </label>
                            <InputText id={index} value={item.question} onChange={(event) => handleInputChange(event , item.id)} className="" style={{ margin: '5px' }}/>
                            <Button label='Remove' icon="pi pi-minus" onClick={() => handleQuestionRemove(item.id)} style={{ margin: '5px' }} className='p-button-raised p-button-secondary' />
                        </div>
                    ))
                }
            </div>

        </Dialog>
    );
}

export default SurvivalKitForm;