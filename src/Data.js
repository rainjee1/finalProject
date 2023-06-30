
import React,{ useEffect, useState } from "react";


 export default function MyComponent() {

  const [userData, setUserdata]= useState([]); 
  useEffect( ()=>{
      const getUserdata= async()=>{
          const reqData= await fetch("http://localhost:3306/api/notlar");
          const resData= await reqData.json();
          setUserdata(resData);
         // console.log(resData);
      }
      getUserdata();
  },[]);





    return (
      <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Ders No</th>
          <th scope="col">Ders</th>
          <th scope="col">Vize</th>
          <th scope="col">Final</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    );
};
