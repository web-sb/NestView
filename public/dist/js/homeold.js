$(document).ready(function () {
    $("logout").click(function () {
    $.ajax({
        url: '/api/host/delete',
        type: 'DELETE',
        success: function (result) {
            location.href = result.next;
        }
    });
});
});
