import DataTable, { Alignment } from 'react-data-table-component';

const TableDataTable = ({columns,data,tittle}) => {

    const customStyles = {
        rows: {
            style: {
                minHeight: '45px', // override the row height
                
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                background:'#141213',
                color:'#fff'
            },
        },
        cells: {
            style: {
                paddingLeft: '15px', // override the cell padding for data cells
                paddingRight: '8px',
                
            },
        },
        
    };
    

    return ( 
        <DataTable
        pagination
        columns={columns}
        data={data}
        striped
        pointerOnHover
        title={tittle}
        customStyles={customStyles}
        highlightOnHover
        
        
    />
     );
}
 
export default TableDataTable;