import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import * as React from 'react';
import { useState } from 'react';

const MainPage = () => {
    // const [pageSize, setPageSize] = useState(9);

    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //     maxColumns: 3
    // });

    // const myData = {
    //     name: "Name",
    //     content: "Content"
    // }

    return(
        <div style={{ height: "590px", width: '100%'}}>
            {/* <DataGrid
                // pageSize={pageSize}
                // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pagination
                {...myData}
            /> */}
        </div>
    )
};

export default MainPage