type Doc = {
  title: string;
  text: string;
  date?: Date;
}

const doc: Doc = {
  title: 'My Doc',
  text: 'My text of My Doc',
}

//não estoura exceção, e o ?? é como um ternário 
console.log(doc.date?.toDateString() ?? 'Sem data');