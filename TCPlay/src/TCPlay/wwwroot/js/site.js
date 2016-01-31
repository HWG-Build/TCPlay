// Write your Javascript code.
$(document).ready(function () {
    $('.dragme').draggable({ helper: 'clone' });
})

function addPlayerField() {
    $('#playerField').removeClass('hidden');
}

$('#playerName').on('click keypress', function (e) {
    if (e.keyCode == '13') {
        if ($(this).val() != null || !this.val().Equals("")) {
            var newDiv1 = $("<div class='table-bordered panel-heading text-center names-text dragme player'/>");
            var newDiv2 = $("div");
            var player = $(this).val();
            $('#playerList').append('<div class="table-bordered panel-heading text-center names-text dragme player">' + player + '</div>');
            $('#playerField').addClass('hidden');
            $('#playerName').val("");
        }
        else {
            return window.alert("Please enter a name");
        }
    }
    return;
});

function removePlayer() {

}