
function validation(values){
    
    let error = {}
     const ogrNo_pattern=/^(?=.*[0-9])$/
     const email_pattern=/^[^\s@]+@[^\s@]+\[^\s@] +$/
     const sifre_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
     const sifre2_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        

     if(values.ogrNo=== ""){
        error.ogrNo="Öğrenci Nummarası boş olamaz."

     }

     else if(!ogrNo_pattern.test(values.ogrNo)) {
        error.ogrNo="Böyle bir öğrenci bulunmamaktadır"
     }
     else{
        error.ogrNo=""
     } 

     if(values.email=== ""){
      error.email="Öğrenci Maili boş olamaz."

   }

   else if(!email_pattern.test(values.ogrNo)) {
      error.email="Böyle bir öğrenci bulunmamaktadır"
   }
   else{
      error.email=""
   }

     if(values.sifre===""){
        error.sifre="Şifre boş bırakılamaz"
     }
     else if(!sifre_pattern.test(values.sifre)) {
        error.sifre="Hatalı Şifre"
     }
     else
      error.ogrID=""

      if(values.sifre2===""){
         error.sifre2="Şifre boş bırakılamaz"
      }
      else if(!sifre2_pattern.test(values.sifre)) {
         error.sifre2="Hatalı Şifre"
      }
      else
       error.ogrID=""
 


      return error;
     
    }

    export default validation