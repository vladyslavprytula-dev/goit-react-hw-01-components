(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__2SgMo",stats:"Profile_stats__QDD11",avatar:"Profile_avatar__3gN2D",name:"Profile_name__1evW3",tag:"Profile_tag__3xagH",location:"Profile_location__1iENj",label:"Profile_label__3jeNq",quantity:"Profile_quantity__3dgj8"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__hjub6",title:"Statistics_title__2Rt6E",statList:"Statistics_statList__2ZFS-",item:"Statistics_item__jrWmZ",label:"Statistics_label__98_Dm",percentage:"Statistics_percentage__3M0Tf"}},function(a,e,t){a.exports={transactionHistory:"TransactionHistory_transactionHistory__1PoYq",main:"TransactionHistory_main__2CntO",title:"TransactionHistory_title__3JdhG",even:"TransactionHistory_even__2a-qa"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(a,e,t){a.exports={cell:"Transaction_cell__ZIdgN"}},function(a,e,t){a.exports={list:"Friendlist_list__3Lm-l",item:"Friendlist_item__39rIt"}},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(a,e,t){a.exports=t(21)},,,,,,,function(a,e,t){},function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(9),s=t.n(r),i=t(4),l=t(10),m=t(11),o=t(12),u=t(1),d=t.n(u),f=function(a){var e=a.name,t=a.tag,n=a.location,r=a.avatar,s=a.stats,i=s.followers,l=s.views,m=s.likes;return c.a.createElement("div",{className:d.a.profile},c.a.createElement("div",{className:d.a.description},c.a.createElement("img",{src:r,alt:"user avatar",className:d.a.avatar}),c.a.createElement("p",{className:d.a.name},e),c.a.createElement("p",{className:d.a.tag},t),c.a.createElement("p",{className:d.a.location},n)),c.a.createElement("ul",{className:d.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:d.a.label},"Followers"),c.a.createElement("span",{className:d.a.quantity},i)),c.a.createElement("li",null,c.a.createElement("span",{className:d.a.label},"Views"),c.a.createElement("span",{className:d.a.quantity},l)),c.a.createElement("li",null,c.a.createElement("span",{className:d.a.label},"Likes"),c.a.createElement("span",{className:d.a.quantity},m))))};f.defaultProps={avatar:"https://yt3.ggpht.com/a/AATXAJyxes0-A1lfzQ-7Eq5UOA8-9zluABdVkXxtzcgUZA=s900-c-k-c0xffffffff-no-rj-mo"};var p=f,y=t(2),b=t.n(y);var _=function(){return Math.floor(256*Math.random())},E=function(a){var e=a.title,t=a.stats;return c.a.createElement("section",{className:b.a.statistics},e&&c.a.createElement("h2",{className:b.a.title},e),c.a.createElement("ul",{className:b.a.statList},t.map((function(a){var e=a.id,t=a.label,n=a.percentage;return c.a.createElement("li",{key:e,className:b.a.item,style:{backgroundColor:"rgb(".concat(_(),",").concat(_(),",").concat(_(),")")}},c.a.createElement("span",{className:b.a.label},t),c.a.createElement("span",{className:b.a.percentage},n))}))))},v=t(5),g=t.n(v),N=(t(20),function(a){var e=a.avatar,t=a.name,n=a.isOnline;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:n?"online":"offline"}),c.a.createElement("img",{className:"avatar",src:e,alt:t,width:"48"}),c.a.createElement("p",{className:"name"},t))});N.defaultProps={avatar:"https://yt3.ggpht.com/a/AATXAJyxes0-A1lfzQ-7Eq5UOA8-9zluABdVkXxtzcgUZA=s900-c-k-c0xffffffff-no-rj-mo"};var w=N,h=t(7),O=t.n(h);w.propTypes={friends:g.a.arrayOf(g.a.shape({id:g.a.number.isRequired}))};var x=function(a){var e=a.friends;return c.a.createElement("ul",{className:O.a.list},e.map((function(a){var e=a.avatar,t=a.name,n=a.isOnline,r=a.id;return c.a.createElement("li",{className:O.a.item,key:r},c.a.createElement(w,{avatar:e,name:t,isOnline:n,id:r}))})))},A=t(6),j=t.n(A),k=function(a){var e=a.type,t=a.amount,n=a.currency;return c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:j.a.cell},e),c.a.createElement("td",{className:j.a.cell},t),c.a.createElement("td",{className:j.a.cell},n))},P=t(3),S=t.n(P),T=function(a){var e=a.Transactions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:S.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",{className:S.a.main},c.a.createElement("th",{className:S.a.title},"Type"),c.a.createElement("th",{className:S.a.title},"Amount"),c.a.createElement("th",{className:S.a.title},"Currency"))),c.a.createElement("tbody",null,e.map((function(a,e){return c.a.createElement("tr",{className:e%2?S.a.even:"",key:a.id},c.a.createElement(k,{id:a.id,type:a.type,amount:a.amount,currency:a.currency}))})))))},U=function(){return c.a.createElement("div",null,c.a.createElement(p,{name:i.name,tag:i.tag,location:i.location,avatar:i.avatar,stats:i.stats}),c.a.createElement(E,{title:"Upload stats",stats:l}),c.a.createElement(x,{friends:m}),c.a.createElement(T,{Transactions:o}))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.e6245aca.chunk.js.map