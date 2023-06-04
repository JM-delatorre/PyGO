import antlr4 from 'antlr4';
// const antlr4 = require('antlr4')
import Python3Lexer from './gen/Python3Lexer.js';
// const Python3Lexer = require('./gen/Python3Lexer')
import Python3Parser from './gen/Python3Parser.js';
// const Python3Parser = require('./gen/Python3Parser');
import CustomListener from './gen/CustomListener.js';
// const CustomListener = require('./gen/CustomListener')

const input = 'x = 5\n'
const chars = new antlr4.InputStream(input);
const lexer = new Python3Lexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new Python3Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.single_input();
const printer = new CustomListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

