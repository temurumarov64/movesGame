function minLengthValidator(moves) {
  if (moves.length < 3) throw new Error("Please enter at least 3 parameters ");
}

function nonRepeatValidator(moves) {
  if (moves.length !== new Set(moves).size)
    throw new Error(
      "Each parameter should be unique, please, check for repetitions"
    );
}

function oddValidator(moves) {
  if (moves.length % 2 == 0)
    throw new Error(
      "Please check the amount of parameters, should be an odd number"
    );
}

function validators(moves) {
  minLengthValidator(moves);
  nonRepeatValidator(moves);
  oddValidator(moves);
}

module.exports = { validators };