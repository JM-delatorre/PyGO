// Generated from Mygrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MygrammarListener from './MygrammarListener.js';
const serializedATN = [4,1,4,12,2,0,7,0,1,0,1,0,1,0,1,0,5,0,7,8,0,10,0,12,
0,10,9,0,1,0,0,0,1,0,0,0,11,0,2,1,0,0,0,2,3,5,1,0,0,3,8,5,3,0,0,4,5,5,2,
0,0,5,7,5,3,0,0,6,4,1,0,0,0,7,10,1,0,0,0,8,6,1,0,0,0,8,9,1,0,0,0,9,1,1,0,
0,0,10,8,1,0,0,0,1,8];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MygrammarParser extends antlr4.Parser {

    static grammarFileName = "Mygrammar.g4";
    static literalNames = [ null, "'hola'", "','" ];
    static symbolicNames = [ null, null, null, "ID", "ESP" ];
    static ruleNames = [ "inicio" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MygrammarParser.ruleNames;
        this.literalNames = MygrammarParser.literalNames;
        this.symbolicNames = MygrammarParser.symbolicNames;
    }



	inicio() {
	    let localctx = new InicioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MygrammarParser.RULE_inicio);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(MygrammarParser.T__0);
	        this.state = 3;
	        this.match(MygrammarParser.ID);
	        this.state = 8;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 4;
	            this.match(MygrammarParser.T__1);
	            this.state = 5;
	            this.match(MygrammarParser.ID);
	            this.state = 10;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MygrammarParser.EOF = antlr4.Token.EOF;
MygrammarParser.T__0 = 1;
MygrammarParser.T__1 = 2;
MygrammarParser.ID = 3;
MygrammarParser.ESP = 4;

MygrammarParser.RULE_inicio = 0;

class InicioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MygrammarParser.RULE_inicio;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MygrammarParser.ID);
	    } else {
	        return this.getToken(MygrammarParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MygrammarListener ) {
	        listener.enterInicio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MygrammarListener ) {
	        listener.exitInicio(this);
		}
	}


}




MygrammarParser.InicioContext = InicioContext; 
