
function validation(values){
    alert("")
    let error = {}
     const ogrID_pattern=/^[^\s@]+@[^\s@]+\[^\s@] +$/
     const sifre_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        

     if(values.ogrID=== ""){
        error.ogrID="Öğrenci Nummarası boş olamaz."

     }

     else if(!ogrID_pattern.test(values.ogrID)) {
        error.ogrID="Böyle bir öğrenci bulunmamaktadır"
     }
     else{
        error.ogrID=""
     }

     if(values.sifre===""){
        error.sifre="Şifre boş bırakılamaz"
     }
     else if(!sifre_pattern.test(values.sifre)) {
        error.sifre="Hatalı Şifre"
     }
     else
      error.ogrID=""

      return error;
     
    }

    export default validation