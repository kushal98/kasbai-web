import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

function PHForm({ phdialog, setPhDialog }) {
    const [questionList , setQuestionList] = useState([
        {
            id: 1,
            question: "",
        }
    ]);

    const handleQuestionAdd = () => {
        setQuestionList(
            [
                ...questionList,
                {
                    id : questionList.length + 1,
                    question: "",
                }
            ]
        )
    }


    const DialogFooter = ({setDialog}) => (
        <div>
            <Button label="Save" icon="pi pi-check" onClick={() => setDialog(false)} className='p-button-raised p-button-secondary' />
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
            {console.log('updated List ', questionList)}
            <Button label='Add' icon="pi pi-plus" onClick={handleQuestionAdd} style={{ margin: '5px' }} className='p-button-raised p-button-secondary' />
            <div className="p-field p-dialog-content" style={{ overflow: 'scroll' }}>
                {
                    questionList.map((item,index) => {
                        return <div key={index}>
                            <label htmlFor={index} className="p-d-block" style={{ margin: '5px' }}>{"Question " } </label>
                            <InputText 
                                value={item.question} 
                                onChange={(event) => 
                                    setQuestionList(prev => {
                                        var cur = prev.map(x => Object.assign({}, x));
                                        var curQues = { question: event.target.value ,id: item.id}
                                        cur[index] = curQues
                                        return cur
                                    })
                                } 
                                className="question" 
                                style={{ margin: '5px' , width: '80%' }}
                            />
                            <Button 
                                label='Remove' 
                                icon="pi pi-minus" 
                                style={{ margin: '5px' }} 
                                className='p-button-raised p-button-secondary'
                                onClick={() => {
                                    setQuestionList(prev => {
                                      var cur= prev.map(x => Object.assign({}, x));
                                      cur.splice(index, 1)
                                      return cur
                                    })
                                  }} 
                                />
                        </div>
                    })
                }
            </div>
        </Dialog>
    );
}

export default PHForm;