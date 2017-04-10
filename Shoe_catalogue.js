//var temp =document.getElementById('.template')
//var size= document.querySelectorAll('.size')
//var color =document.querySelectorAll('.color')
//var brandy =document.querySelectorAll('.brand')

    function Table() {
      var shoes = [
              {
                  Color : 'blue',
                  Price : 350,
                  In_stock : 5,
                  Size : 5,
                  Brand : 'Nike'
                },






              {
                  Color : 'black',
                  Price : 275,
                  In_stock : 3,
                  Size : 7,
                  Brand : 'Adidas'


              },
              {
                  Color : 'Navy',
                  Price : 275,
                  In_stock : 3,
                  Size : 3,
                  Brand : 'Sissy Boy'


              },
              {
                  Color : 'White',
                  Price : 1275,
                  In_stock : 12,
                  Size : 7,
                  Brand : 'Batman'

              },
              {
                  Color : 'Pink',
                  Price : 905,
                  In_stock : 12,
                  Size : 7,
                  Brand : 'Timberland'

              },

              {
                  Color : 'Grey',
                  Price : 2905,
                  In_stock : 12,
                  Size : 6,
                  Brand : 'Asics'


              },
              {
                  Color : 'White',
                  Price : 805,
                  In_stock : 12,
                  Size : 7,
                  Brand : 'Vans'

              },

      ];


        // EXTRACT VALUE FOR HTML HEADER.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < shoes.length; i++) {
            for (var key in shoes[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < shoes.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = shoes[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
