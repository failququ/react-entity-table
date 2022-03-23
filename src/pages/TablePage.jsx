import { observer } from 'mobx-react-lite';
import React from 'react';
import EntityManageForm from '../components/EntityManageForm';
import { ManagingFormBlock, TableBlock } from '../components/style';
import Table from '../components/Table';

const TablePage = observer(() => {
    return (
        <>
        <TableBlock>
            <Table/>
        </TableBlock>

        <ManagingFormBlock>
            <EntityManageForm/>
        </ManagingFormBlock>

        </>
    );
});

export default TablePage;