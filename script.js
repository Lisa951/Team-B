var AdminPhotoPath = "c:/photos/";
var rownum;
function AdmincreateTable()
{
    var PhotoTable = document.createElement('table');
    PhotoTable.setAttribute('id', 'PhotoTable');            // table Id
    var tr = PhotoTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');          // the header is created here
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(PhotoTable);    // table is appended to the web page 
   
}

function AdminaddRow() {
    var PhotoTab = document.getElementById('PhotoTable');

    var rowCnt = PhotoTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = PhotoTab.insertRow(rowCnt);
    rownum = rowCnt;
    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if (c == 0) { //delete button
            var button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Delete');

            button.setAttribute('onclick', 'AdminremoveRow(this.parentNode.parentNode.rowIndex)');
            td.appendChild(button);
        }
        //**************   Below removed as part of the changes in the table structure */
       // else if (c == 1) // upload a file
        //{
        //    var fil = document.createElement("input");
        //    fil.setAttribute("type", "file");
        //    fil.setAttribute('onchange', 'Adminupdatefunc(this.value, this.parentNode.parentNode.rowIndex)');
        //    td.appendChild(fil);
        //}

        else if (c == 1) //show the thumbnail
        {
            var img = document.createElement('img');
            img.setAttribute('src', AdminPhotoPath + 'NoPicChosen.jpg'); /* initial photo...TBD*/
            img.setAttribute('width', 100);
            td.appendChild(img);
        }
        else { //create a drop down list
            var drp = document.createElement("input");
            drp.setAttribute('type', 'select-one');
            drp.setAttribute('onclick', 'AdminconfigDropDownLists(this.parentNode.parentNode.rowIndex,3)');
            td.appendChild(drp);
        }
    }
    var AddPicToggler = document.getElementById('genfileloader');
    var AddRowToggler = document.getElementById('addRow');
    if (AddPicToggler.style.display == "none") {
        AddPicToggler.style.display = "block"; 
        AddRowToggler.style.display = "none";
        document.getElementById('parline').innerHTML = "Choose a photo";
    }
}

var loadFile = function (event)
{
    var output = document.getElementById('PhotoTable').rows[rownum].cells[1];
    url = URL.createObjectURL(event.target.files[0]);
    output.innerHTML = "<input type ='image' src=" + url + " width='100'>";
    URL.revokeObjectURL(this.src);
};

//**************    Function Removed as part of the changes in the logic   *****/
//function Adminupdatefunc(cel, cc) {
//    var PhotoTab = document.getElementById('PhotoTable');
//    cel = cel.replace(/^C:\\fakepath\\/, AdminPhotoPath);
//    var x = document.getElementById('PhotoTable').rows[parseInt(cc)].cells[2];
//    x.innerHTML = "<input type='image' src=" + cel + " width='100'>";
   /* x.setAttribute('width', 100);*/
    //alert(x.innerHTML);
//}

function AdminconfigDropDownLists(rower, columner) {
    var CatNames = new Array('', 'Canada','England', 'France', 'Germany', 'Greece', 'Italy','Japan','Spain','USA');
    var x = document.getElementById('PhotoTable').rows[rower].cells[2];
    var htmls = '<select>';

    for (i = 0; i < CatNames.length; i++) { 
        htmls += "<option value='" + CatNames[i] + "'>" + CatNames[i] + "</option>";
    }
    htmls += '</select>';
    
    x.innerHTML = htmls;
    var AddPicToggler = document.getElementById('genfileloader');
    var AddRowToggler = document.getElementById('addRow');
    
    if (AddPicToggler.style.display == "block")  {
        AddPicToggler.value="";
        AddPicToggler.style.display = "none"; //.setAttribute('display','block');
        AddRowToggler.style.display = "block";
        document.getElementById('parline').innerHTML = "Click the 'Add New Row' button to add photo.";

    }
}
function AdminremoveRow(rownum) {
    var rowtobedeleted = document.getElementById('PhotoTable');
    rowtobedeleted.deleteRow(rownum);
}


 // check passwords are the same for new user 
            // if then. 
            function confirmPassword(form) { 
                password = form.password.value; 
                repeat = form.repeat.value; 
        
                // If password not entered 
                if (password == '') {
                    alert ("Please enter Password"); 
                    return false;} //extra line added
                      
                // If confirm password not entered 
                else if (repeat == '') {
                    alert ("Please enter confirm password"); 
                    return false;} //extra line added
                      
                // passwords do not match      
                else if (password != repeat) { 
                    alert ("\nPassword did not match: Please try again...") 
                    return false; 
                } 
        
                // password match. 
                else{ 
                    alert("Password Match: Welcome to Molico Travel") 
                    return true; 
                } 
            } 
       
function functionTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function goBack() {
    window.history.back();
  }
