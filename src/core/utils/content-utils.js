import { Lexer, Tagger } from 'pos';
const tagger = new Tagger();

export function getKeyword(text) {
  return 'ski';

  const words = new Lexer().lex(text);
  const tagged = tagger.tag(words)
  return tagged.reduce((res, [word, tag], i) => {
    console.log(word, tag);
    return res;
  }, [''])
}