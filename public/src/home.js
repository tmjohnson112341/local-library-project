function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
   return books
  .filter((book)=> book.borrows[0].returned === false).length;
}


function getMostCommonGenres(books) {
  let genreCount = {};
  books.forEach(book => {
    if (genreCount[book.genre]){
      genreCount[book.genre]++;
    }else {
      genreCount[book.genre]=1
    }
  } );
  let genreArray = [];
  for (let key in genreCount){
    let value = genreCount[key];
    genreArray.push({
      'name': key,
      'count': value
    });
  };
  genreArray.sort((genreA,genreB) => genreB.count - genreA.count);
  let results = genreArray.slice(0,5);
  return results;
} 

function getMostPopularBooks(books) {
  return books
  .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  .slice(0, 5)
  .map((book) => ({ name: book.title, count: book.borrows.length }));
}

function getMostPopularAuthors(books, authors){
  return books
  .reduce((count,book)=>{
    authors.forEach(author=>{
      if(book.authorId === author.id){
        count.push({
          'name': `${author.name.first} ${author.name.last}`, 'count': book.borrows.length
        })
      }
    })
    return count
  },[])
  .sort((authorA, authorB)=> authorB.count - authorA.count)
  .slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
