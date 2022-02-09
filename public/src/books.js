function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returnedArray = books.filter(book=>book.borrows[0].returned===true);
  const notReturned = books.filter(book=>book.borrows[0].returned===false);
 
  return [notReturned,returnedArray] 
}

function getBorrowersForBook(book, accounts) {
  return(
    book.borrows.map((borrowed)=>{
      let account = accounts.find((account)=> account.id === borrowed.id)
      return {...borrowed, ...account}
    })
      .slice(0,10)
    )
  }
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
