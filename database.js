
const notes= [
{
  id: 1,
  title: "my First Note",
  timestamp: Date.now(),
  contents: 
  "A secured promissory note is a document that allows a lender to lend money with the added insurance of having assets or property handed over to them in the chance the borrower defaults. This type of note carries less risk to the lender and usually allows the borrower to pay a lesser interest rate."
},
{
id: 2,
title: "my Second Note",
timestamp: Date.now(),
contents: 
"An unsecured promissory note is a document that details the borrowing of money from one individual or entity to another without security if the debt is not paid in full. Unlike a secured promissory note, the lender is taking into account the borrower’s credibility without receiving anything in return if they shall default on their payments. Typically, payment is structured on a weekly or monthly basis with installments made by specific dates and without pre-payment penalties."
}
]


function getNotes() {
    return notes;
}
exports.getNotes= getNotes


function getNote(id){
  return  notes.find((note) => note.id ===id)
}
exports.getNote = getNote
function addNote(note) {



notes.push({
  ...note,
  id: notes.length+1,
  timestamp: Date.now()
})
}
exports.addNote = addNote
function deleteNote(id){


}

exports.deleteNote = deleteNote