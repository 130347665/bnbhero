(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{445:function(t,e,n){"use strict";e.a=[{name:"Tier 1-1",success:70,hploss:200,exp:100,reward:.0033},{name:"Tier 1-2",success:67,hploss:200,exp:110,reward:.00396},{name:"Tier 1-3",success:63,hploss:200,exp:120,reward:.0462},{name:"Tier 2-1",success:59,hploss:200,exp:130,reward:.00528},{name:"Tier 2-2",success:55,hploss:200,exp:150,reward:.00594},{name:"Tier 2-3",success:51,hploss:200,exp:200,reward:.0066},{name:"Boss 1",success:28,hploss:400,exp:400,reward:.0242}]},454:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h}));var r=n(478),a=n.n(r),i=n(445),s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t){return a.a.encode(t)},c=function(t){return a.a.decode(t)},u=function(t){try{return JSON.parse(t)}catch(t){return""}},l=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];localStorage[o(t)]=o(n?JSON.stringify(e):e)},d=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=localStorage[o(t)];if(n)try{var r=c(n);return e?u(r):r}catch(t){return""}return""},f=function(t){var e,n=t.card,r=t.build,a=(t.gas,s(n,4)),i=a[0],o=a[1],c=a[2],u=a[3],l=s(r,4),d=l[0],f=l[1],h=l[2],m=l[3],p=2==+(e=d)?30:3==+e?60:4==+e?140:0,y=function(t){return 2==+t?3:3==+t?6:4==+t?16:0}(f),v=function(t){return 2==+t?-5:3==+t?-12:4==+t?-28:0}(h),w=86.4*(100+v)/100;return{buildData:{attr:p,reward:y,exp:function(t){return 2==+t?30:3==+t?60:4==+t?90:0}(m),dishp:v},cardData:{vatk:10*(i-1)+o+p,vdef:10*(i-1)+c+p,vagi:10*(i-1)+u+p,hpcd:w,everyDayHp:(86400/w).strip(4)}}},h=function(t){var e=t.cardData,n=t.buildData,r=t.gas,a=e.vatk,s=e.vdef,o=e.vagi,c=e.everyDayHp,u=n.reward,l=n.exp;return i.a.map((function(t){var e=t.name,n=t.success,i=t.hploss,d=t.exp,f=t.reward,h=n+a/100,m=f*(100+u)/100,p=m+o*m/1e3,y=i-s/10,v=c/(((100-h)*i+h*y)/100),w=h/100*(d+l),g=Math.ceil(v*w),b=(v*(h/100*p-r)).strip(4);return{name:e,successC:h,rewardC:p.strip(8),hplossC:y,everyXp:g,everyRewrad:b}}))}},518:function(t,e,n){},627:function(t,e,n){"use strict";n(518)},903:function(t,e,n){"use strict";n.r(e);var r=n(454),a=n(608),i=n.n(a),s=n(445),o=n(626),c=n.n(o),u=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};var l={name:"FightData",data:function(){return{api:"https://graphql.bitquery.io",walletAddress:Object(r.e)("walletAddress")||"",dataAddress:"0xde9fFb228C1789FEf3F08014498F2b16c57db855",filterHero:"",filterEnemyType:"",network:"bsc",eventType:"Fight",startDate:null,endDate:null,columns:[{title:"英雄",key:"_attackingHero"},{title:"敵人",key:"enemyType"},{title:"獎勵",key:"rewards"},{title:"經驗值",key:"xpGained"},{title:"損血",key:"hpLoss"},{title:"時間",key:"date"}],data:[],isLoading:!1}},beforeMount:function(){this.walletAddress&&this.handleCalc()},methods:{handleCalc:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.fetchGetCount();case 3:return n=t.sent,t.next=6,e.fetchGetFightData(n);case 6:e.isLoading=!1;case 7:case"end":return t.stop()}}),t,e)})),function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,i){try{var s=e[a](i),o=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(o).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(o)}("next")}))})()},fetchGetCount:function(){return i.a.post(this.api,{query:"query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {\n  ethereum(network: $network) {\n    smartContractEvents(\n      options: {limit: $limit, offset: $offset}\n      date: {since: $from, till: $to}\n      txFrom: {in: $txFrom}\n      smartContractAddress: {is: $address}\n      smartContractEvent: {is: $eventType}\n    ) {\n      count(smartContractEvent: {is: $eventType})\n      __typename\n    }\n    __typename\n  }\n}",variables:{network:this.network,address:this.dataAddress,eventType:this.eventType,offset:0,limit:1e4,from:null,to:null,txFrom:[this.walletAddress]}}).then((function(t){return t.data.data.ethereum.smartContractEvents[0].count})).catch((function(t){return console.error(t,"查詢戰鬥數據失敗"),-1}))},fetchGetFightData:function(t){return i.a.post(this.api,{query:'query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {\n  ethereum(network: $network) {\n    smartContractEvents(\n      options: {desc: "block.height", limit: $limit, offset: $offset}\n      date: {since: $from, till: $to}\n      txFrom: {in: $txFrom}\n      smartContractAddress: {is: $address}\n      smartContractEvent: {is: $eventType}\n    ) {\n      smartContractEvent {\n        name\n        __typename\n      }\n      block {\n        height\n        timestamp {\n          iso8601\n          unixtime\n          __typename\n        }\n        __typename\n      }\n      arguments {\n        value\n        argument\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}',variables:{network:this.network,address:this.dataAddress,eventType:this.eventType,offset:0,limit:t,from:null,to:null,txFrom:[this.walletAddress]}}).then(this.handleFightData).catch((function(t){return console.error(t,"查詢戰鬥數據失敗"),[]}))},handleFightData:function(t){var e=t.data.data.ethereum.smartContractEvents;this.data=e.map((function(t){var e=t.arguments,n=t.block,r={};e.slice(1,7).forEach((function(t){var e=t.argument,n=t.value;return r[e]=function(t,e){switch(t){case"enemyType":return s.a[e].name;case"rewards":return e/1e18;default:return e}}(e,n)}));var a=c.a.unix(n.timestamp.unixtime);return r.timestamp=a.valueOf(),r.date=a.format("YYYY/MM/DD HH:mm:ss"),r})),Object(r.f)("walletAddress",this.walletAddress)},rowClassName:function(t){return t.rewards?"":"table-fair"},handleRowClick:function(t){console.log(t),this.filterHero=t._attackingHero,this.filterEnemyType=t.enemyType},handleChangeDate:function(t){var e=u(t,2),n=e[0],r=e[1];this.startDate=n,this.endDate=r.replace("00:00","23:59")}},computed:{tableData:function(){var t=this;if(this.filterHero||this.filterEnemyType)return this.data.filter((function(e){var n=e._attackingHero,r=e.enemyType;return(n.includes(t.filterHero)||!t.filterHero)&&(r.includes(t.filterEnemyType)||!t.filterEnemyType)}));if(this.endDate||this.startDate){var e=c()(this.startDate),n=c()(this.endDate);return this.data.filter((function(t){var r=t.timestamp;return e<=r&&r<=n}))}return this.data},fightCount:function(){return this.tableData.length},fightSuccess:function(){return this.tableData.filter((function(t){return t.rewards})).length},fightFair:function(){return this.fightCount-this.fightSuccess},totalRewards:function(){return this.tableData.reduce((function(t,e){var n=e.rewards;return t+(void 0===n?0:n)}),0).toFixed(2)}}},d=(n(627),n(2)),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Row",[n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{placeholder:"bsc 錢包位址"},model:{value:t.walletAddress,callback:function(e){t.walletAddress=e},expression:"walletAddress"}})],1),t._v(" "),n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{clearable:"",placeholder:"篩選英雄"},model:{value:t.filterHero,callback:function(e){t.filterHero=e},expression:"filterHero"}})],1),t._v(" "),n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{clearable:"",placeholder:"篩選敵人"},model:{value:t.filterEnemyType,callback:function(e){t.filterEnemyType=e},expression:"filterEnemyType"}})],1),t._v(" "),n("Col",{attrs:{span:"8"}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"Select date and time(Excluding seconds)"},on:{"on-change":t.handleChangeDate}})],1),t._v(" "),n("Col",{attrs:{span:"4"}},[n("Button",{attrs:{loading:t.isLoading,type:"success",long:"",icon:"ios-search"},on:{click:t.handleCalc}},[t._v("\n                    計算\n                ")])],1)],1),t._v(" "),t.tableData.length?n("Row",[n("Col",{staticClass:"info",attrs:{span:"24"}},[t._v("\n            總戰鬥次數: "+t._s(t.fightCount)+"\n            戰鬥成功: "+t._s(t.fightSuccess)+"\n            戰鬥失敗: "+t._s(t.fightFair)+"\n            實際勝率: "+t._s((t.fightSuccess/t.fightCount*100).toFixed(2))+"%\n            總獎金: "+t._s(t.totalRewards)+" BNB\n        ")])],1):t._e(),t._v(" "),n("Table",{attrs:{"row-class-name":t.rowClassName,columns:t.columns,data:t.tableData},on:{"on-row-click":t.handleRowClick}})],1)}),[],!1,null,"eed61830",null);e.default=f.exports}}]);
//# sourceMappingURL=FightData2f074163d59bd69be9d6.js.map