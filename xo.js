var boardIds = new Array(
        "colarow1", "colbrow1", "colcrow1",
        "colarow2", "colbrow2", "colcrow2",
        "colarow3", "colbrow3", "colcrow3"
);


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

//Get the values from the cells IDs (boardIds)
function getBoardValues() {
    values = new Array(boardIds.length);
    for (var index = 0; index < boardIds.length; index++) {
        values[index] = $("#" + boardIds[index]).text();
    }
    return values;
}
