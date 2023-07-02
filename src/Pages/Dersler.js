import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../SideBar';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Ders',
    headerName: 'Ders',
    width: 150,
    editable: true,
  },
  {
    field: 'gorevli',
    headerName: 'Görevli',
    width: 250,
    editable: true,
  },
  {
    field: 'kota',
    headerName: 'Kota',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    
    field: 'kod',
    headerName: 'Kodu',
    description: 'Bu veri değerine göre sıralama uygulanamaz.',
    sortable: false,
    width: 160,
   
  },
];

const rows = [
  { id: 1, gorevli: 'Doç.Dr.İpek Abasıkeleş Turgut', Ders: 'Bilgisayar Ağları', kota: 35 , kod: 1123624},
  { id: 2, gorevli: 'Doç.Dr.Gökhan Altan', Ders: 'Yapay Zeka', kota: 30 ,kod: 1123717 },
  { id: 3, gorevli: 'Doç.Dr.İpek Abasıkeleş Turgut', Ders: 'Bilgisayar Mimarisi', kota: 35, kod: 1123509 },
  { id: 4, gorevli: 'Dr.Öğr.Üyesi Ahmet Gökçen', Ders: 'Sayısal Tasarım II', kota: 30 , kod:1123408},
  { id: 5, gorevli: 'Doç.Dr.Gökhan Altan', Ders: 'Nesne Tabanlı Programlama', kota: 45, kod: 1123517 },
  { id: 6, gorevli: 'Doç.Dr.İpek Abasıkeleş Turgut', Ders: 'Mikroişlemciler', kota: 45, kod : 1123616},
  { id: 7, gorevli: 'Doç.Dr.Yakup Kutlu', Ders: 'Web Tabanlı Programlama', kota: 25, kod:1123622 },
  { id: 8, gorevli: 'Dr.Öğr.Üyesi Levent Karacan', Ders: 'Tasarım ve Animasyon', kota: 40, kod:1123731 },
  { id: 9, gorevli: 'Doç.Dr.Yakup Kutlu', Ders: 'Sayısal Görüntü İşleme', kota: 0, kod:1123804 },
];

export default function DataGridDemo() {
  return (
   <div>
    <SideBar></SideBar>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
       
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        isRowSelectable={(param) => param.row.kota > 0}
        checkboxSelection
        disableRowSelectionOnClick
       
      />
    </Box>  </div>
  );
}