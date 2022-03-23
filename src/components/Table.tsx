import React from 'react';
import TableRow from './TableRow';
import { useEffect } from 'react';
import axios from 'axios';
import {TTableRow} from './types';
import entityManageFormStore from '../store/entityManageForm';
import { observer } from 'mobx-react-lite';

const Table = observer(() => {

    useEffect(() => {
        axios.get('http://localhost:3002/entities')
        .then(res => entityManageFormStore.tableData = res.data)
    }, [])

    return (
        
            <table>
                    <tbody>
                    <tr>
                        <th>Дата</th>
                        <th>Фото</th>
                        <th>Модель</th>
                        <th>Цена</th>
                        <th>Цвет</th>
                        <th>Диагональ</th>
                    </tr>
                    {entityManageFormStore.tableData.map((item: TTableRow) => 
                        <TableRow key = {item.id}
                        id={item.id} 
                        model = {item.model} 
                        price = {item.price}
                        color = {item.color}
                        diagonal = {item.diagonal}
                        date = {item.date}
                        photo = {item.photo}
                        />)}
                </tbody>
            </table>

    );
});

export default Table;