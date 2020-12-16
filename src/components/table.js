import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import markerData from '../data/markerData'




const columns = [
  { field: 'id', headerName: 'NO', width: 70 },
  { field: 'mediname', headerName: '기관 이름', width: 150 },
  { field: 'Able', headerName: '수거함 사용 가능 여부', width: 180 },
  

];

const rows = [
  { id: 1, Able: '여유', mediname: ''},
  { id: 2, Able: '포화', mediname: '푸른약국'},
  { id: 3, Able: '초과', mediname: '피엠약국'},
  { id: 4, Able: '초과', mediname: '보림당약국'},
  { id: 5, Able: '초과', mediname: '팜약국'},
 
];

function con(){
  
}

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '80%', margin:'auto' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
