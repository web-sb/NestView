$(document).ready(function () {

    $("#logoutButton").click(function () {
        $.ajax({
            url: '/api/host',
            type: 'DELETE',
            success: function (result) {
                location.href = result.next;
            }
        });
    });
});
