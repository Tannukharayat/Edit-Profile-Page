import React from 'react';
import { useParams } from 'react-router-dom';
import Edit_page from './Edit_page';
function EditUserComponent(){
      let idd:any;
      idd = useParams();
      return(
          <div>
                
                <Edit_page idd={idd.id} />
          </div>
      );
}

export default EditUserComponent;