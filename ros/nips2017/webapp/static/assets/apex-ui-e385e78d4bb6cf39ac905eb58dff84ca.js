"use strict";define("apex-ui/app",["exports","ember","apex-ui/resolver","ember-load-initializers","apex-ui/config/environment"],function(e,t,n,l,a){var s=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,s=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,l.default)(s,a.default.modulePrefix),e.default=s}),define("apex-ui/components/assessments-form",["exports","ember","apex-ui/config/environment"],function(e,t,n){var l=t.default.Component,a=t.default.computed,s=t.default.isBlank;e.default=l.extend({selectedValue:"",assessments:n.default.assessments,isSelectedValueValid:a("selectedValue",function(){return!s(this.get("selectedValue"))}),demoDisabled:a("isSelectedValueValid","isBusy",function(){return!(this.get("isSelectedValueValid")&&!this.get("isBusy"))}),actions:{selectChanged:function(){var e=this.$("select").val();this.set("selectedValue",e)},showDemo:function(){s(this.get("demoDisabled"))||(this.set("isBusy",!0),this.sendAction("showDemoAction",this.get("selectedValue")))}}})}),define("apex-ui/components/blk-title",["exports","ember"],function(e,t){var n=t.default.Component;e.default=n.extend({classNames:"title"})}),define("apex-ui/components/dynamic-gauge",["exports","ember","ember-highcharts/components/high-charts"],function(e,t,n){var l=t.default.observer;e.default=n.default.extend({contentDidChange:l("content.@each.isLoaded",function(){var e=this.get("chart"),t=this.get("content")[0].data;e.series[0].points[0].update(t)})})}),define("apex-ui/components/high-charts",["exports","ember-highcharts/components/high-charts"],function(e,t){e.default=t.default}),define("apex-ui/components/interactive-interests",["exports","ember"],function(e,t){var n=t.default.Component,l=t.default.computed;e.default=n.extend({chartData:l.map("dataset",function(e){var t=e.data,n=e.interestId;return{name:this.get("interests").findBy("interestId",n).title,data:t}}),actions:{focusInterest:function(e){this.set("isBusy",!0),this.set("focusedInterest",e),this.sendAction("updateFocusAction",e)}}})}),define("apex-ui/components/interest-button",["exports","ember","apex-ui/config/environment"],function(e,t,n){var l=t.default.Component,a=t.default.computed;e.default=l.extend({chartOptions:a(function(){return{chart:{type:"solidgauge"},title:null,pane:{center:["50%","85%"],size:"160%",startAngle:-90,endAngle:90,background:{innerRadius:"60%",outerRadius:"100%",shape:"arc"}},tooltip:{enabled:!1},yAxis:{labels:{y:16},lineWidth:0,max:100,min:0,minorTickInterval:null,stops:!1,maxColor:n.default.chartColors[this.get("position")],tickAmount:2,tickLength:0},plotOptions:{solidgauge:{dataLabels:{borderWidth:0,format:'<div class="gauge-legend"><span class="gauge-legend-value">{y:.0f}</span><br><span class="gauge-legend-unit">%</span></div>',useHTML:!0,y:90}}}}}),isFocused:a("interest.interestId","focusedInterest",function(){return this.get("focusedInterest")===this.get("interest.interestId")}),chartData:a("interest.title","interest.value",function(){return[{name:this.get("interest.title"),data:[100*this.get("interest.value")],tooltip:{valueSuffix:" %"}}]}),actions:{toggleFocus:function(){!1===this.get("isFocused")?this.focusHandler(this.get("interest.interestId")):this.focusHandler(null)}}})}),define("apex-ui/components/interests-repartition",["exports","ember","apex-ui/config/environment"],function(e,t,n){var l=t.default.Component,a=t.default.computed,s=t.default.isBlank;e.default=l.extend({selectedPoint:null,askConfirmation:!1,isSelectedPointValid:a("selectedPoint",function(){var e=this.get("selectedPoint");return!(s(e)||Number.isNaN(e)||e<0)}),resetDisabled:a("isSelectedPointValid","isBusy",function(){return!(this.get("isSelectedPointValid")&&!this.get("isBusy"))}),chartOptions:a(function(){var e=this;return{colors:n.default.chartColors,chart:{style:{fontFamily:"Roboto",fontSize:"20px"},zoomType:"x"},title:null,legend:{itemStyle:{fontSize:"18px"}},xAxis:{allowDecimals:!1,labels:{formatter:function(){return this.value}}},yAxis:{max:1,title:null},tooltip:{shared:!0,crosshairs:!0},plotOptions:{line:{pointStart:0,pointInterval:this.get("pointInterval"),lineWidth:3,marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}}},series:{cursor:"pointer",point:{events:{click:function(t){return e.send("selectPoint",t.point.x)}}},marker:{lineWidth:1}}},credits:{enabled:!1}}}),chartData:a.map("dataset",function(e){var t=e.data,n=e.interestId;return{name:this.get("interests").findBy("interestId",n).title,data:t}}),actions:{selectPoint:function(e){this.set("selectedPoint",e)},requestTimeTravel:function(){this.set("askConfirmation",!0)},cancelTimeTravel:function(){this.set("askConfirmation",!1)},confirmTimeTravel:function(){!1===this.get("isBusy")&&(this.set("askConfirmation",!1),this.set("isBusy",!0),this.sendAction("timeTravelAction",this.get("selectedPoint")))}}})}),define("apex-ui/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=l}),define("apex-ui/helpers/app-version",["exports","ember","apex-ui/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,l){function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?s.match(l.versionRegExp)[0]:t.hideVersion?s.match(l.shaRegExp)[0]:s}e.appVersion=a;var s=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("apex-ui/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=l}),define("apex-ui/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=l}),define("apex-ui/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=l}),define("apex-ui/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=l}),define("apex-ui/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=l}),define("apex-ui/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=l}),define("apex-ui/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=l}),define("apex-ui/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=l}),define("apex-ui/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=l}),define("apex-ui/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("apex-ui/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("apex-ui/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var l=null;t.default.Helper?l=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(l=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=l}),define("apex-ui/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","apex-ui/config/environment"],function(e,t,n){var l=n.default.APP,a=l.name,s=l.version;e.default={name:"App Version",initialize:(0,t.default)(a,s)}}),define("apex-ui/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("apex-ui/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("apex-ui/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("apex-ui/initializers/export-application-global",["exports","ember","apex-ui/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var a,s=n.default.exportApplicationGlobal;a="string"==typeof s?s:t.default.String.classify(n.default.modulePrefix),l[a]||(l[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[a]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("apex-ui/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("apex-ui/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("apex-ui/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("apex-ui/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,l,a,s,r,i,o,u,p,d,c){function f(){t.default.Helper||((0,n.registerHelper)("and",l.andHelper),(0,n.registerHelper)("or",a.orHelper),(0,n.registerHelper)("eq",s.equalHelper),(0,n.registerHelper)("not",r.notHelper),(0,n.registerHelper)("is-array",i.isArrayHelper),(0,n.registerHelper)("not-eq",o.notEqualHelper),(0,n.registerHelper)("gt",u.gtHelper),(0,n.registerHelper)("gte",p.gteHelper),(0,n.registerHelper)("lt",d.ltHelper),(0,n.registerHelper)("lte",c.lteHelper))}e.initialize=f,e.default={name:"truth-helpers",initialize:f}}),define("apex-ui/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("apex-ui/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("apex-ui/router",["exports","ember","apex-ui/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){}),e.default=l}),define("apex-ui/routes/index",["exports","ember","apex-ui/config/environment"],function(e,t,n){var l=t.default.Route,a=t.default.getWithDefault,s=t.default.run,r=t.default.$;e.default=l.extend({pollTimer:null,model:function(){var e=this;return r.getJSON(n.default.apiURL+"/api/interests").then(function(t){var l=a(t,"pollDelay",n.default.defaultPollDelay),r=s.later(null,function(){e.refresh()},l);return e.set("pollTimer",r),!0===t.roundPointInterval&&(t.pointInterval=Math.round(t.pointInterval)),t})},deactivate:function(){this._super.apply(this,arguments),s.cancel(this.get("pollTimer"))},actions:{updateFocus:function(e){return r.post(n.default.apiURL+"/api/focus",{interestId:e})},cancelFocus:function(){return r.post(n.default.apiURL+"/api/focus",{interestId:null})},timeTravel:function(e){return r.post(n.default.apiURL+"/api/time-travel",{point:e})},updateAssessment:function(e){return r.post(n.default.apiURL+"/api/assessment",{assessmentId:e})}}})}),define("apex-ui/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("apex-ui/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wHtG51Nu",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/application.hbs"}})}),define("apex-ui/templates/components/assessments-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"jUzmKmXt",block:'{"statements":[["block",["blk-title"],null,null,1],["text","\\n"],["open-element","div",[]],["static-attr","class","pad"],["flush-element"],["text","\\n  "],["open-element","select",[]],["modifier",["action"],[["get",[null]],"selectChanged"],[["on"],["change"]]],["flush-element"],["text","\\n    "],["open-element","option",[]],["static-attr","value",""],["flush-element"],["text","-- Select an assessment --"],["close-element"],["text","\\n"],["block",["each"],[["get",["assessments"]]],[["key"],["assessmentId"]],0],["text","  "],["close-element"],["text","\\n\\n  "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","button"],["dynamic-attr","disabled",["unknown",["demoDisabled"]],null],["modifier",["action"],[["get",[null]],"showDemo"]],["flush-element"],["text","Go"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","    "],["open-element","option",[]],["dynamic-attr","value",["concat",[["unknown",["assessment","assessmentId"]]]]],["dynamic-attr","selected",["helper",["if"],[["helper",["eq"],[["get",["selectedValue"]],["get",["assessment","assessmentId"]]],null],true,false],null],null],["flush-element"],["append",["unknown",["assessment","title"]],false],["close-element"],["text","\\n"]],"locals":["assessment"]},{"statements":[["yield","default"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/assessments-form.hbs"}})}),define("apex-ui/templates/components/blk-title",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"6DgqFG7j",block:'{"statements":[["open-element","span",[]],["flush-element"],["yield","default"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/blk-title.hbs"}})}),define("apex-ui/templates/components/dynamic-gauge",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"gX5igoSi",block:'{"statements":[["yield","default"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/dynamic-gauge.hbs"}})}),define("apex-ui/templates/components/interactive-interests",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"rDqTxvR7",block:'{"statements":[["block",["blk-title"],null,null,1],["text","\\n"],["open-element","div",[]],["static-attr","class","interests-gauges"],["flush-element"],["text","\\n"],["block",["each"],[["get",["interests"]]],[["key"],["interestId"]],0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","div",[]],["static-attr","class","interest-wrapper"],["flush-element"],["text","\\n      "],["append",["helper",["interest-button"],null,[["interest","focusedInterest","focusHandler","position"],[["get",["interest"]],["get",["focusedInterest"]],["helper",["action"],[["get",[null]],"focusInterest"],null],["get",["index"]]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":["interest","index"]},{"statements":[["text","  Goal spaces and current exploration preferences\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/interactive-interests.hbs"}})}),define("apex-ui/templates/components/interest-button",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"eSyo+zNf",block:'{"statements":[["open-element","h3",[]],["dynamic-attr","class",["concat",["interest-title pos-",["unknown",["position"]]]]],["flush-element"],["append",["unknown",["interest","title"]],false],["close-element"],["text","\\n\\n"],["append",["helper",["high-charts"],null,[["chartOptions","content","class"],[["get",["chartOptions"]],["get",["chartData"]],"gauge-wrapper"]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","button"],["dynamic-attr","class",["concat",["small secondary fat button ",["helper",["if"],[["get",["isFocused"]],"pushed"],null]]]],["modifier",["action"],[["get",[null]],"toggleFocus"]],["flush-element"],["text","\\n  "],["append",["helper",["if"],[["get",["isFocused"]],"Stop","Start"],null],false],["text"," focus\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/interest-button.hbs"}})}),define("apex-ui/templates/components/interests-repartition",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"E3jIO1T1",block:'{"statements":[["block",["blk-title"],null,null,3],["text","\\n"],["append",["helper",["high-charts"],null,[["chartOptions","content","pointInterval"],[["get",["chartOptions"]],["get",["chartData"]],["get",["pointInterval"]]]]],false],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","revertexp"],["flush-element"],["text","\\n"],["block",["blk-title"],null,null,2],["text","\\n  "],["open-element","div",[]],["static-attr","class","revertexp-form"],["flush-element"],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","input-group"],["flush-element"],["text","\\n      "],["open-element","span",[]],["static-attr","class","input-group-label"],["flush-element"],["text","Trial"],["close-element"],["text","\\n      "],["append",["helper",["input"],null,[["type","min","value","class"],["number",1,["get",["selectedPoint"]],"input-group-field"]]],false],["text","\\n      "],["open-element","div",[]],["static-attr","class","input-group-button"],["flush-element"],["text","\\n"],["block",["if"],[["get",["askConfirmation"]]],null,1,0],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","button"],["dynamic-attr","disabled",["unknown",["resetDisabled"]],null],["modifier",["action"],[["get",[null]],"requestTimeTravel"]],["flush-element"],["text","Revert"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","success button"],["dynamic-attr","disabled",["unknown",["resetDisabled"]],null],["modifier",["action"],[["get",[null]],"confirmTimeTravel"]],["flush-element"],["text","Confirm"],["close-element"],["text","\\n          "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","alert button"],["modifier",["action"],[["get",[null]],"cancelTimeTravel"]],["flush-element"],["text","Cancel"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    Revert to previous state\\n"]],"locals":[]},{"statements":[["text","  Evolution of preferences to explore goal spaces\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/components/interests-repartition.hbs"}})}),define("apex-ui/templates/error",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"u2DhfQMb",block:'{"statements":[["open-element","div",[]],["static-attr","class","pad"],["flush-element"],["text","\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    An error occurred.\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    "],["block",["link-to"],["index"],[["class"],["button"]],0],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Try again"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/error.hbs"}})}),define("apex-ui/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"rcSsWa8J",block:'{"statements":[["append",["helper",["interactive-interests"],null,[["interests","focusedInterest","updateFocusAction","class"],[["get",["model","interests"]],["get",["model","focusedInterest"]],"updateFocus","interests"]]],false],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","b-wrapper"],["flush-element"],["text","\\n  "],["append",["helper",["interests-repartition"],null,[["interests","pointInterval","dataset","isBusy","timeTravelAction","class"],[["get",["model","interests"]],["get",["model","pointInterval"]],["get",["model","dataset"]],["get",["model","isBusy"]],"timeTravel","interests-repartition"]]],false],["text","\\n\\n"],["block",["assessments-form"],null,[["isBusy","class","showDemoAction"],[["get",["model","isBusy"]],"assessments","updateAssessment"]],0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    Assess learning\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"apex-ui/templates/index.hbs"}})}),define("apex-ui/config/environment",["ember"],function(e){try{var t="apex-ui/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),a={default:l};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("apex-ui/app").default.create({name:"apex-ui",version:"0.0.0+91c77ec9"});