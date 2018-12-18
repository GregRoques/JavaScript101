$(document).ready(()=>{

    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm);

$('.stock-form').submit((event)=>{
    // must stop the form from sendig the form to another page
    event.preventDefault();
    console.log(event);
    
    const symbol =  $("#symbol").val();
    console.log(symbol);

    const url=`https://api.iextrading.com/1.0/stock/${symbol}/quote`
    // getJASON takes 2 functions...where to get JSON, and function to run when I'm back
       
        $.getJSON(url,(theDataJSFoundIfAny)=>{
            console.log(theDataJSFoundIfAny)
            $('#stock-body').html(`
                <tr>
                    <td>${theDataJSFoundIfAny.symbol}</td>
                    <td>${theDataJSFoundIfAny.companyName}</td>
                    <td>${theDataJSFoundIfAny.high}</td>
                    <td>${theDataJSFoundIfAny.low}</td>
                    <td>${theDataJSFoundIfAny.change}</td>
                </tr>
            `)
        })
    })
})


