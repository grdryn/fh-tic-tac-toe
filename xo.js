function game() {

    var player = "X"; // first player gets to be X

    // Basic click handler to change to X or O depending on player
    $(".game-cell").click(function() {
        $(this).text(player);
        player = switch_player(player);
    });

}

// Player changes after each turn
function switch_player(player) {
    if (player === "X") {
        player = "O";
    } else {
        player = "X"
    }
    return player;
}
