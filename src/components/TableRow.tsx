import React from 'react';
import entityManageFormStore from '../store/entityManageForm';
import {Tr, Td, ChangeDataButton, DeleteDataButton, EntityImage} from './style';
import { TTableRow } from './types';
import changeIcon from '../assets/icons/change-icon.png'
import deleteIcon from '../assets/icons/delete-icon.png'
import { observer } from 'mobx-react-lite';




const TableRow = observer(({id, model, price, color, diagonal, date, photo} : TTableRow) => {

    return (
                <Tr>
                    <Td>{date}</Td>
                    <Td><EntityImage src={photo} alt="No photo :("></EntityImage></Td>
                    <Td>{model}</Td>
                    <Td>{price} руб.</Td>
                    <Td>{color}</Td>
                    <Td>{diagonal} "</Td>
                    <td><ChangeDataButton 
                    onClick={() => {entityManageFormStore.changeTableData(id)}}><img src={changeIcon} alt='Change'></img></ChangeDataButton></td>
                    <td><DeleteDataButton 
                    onClick={() => {entityManageFormStore.deleteEntity(id)}}><img src={deleteIcon} alt='Delete'></img></DeleteDataButton></td>
                </Tr>
    );
});

export default TableRow;