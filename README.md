# movesGame
Task 3 from the internship in Itransition

Instructions Summary:
Write a script that implements a generalized rock-paper-scissors game with an odd number of arbitrary combinations. 
When launched with command line parameters, it accepts an odd number >=3 non-repeating strings. 
The victory is defined as half of the next moves in the circle wins, half of the previous moves in the circle loses. 
The script generates a cryptographically strong random key with a length of at least 256 bits, computes a move, calculates HMAC, displays the HMAC to the user, the move of the computer, shows who won.
When selecting the "help" option in the terminal, a table should be formatted as an N + 1 by N + 1 table, where N is the number of moves and +1 to add a title for the rows and columns. Cells can contain Win/Lose/Draw.
