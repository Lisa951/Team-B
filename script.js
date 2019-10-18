var AdminPhotoPath = "c:/photos/";
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
        else if (c == 1) // upload a file
        {
            var fil = document.createElement("input");
            fil.setAttribute("type", "file");
            fil.setAttribute('onchange', 'Adminupdatefunc(this.value, this.parentNode.parentNode.rowIndex)');
            td.appendChild(fil);
        }

        else if (c == 2) //show the thumbnail
        {
            var img = document.createElement('img');
            img.setAttribute('src', AdminPhotoPath + 'thumb1.jpg'); /* initial photo...TBD*/
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
}

function Adminupdatefunc(cel, cc) {
    var PhotoTab = document.getElementById('PhotoTable');
    cel = cel.replace(/^C:\\fakepath\\/, AdminPhotoPath);
    var x = document.getElementById('PhotoTable').rows[parseInt(cc)].cells[2];
    x.innerHTML = "<input type='image' src=" + cel + " width='100'>";
   /* x.setAttribute('width', 100);*/
    //alert(x.innerHTML);
}

function AdminconfigDropDownLists(rower, columner) {
    //alert(rower);
    var CatNames = new Array('', 'Sports', 'Pets', 'Travel', 'Nature');
    var x = document.getElementById('PhotoTable').rows[rower].cells[3];
    var htmls = '<select>';

    for (i = 0; i < CatNames.length; i++) { //alert(i);
        htmls += "<option value='" + CatNames[i] + "'>" + CatNames[i] + "</option>";
    }
    htmls += '</select>';
    //alert(htmls);
    x.innerHTML = htmls;
    //alert(x);
}
function AdminremoveRow(rownum) {
   // alert(rownum);
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
