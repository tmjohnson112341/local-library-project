//helper function that gets a list of the books that the account has rented
function accountBorrows(account,books){
  return books.filter(book=>{
    for(let copy of book.borrows){
      if(copy.id === account.id){
        return book
      }
    }
  })
}

function findAccountById(accounts, id) {
 for (account of accounts){
   if (account.id === id){
     return account;
   }
 }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account, next) => account.name.last.toLowerCase() < next.name.last.toLowerCase()?-1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  return accountBorrows(account,books).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let totalBorrowed =[];
  books.forEach(book =>{
    book.borrows.forEach(borrowed =>{
      if (borrowed.id === account.id && borrowed.returned === false){
        totalBorrowed.push(book);
      }
    })
  })
  totalBorrowed.forEach(bookBorrowed =>{
    authors.forEach(author => {
      if (author.id === bookBorrowed.authorId){
        bookBorrowed['author'] = author;
      }
    })
  })
  return totalBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
