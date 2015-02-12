var boardIds = new Array(
        "colarow1", "colbrow1", "colcrow1",
        "colarow2", "colbrow2", "colcrow2",
        "colarow3", "colbrow3", "colcrow3"
);

var generic_winning_sequences = new Array(
        "100100100", // left side vertical
        "010010010", // middle vertical
        "001001001", // right side verticle
        "111000000", // top horizontal
        "000111000", // mid horizontal
        "000000111", // bottom horizontal
        "100010001", // top left to bottom right
        "001010100"// bottom right to top left
);

function game() {

    var player = "X"; // first player gets to be X

    // Basic click handler to change to X or O depending on player
    $(".game-cell").click(function() {
        $(this).text(player);
        var board = getBoardValues();
        if (player_has_won(board, player)) {
            alert(player + " has won");
        }

        if (reached_end_state(board)) {
            alert("Game over: no more moves left");
        }

        player = switch_player(player);
    });

}

function reached_end_state(board) {
    for (var position = 0; position < board.length; position++) {
        if (board[position] === "_") { // current cell placeholder is "_"
            return false;
        }
    }
    return true;
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

function get_player_moves(board_values, player) {
    var player_sequence = ""
    for (var position = 0; position < board_values.length; position++) {
        if (board_values[position] === player) {
            player_sequence += "1";
        } else {
            player_sequence += "0";
        }
    }
    return player_sequence;
}

//returns true if a winning sequence is reached
function player_has_won(board, player) {
    var player_has_won = false;
    var player_sequence = get_player_moves(board, player);

    for (var index = 0; index < generic_winning_sequences.length; index++) {
        if (generic_winning_sequences[index] == player_sequence) {
            player_has_won = true;
        }
    }
    return player_has_won;
}
