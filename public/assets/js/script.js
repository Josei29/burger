$("document").ready( function() {
    // Getting all the data from MySql
    function getAll() {
        $.get("/", function(response) {
            console.log(response);
        });
    }

    // When user clicks the Devour it button
    $(".devour").on("click", function() {
        var id = $(this).data("burgerid");
        // Ajax call to make the update
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + id,
        }).done(getAll); 
            location.reload();
    });
});