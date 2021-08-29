(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(645),__webpack_require__(646),__webpack_require__(853),__webpack_require__(849),__webpack_require__(856),__webpack_require__(857),__webpack_require__(854),__webpack_require__(850),__webpack_require__(858),__webpack_require__(851),__webpack_require__(852),__webpack_require__(859),module.exports=__webpack_require__(843)},551:function(module,exports){},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(347)},843:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(347).configure)([__webpack_require__(844),__webpack_require__(846)],module,!1)}).call(this,__webpack_require__(195)(module))},844:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":845};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=844},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(214);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.b,{title:"Textarea/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img, i {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n    font-size: 40px;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"welcome-to-react-autocomplete-textarea"},"Welcome to react-autocomplete-textarea"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Supports both keyboard and mouse for option selection"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Supports responsiveness and works on every device"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Supports lazy-loading and dynamic option list updates"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Supports all major browsers including IE 8+")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"subheading"},"Getting Started"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://www.npmjs.com/package/react-autocomplete-textarea",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("i",{className:"bi bi-book"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"react-autocomplete-textarea"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",null,"npm install --save react-autocomplete-textarea"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://reactjs.org/docs/getting-started.html",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("i",{className:"bi bi-book"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"create-react-app"),"This project was bootstrapped with Create React App."))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"subheading"},"Versions"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{href:"https://github.com/bonnv79/react-autocomplete-textarea/blob/master/CHANGELOG.md",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,"CHANGELOG.md")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",{className:"tip"},"License"),"MIT © bonnv79"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Textarea/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},846:function(module,exports,__webpack_require__){var map={"./stories/ReactAutocompleteTextarea.stories.js":855};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=846},847:function(module,exports,__webpack_require__){},855:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Multipletriggers",(function(){return Multipletriggers}));var objectSpread2=__webpack_require__(82),slicedToArray=__webpack_require__(462),react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(463),classCallCheck=__webpack_require__(215),createClass=__webpack_require__(216),assertThisInitialized=__webpack_require__(70),inherits=__webpack_require__(218),createSuper=__webpack_require__(217),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),textarea_caret=__webpack_require__(461),textarea_caret_default=__webpack_require__.n(textarea_caret),get_input_selection=__webpack_require__(297),get_input_selection_default=__webpack_require__.n(get_input_selection),react_dom=__webpack_require__(99),react_dom_default=__webpack_require__.n(react_dom),BodyEnd_BodyEnd=function(_React$Component){Object(inherits.a)(BodyEnd,_React$Component);var _super=Object(createSuper.a)(BodyEnd);function BodyEnd(props){var _this;return Object(classCallCheck.a)(this,BodyEnd),(_this=_super.call(this,props)).el=document.createElement("div"),_this.el.style.display="contents",_this}return Object(createClass.a)(BodyEnd,[{key:"componentDidMount",value:function componentDidMount(){document.body.appendChild(this.el),this.renders()}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.renders()}},{key:"componentWillUnmount",value:function componentWillUnmount(){document.body.removeChild(this.el)}},{key:"renders",value:function renders(){var children=this.props.children;react_dom_default.a.render(children,this.el)}},{key:"render",value:function render(){return null}}]),BodyEnd}(react_default.a.Component);BodyEnd_BodyEnd.__docgenInfo={description:"",methods:[{name:"renders",docblock:null,modifiers:[],params:[],returns:null}],displayName:"BodyEnd"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\BodyEnd.js"]={name:"BodyEnd",docgenInfo:BodyEnd_BodyEnd.__docgenInfo,path:"src\\components\\BodyEnd.js"});__webpack_require__(847);var jsx_runtime=__webpack_require__(81),_excluded=["Component","defaultValue","disabled","onBlur","value","fullscreen"],propTypes={Component:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.elementType]),defaultValue:prop_types_default.a.string,disabled:prop_types_default.a.bool,maxOptions:prop_types_default.a.number,onBlur:prop_types_default.a.func,onChange:prop_types_default.a.func,onKeyDown:prop_types_default.a.func,onRequestOptions:prop_types_default.a.func,onSelect:prop_types_default.a.func,changeOnSelect:prop_types_default.a.func,options:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.arrayOf(prop_types_default.a.string)]),regex:prop_types_default.a.string,matchAny:prop_types_default.a.bool,minChars:prop_types_default.a.number,requestOnlyIfNoOptions:prop_types_default.a.bool,spaceRemovers:prop_types_default.a.arrayOf(prop_types_default.a.string),spacer:prop_types_default.a.string,trigger:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.arrayOf(prop_types_default.a.string)]),value:prop_types_default.a.string,offsetX:prop_types_default.a.number,offsetY:prop_types_default.a.number,passThroughEnter:prop_types_default.a.bool,fullscreen:prop_types_default.a.bool},components_ReactAutocompleteTextarea=function(_React$Component){Object(inherits.a)(ReactAutocompleteTextarea,_React$Component);var _super=Object(createSuper.a)(ReactAutocompleteTextarea);function ReactAutocompleteTextarea(props){var _this;return Object(classCallCheck.a)(this,ReactAutocompleteTextarea),(_this=_super.call(this,props)).arrayTriggerMatch=function(triggers,re){return triggers.map((function(trigger){return{triggerStr:trigger,triggerMatch:trigger.match(re),triggerLength:trigger.length}}))},_this.isTrigger=function(trigger,str,i){return!trigger||!trigger.length||str.substr(i,trigger.length)===trigger},_this.getMatch=_this.getMatch.bind(Object(assertThisInitialized.a)(_this)),_this.handleChange=_this.handleChange.bind(Object(assertThisInitialized.a)(_this)),_this.handleKeyDown=_this.handleKeyDown.bind(Object(assertThisInitialized.a)(_this)),_this.handleResize=_this.handleResize.bind(Object(assertThisInitialized.a)(_this)),_this.handleSelection=_this.handleSelection.bind(Object(assertThisInitialized.a)(_this)),_this.updateCaretPosition=_this.updateCaretPosition.bind(Object(assertThisInitialized.a)(_this)),_this.updateHelper=_this.updateHelper.bind(Object(assertThisInitialized.a)(_this)),_this.resetHelper=_this.resetHelper.bind(Object(assertThisInitialized.a)(_this)),_this.renderAutocompleteList=_this.renderAutocompleteList.bind(Object(assertThisInitialized.a)(_this)),_this.state={helperVisible:!1,left:0,trigger:null,matchLength:0,matchStart:0,options:[],selection:0,top:0,value:null},_this.recentValue=props.defaultValue,_this.enableSpaceRemovers=!1,_this.refInput=Object(react.createRef)(),_this}return Object(createClass.a)(ReactAutocompleteTextarea,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var options=this.props.options,caret=this.state.caret;options.length!==prevProps.options.length&&this.updateHelper(this.recentValue,caret,options)}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}},{key:"getMatch",value:function getMatch(str,caret,providedOptions){var _this$props=this.props,trigger=_this$props.trigger,matchAny=_this$props.matchAny,regex=_this$props.regex,re=new RegExp(regex),triggers=trigger;Array.isArray(triggers)||(triggers=new Array(trigger)),triggers.sort();var providedOptionsObject=providedOptions;Array.isArray(providedOptions)&&triggers.forEach((function(triggerStr){providedOptionsObject[triggerStr]=providedOptions}));for(var triggersMatch=this.arrayTriggerMatch(triggers,re),slugData=null,triggersIndex=0;triggersIndex<triggersMatch.length;triggersIndex+=1)for(var _triggersMatch$trigge=triggersMatch[triggersIndex],triggerStr=_triggersMatch$trigge.triggerStr,triggerMatch=_triggersMatch$trigge.triggerMatch,triggerLength=_triggersMatch$trigge.triggerLength,i=caret-1;i>=0;i-=1){var match=str.substring(i,caret).match(re),matchStart=-1;if(triggerLength>0){var triggerIdx=triggerMatch?i:i-triggerLength+1;if(triggerIdx<0)break;if(this.isTrigger(triggerStr,str,triggerIdx)&&(matchStart=triggerIdx+triggerLength),!match&&matchStart<0)break}else{if(match&&i>0)continue;if(caret-(matchStart=0===i&&match?0:i+1)==0)break}if(matchStart>=0)if("continue"===function(){var triggerOptions=providedOptionsObject[triggerStr];if(null==triggerOptions)return"continue";var matchedSlug=str.substring(matchStart,caret),options=triggerOptions.filter((function(slug){var idx=slug.toLowerCase().indexOf(matchedSlug.toLowerCase());return-1!==idx&&(matchAny||0===idx)})),currTrigger=triggerStr,matchLength=matchedSlug.length;slugData=null===slugData?{trigger:currTrigger,matchStart:matchStart,matchLength:matchLength,options:options}:Object(objectSpread2.a)(Object(objectSpread2.a)({},slugData),{},{trigger:currTrigger,matchStart:matchStart,matchLength:matchLength,options:options})}())continue}return slugData}},{key:"handleChange",value:function handleChange(e){var _this$props2=this.props,onChange=_this$props2.onChange,options=_this$props2.options,spaceRemovers=_this$props2.spaceRemovers,spacer=_this$props2.spacer,value=_this$props2.value,old=this.recentValue,str=e.target.value,caret=get_input_selection_default()(e.target).end;if(str.length||this.setState({helperVisible:!1}),this.recentValue=str,this.setState({caret:caret,value:e.target.value}),!str.length||!caret)return onChange(e.target.value);if(this.enableSpaceRemovers&&spaceRemovers.length&&str.length>2&&spacer.length){for(var i=0;i<Math.max(old.length,str.length);i+=1)if(old[i]!==str[i]){if(i>=2&&str[i-1]===spacer&&-1===spaceRemovers.indexOf(str[i-2])&&-1!==spaceRemovers.indexOf(str[i])&&this.getMatch(str.substring(0,i-2),caret-3,options)){var newValue="".concat(str.slice(0,i-1)).concat(str.slice(i,i+1)).concat(str.slice(i-1,i)).concat(str.slice(i+1));return this.updateCaretPosition(i+1),this.refInput.current.value=newValue,value||this.setState({value:newValue}),onChange(newValue)}break}this.enableSpaceRemovers=!1}return this.updateHelper(str,caret,options),value||this.setState({value:e.target.value}),onChange(e.target.value)}},{key:"handleKeyDown",value:function handleKeyDown(event){var _this$state=this.state,helperVisible=_this$state.helperVisible,options=_this$state.options,selection=_this$state.selection,_this$props3=this.props,onKeyDown=_this$props3.onKeyDown,passThroughEnter=_this$props3.passThroughEnter,maxOptions=_this$props3.maxOptions,maxSelection=Math.min(maxOptions,options.length);if(helperVisible)switch(event.keyCode){case 27:event.preventDefault(),this.resetHelper();break;case 38:event.preventDefault(),this.setState({selection:(maxSelection+selection-1)%maxSelection});break;case 40:event.preventDefault(),this.setState({selection:(selection+1)%maxSelection});break;case 14:case 13:passThroughEnter||event.preventDefault(),this.handleSelection(selection);break;case 9:this.handleSelection(selection);break;default:onKeyDown(event)}else onKeyDown(event)}},{key:"handleResize",value:function handleResize(){this.setState({helperVisible:!1})}},{key:"handleSelection",value:function handleSelection(idx){var _this$props4=this.props,spacer=_this$props4.spacer,onSelect=_this$props4.onSelect,changeOnSelect=_this$props4.changeOnSelect,_this$state2=this.state,matchStart=_this$state2.matchStart,matchLength=_this$state2.matchLength,options=_this$state2.options,trigger=_this$state2.trigger,slug=options[idx],value=this.recentValue,part1=value.substring(0,matchStart-trigger.length),part2=value.substring(matchStart+matchLength),event={target:this.refInput.current},changedStr=changeOnSelect(trigger,slug);event.target.value="".concat(part1).concat(changedStr).concat(spacer).concat(part2),this.handleChange(event),onSelect(event.target.value),this.resetHelper(),this.updateCaretPosition(part1.length+changedStr.length+1),this.enableSpaceRemovers=!0}},{key:"updateCaretPosition",value:function updateCaretPosition(caret){var _this2=this;this.setState({caret:caret},(function(){return Object(get_input_selection.setCaretPosition)(_this2.refInput.current,caret)}))}},{key:"updateHelper",value:function updateHelper(str,caret,options){var input=this.refInput.current,slug=this.getMatch(str,caret,options);if(slug){var caretPos=textarea_caret_default()(input,caret-1),rect=input.getBoundingClientRect(),top=rect.top+caretPos.top+window.scrollY-input.scrollTop,left=rect.left+caretPos.left,_this$props5=this.props,minChars=_this$props5.minChars,onRequestOptions=_this$props5.onRequestOptions,requestOnlyIfNoOptions=_this$props5.requestOnlyIfNoOptions;slug.matchLength>=minChars&&(slug.options.length>1||1===slug.options.length&&slug.options[0].length!==slug.matchLength)?this.setState(Object(objectSpread2.a)({helperVisible:!0,top:top,left:left},slug)):(requestOnlyIfNoOptions&&slug.options.length||onRequestOptions(str.substr(slug.matchStart,slug.matchLength)),this.resetHelper())}else this.resetHelper()}},{key:"resetHelper",value:function resetHelper(){this.setState({helperVisible:!1,selection:0})}},{key:"renderAutocompleteList",value:function renderAutocompleteList(){var _this3=this,_this$state3=this.state,helperVisible=_this$state3.helperVisible,left=_this$state3.left,matchStart=_this$state3.matchStart,matchLength=_this$state3.matchLength,options=_this$state3.options,selection=_this$state3.selection,top=_this$state3.top,value=_this$state3.value;if(!helperVisible)return null;var _this$props6=this.props,maxOptions=_this$props6.maxOptions,offsetX=_this$props6.offsetX,offsetY=_this$props6.offsetY;if(0===options.length)return null;if(selection>=options.length)return this.setState({selection:0}),null;var optionNumber=0===maxOptions?options.length:maxOptions,helperOptions=options.slice(0,optionNumber).map((function(val,idx){var highlightStart=val.toLowerCase().indexOf(value.substr(matchStart,matchLength).toLowerCase());return Object(jsx_runtime.jsxs)("li",{className:idx===selection?"react-autocomplete-input-li-active":null,onClick:function onClick(){_this3.handleSelection(idx)},onMouseEnter:function onMouseEnter(){_this3.setState({selection:idx})},children:[val.slice(0,highlightStart),Object(jsx_runtime.jsx)("strong",{children:val.substr(highlightStart,matchLength)}),val.slice(highlightStart+matchLength)]},val)}));return Object(jsx_runtime.jsxs)(BodyEnd_BodyEnd,{children:[Object(jsx_runtime.jsx)("ul",{className:"react-autocomplete-input",style:{left:left+offsetX,top:top+offsetY},children:helperOptions}),Object(jsx_runtime.jsx)("div",{className:"react-autocomplete-backdrop",onClick:this.handleResize})]})}},{key:"render",value:function render(){var _this$props7=this.props,Component=_this$props7.Component,defaultValue=_this$props7.defaultValue,disabled=_this$props7.disabled,onBlur=_this$props7.onBlur,value=_this$props7.value,fullscreen=_this$props7.fullscreen,rest=Object(objectWithoutProperties.a)(_this$props7,_excluded),stateValue=this.state.value,propagated=Object.assign({},rest);Object.keys(propTypes).forEach((function(k){delete propagated[k]}));var val="";return null!=value?val=value:stateValue?val=stateValue:defaultValue&&(val=defaultValue),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)(Component,Object(objectSpread2.a)(Object(objectSpread2.a)({disabled:disabled,onBlur:onBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:this.refInput,value:val},propagated),{},{className:"react-autocomplete-textArea ".concat(fullscreen?"fullscreen":"")})),this.renderAutocompleteList()]})}}]),ReactAutocompleteTextarea}(react_default.a.Component);components_ReactAutocompleteTextarea.defaultProps={Component:"textarea",defaultValue:"",disabled:!1,maxOptions:6,onBlur:function onBlur(){},onChange:function onChange(){},onKeyDown:function onKeyDown(){},onRequestOptions:function onRequestOptions(){},onSelect:function onSelect(){},changeOnSelect:function changeOnSelect(trigger,slug){return trigger+slug},options:[],regex:"^[A-Za-z0-9\\-_]+$",matchAny:!1,minChars:0,requestOnlyIfNoOptions:!0,spaceRemovers:[",",".","!","?"],spacer:" ",trigger:"@",offsetX:0,offsetY:0,value:null,passThroughEnter:!1,fullscreen:!1},components_ReactAutocompleteTextarea.__docgenInfo={description:"",methods:[{name:"getMatch",docblock:null,modifiers:[],params:[{name:"str",type:null},{name:"caret",type:null},{name:"providedOptions",type:null}],returns:null},{name:"arrayTriggerMatch",docblock:null,modifiers:[],params:[{name:"triggers",type:null},{name:"re",type:null}],returns:null},{name:"isTrigger",docblock:null,modifiers:[],params:[{name:"trigger",type:null},{name:"str",type:null},{name:"i",type:null}],returns:null},{name:"handleChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"handleResize",docblock:null,modifiers:[],params:[],returns:null},{name:"handleSelection",docblock:null,modifiers:[],params:[{name:"idx",type:null}],returns:null},{name:"updateCaretPosition",docblock:null,modifiers:[],params:[{name:"caret",type:null}],returns:null},{name:"updateHelper",docblock:null,modifiers:[],params:[{name:"str",type:null},{name:"caret",type:null},{name:"options",type:null}],returns:null},{name:"resetHelper",docblock:null,modifiers:[],params:[],returns:null},{name:"renderAutocompleteList",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ReactAutocompleteTextarea",props:{Component:{defaultValue:{value:'"textarea"',computed:!1},type:{name:"union",value:[{name:"string"},{name:"elementType"}]},required:!1,description:""},defaultValue:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},maxOptions:{defaultValue:{value:"6",computed:!1},type:{name:"number"},required:!1,description:""},onBlur:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},onChange:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},onKeyDown:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},onRequestOptions:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},onSelect:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},changeOnSelect:{defaultValue:{value:"(trigger, slug) => trigger + slug",computed:!1},type:{name:"func"},required:!1,description:""},options:{defaultValue:{value:"[]",computed:!1},type:{name:"union",value:[{name:"object"},{name:"arrayOf",value:{name:"string"}}]},required:!1,description:""},regex:{defaultValue:{value:'"^[A-Za-z0-9\\\\-_]+$"',computed:!1},type:{name:"string"},required:!1,description:""},matchAny:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},minChars:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},requestOnlyIfNoOptions:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},spaceRemovers:{defaultValue:{value:'[",", ".", "!", "?"]',computed:!1},type:{name:"arrayOf",value:{name:"string"}},required:!1,description:""},spacer:{defaultValue:{value:'" "',computed:!1},type:{name:"string"},required:!1,description:""},trigger:{defaultValue:{value:'"@"',computed:!1},type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]},required:!1,description:""},offsetX:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},offsetY:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},value:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},passThroughEnter:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},fullscreen:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var src_components=components_ReactAutocompleteTextarea;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\index.js"]={name:"ReactAutocompleteTextarea",docgenInfo:components_ReactAutocompleteTextarea.__docgenInfo,path:"src\\components\\index.js"});__webpack_exports__.default={title:"Textarea/Reactautocompletetextarea",component:src_components,argTypes:{}};var ReactAutocompleteTextarea_stories_Template=function Template(args){var _React$useState=react_default.a.useState(""),_React$useState2=Object(slicedToArray.a)(_React$useState,2),value=_React$useState2[0],onChange=_React$useState2[1];return Object(jsx_runtime.jsx)(src_components,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{value:value,onChange:onChange}))},Basic=ReactAutocompleteTextarea_stories_Template.bind({});Basic.args={placeholder:"Try input @",trigger:"@",options:["apple","apricot","banana","carrot"],rows:5,cols:50,fullscreen:!1};var Multipletriggers=ReactAutocompleteTextarea_stories_Template.bind({});Multipletriggers.args={placeholder:"Try input @ or @@",trigger:["@","@@"],options:{"@":["aa","ab","abc","abcd"],"@@":["az","ar"]},rows:5,cols:50,fullscreen:!1},Basic.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n  const [value, onChange] = React.useState('');\n  return (\n    <ReactAutocompleteTextarea {...args} value={value} onChange={onChange} />\n  )\n}"}},Basic.parameters),Multipletriggers.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n  const [value, onChange] = React.useState('');\n  return (\n    <ReactAutocompleteTextarea {...args} value={value} onChange={onChange} />\n  )\n}"}},Multipletriggers.parameters)},859:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(866),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[483,2,3]]]);