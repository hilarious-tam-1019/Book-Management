function sortTableByColumns(table,column, asc = true) {

    const dirModifier = asc ? 1 : -1


    //grab the tBody in table
    const tBody = table.tBodies[0]

    //selecting every rows element and make sure that it is in an array
    const rows = Array.from(tBody.querySelectorAll("tr"))

    //sort each row
    const sortedRows = rows.sort((a,b) => {
        const aColText = a.querySelector('')
    })
}

sortTableByColumns(document.querySelector('table'),1)

