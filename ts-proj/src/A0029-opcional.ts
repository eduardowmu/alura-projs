type Doc = {
  title: string;
  text: string;
  date?: Date;
}

const doc: Doc = {
  title: 'My Doc',
  text: 'My text of My Doc',
}

//não estoura exceção
console.log(doc.date?.toDateString() ?? 'Sem data');