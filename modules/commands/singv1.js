module.exports.config = {
    name: "singv1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MạnhG",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Phương tiện",
    usages: "[link / keySearch]",
    cooldowns: 10,
    dependencies: {
        "axios": "",
        "path": "",
        "fs-extra": "",
        "tinyurl": ""
    },
    envConfig: {
        "API_KEY": "mzkVip_LawerTeam"
    }
};

var rdPath = Math.floor(Math.random() * 99999999999999);

module.exports.run=async function({event:e,api:t,args:a}){const{threadID:n,messageID:s,senderID:r}=e,i=require("axios"),{createReadStream:d,statSync:l,writeFileSync:o,readdirSync:g,unlinkSync:c}=require("fs-extra"),{API_KEY:h}=global.configModule[this.config.name];if(0!=a.join(" ").indexOf("https://"))return t.sendMessage("Reply tin nhắn này nhập thời gian tìm kiếm YTB(Là 1 con số 3 < timeSearch < 9)\n\nVí dụ:\n4 -> get những bài nhạc ngắn\n7 -> get những bài nhạc siêu dài",n,((e,t)=>{global.client.handleReply.push({step:1,name:this.config.name,messageID:t.messageID,content:{id:r,timeSearch:"",keySearch:""}})}),s);{const e=a.join(" ").trim();try{t.sendMessage("Đang tải, vui lòng đợi...",n,((e,a)=>setTimeout((()=>{t.unsendMessage(a.messageID)}),3e4)));let{data:a}=await i.get(`https://manhict.tech/sing?link=${e}&apikey=${h}`);if(a.error)return t.sendMessage(a.error,n);let r=a.title,g=a.link;var u=__dirname+`/cache/${rdPath}.m4a`;if(""==g){let{data:a}=await i.get(`https://manhict.tech/video?link=${e}&apikey=${h}`);if(a.error)return t.sendMessage(a.error,n);let r=a.title,l=a.link.audio;const g=(await i.get(l,{responseType:"arraybuffer"})).data;o(u,Buffer.from(g,"utf-8"));return await t.sendMessage({body:r,attachment:d(u)},n,(()=>c(u)),s)}{const a=(await i.get(g,{responseType:"arraybuffer"})).data;if(o(u,Buffer.from(a,"utf-8")),l(u).size>26e6){t.sendMessage("Không thể gửi file có dung lượng lớn hơn 25MB.\n\nTiến hành render và gửi lại...",n,(()=>c(u)),s);let{data:a}=await i.get(`https://manhict.tech/video?link=${e}&apikey=${h}`);if(a.error)return t.sendMessage(a.error,n);let r=a.title,l=a.link.audio;const g=(await i.get(l,{responseType:"arraybuffer"})).data;o(u,Buffer.from(g,"utf-8"));return await t.sendMessage({body:r,attachment:d(u)},n,(()=>c(u)),s)}return await t.sendMessage({body:r,attachment:d(u)},n,(()=>c(u)),s)}}catch(e){return console.log(e),t.sendMessage("Có lỗi xảy ra:"+e,n,s)}}},module.exports.handleReply=async function({event:e,api:t,handleReply:a}){const n=require("axios"),{createReadStream:s,statSync:r,writeFileSync:i,readdirSync:d,unlinkSync:l}=require("fs-extra"),{threadID:o,senderID:g,messageID:c,body:h}=e,{API_KEY:u}=global.configModule[this.config.name];const f=h.trim(),y=(e,n,s)=>t.sendMessage(e,o,((e,r)=>{global.client.handleReply.splice(global.client.handleReply.indexOf(a),1),t.unsendMessage(a.messageID),global.client.handleReply.push({step:n,name:this.config.name,messageID:r.messageID,content:s})}),c);let m=a.content;switch(a.step){case 1:if(m.timeSearch=f,S=h,isNaN(S)||(S<4||S>8))return t.sendMessage("Chọn từ 4 -> 8, baby. love uwu ❤️",o,c);y("Reply tin nhắn này nhập từ cần tìm kiếm hoặc url video",2,m);break;case 2:m.keySearch=f,global.client.handleReply.splice(global.client.handleReply.indexOf(a),1),t.unsendMessage(a.messageID);let d=m;if(0==d.keySearch.indexOf("https://")){const e=d.keySearch;try{t.sendMessage("Đang tải, vui lòng đợi...",o,((e,a)=>setTimeout((()=>{t.unsendMessage(a.messageID)}),3e4)));let{data:a}=await n.get(`https://manhict.tech/sing?link=${e}&apikey=${u}`);if(a.error)return t.sendMessage(a.error,o);let d=a.title,g=a.link;var p=__dirname+`/cache/${rdPath}.m4a`;if(""==g){let{data:a}=await n.get(`https://manhict.tech/video?link=${e}&apikey=${u}`);if(a.error)return t.sendMessage(a.error,o);let r=a.title,d=a.link.audio;const g=(await n.get(d,{responseType:"arraybuffer"})).data;i(p,Buffer.from(g,"utf-8"));return await t.sendMessage({body:r,attachment:s(p)},o,(()=>l(p)),c)}{const a=(await n.get(g,{responseType:"arraybuffer"})).data;if(i(p,Buffer.from(a,"utf-8")),r(p).size>26e6){t.sendMessage("Không thể gửi file có dung lượng lớn hơn 25MB.\n\nTiến hành render và gửi lại...",o,(()=>l(p)),c);let{data:a}=await n.get(`https://manhict.tech/video?link=${e}&apikey=${u}`);if(a.error)return t.sendMessage(a.error,o);let r=a.title,d=a.link.audio;const g=(await n.get(d,{responseType:"arraybuffer"})).data;i(p,Buffer.from(g,"utf-8"));return await t.sendMessage({body:r,attachment:s(p)},o,(()=>l(p)),c)}return await t.sendMessage({body:d,attachment:s(p)},o,(()=>l(p)),c)}}catch(e){return console.log(e),t.sendMessage("Có lỗi xảy ra:"+e,o,c)}}else try{var b,M,k=[],w="",v=0;const a=encodeURIComponent(d.keySearch);var{data:$}=await n.get(`https://manhict.tech/youtube?q=${a}&apikey=${u}`);if($.error)return t.sendMessage($.error,o);b=$.results;for(let e in b)if(null!=b[e].video&&(M=b[e].video).duration.length<=d.timeSearch&&"Live"!=M.duration){v=v+=1,k.push(M.id),w+=`${v}.《${M.duration}》 ${M.title}\n\n`}var I=`»🔎 There are ${k.length} results matching your search keyword:\n\n${w}» Please reply (feedback) choose one of the above searches.`;return void t.sendMessage({body:I},o,((t,a)=>{client.handleReply.push({step:"reply_bodySend",name:this.config.name,messageID:a.messageID,author:e.senderID,idYT:k})}),c)}catch(e){return t.sendMessage("Lỗi: "+e.message,o,c)}break;case"reply_bodySend":if(global.client.handleReply.splice(global.client.handleReply.indexOf(a),1),function(e){return isNaN(e)?"Not a Number!":e<1||e>20}(h))return t.sendMessage("Choose from 1 -> 20, baby. love uwu ❤️",o,c);t.unsendMessage(a.messageID),t.sendMessage("Đang tải, vui lòng đợi...",o,((e,a)=>setTimeout((()=>{t.unsendMessage(a.messageID)}),3e4)));try{let{data:d}=await n.get(`https://manhict.tech/sing/id?id=${a.idYT[h-1]}&apikey=${u}`);if(d.error)return t.sendMessage(d.error,o);let g=d.title,f=d.link;p=__dirname+`/cache/${rdPath}.m4a`;if(""==f){let{data:e}=await n.get(`https://manhict.tech/singv2/id?id=${a.idYT[h-1]}&apikey=${u}`);if(e.error)return t.sendMessage(e.error,o);let r=e.title,d=e.link;const g=(await n.get(d,{responseType:"arraybuffer"})).data;i(p,Buffer.from(g,"utf-8"));return await t.sendMessage({body:r,attachment:s(p)},o,(()=>l(p)),c)}{const d=(await n.get(f,{responseType:"arraybuffer"})).data;if(i(p,Buffer.from(d,"utf-8")),r(p).size>26e6){t.sendMessage("Không thể gửi file có dung lượng lớn hơn 25MB.\n\nTiến hành render và gửi lại...",o,(()=>l(p)),c);let{data:r}=await n.get(`https://manhict.tech/singv2/id?id=${a.idYT[e.body-1]}&apikey=${u}`);if(r.error)return t.sendMessage(r.error,o);let d=r.title,g=r.link;const h=(await n.get(g,{responseType:"arraybuffer"})).data;i(p,Buffer.from(h,"utf-8"));return await t.sendMessage({body:d,attachment:s(p)},o,(()=>l(p)),c)}return await t.sendMessage({body:g,attachment:s(p)},o,(()=>l(p)),c)}}catch(e){return console.log(e),t.sendMessage("Có lỗi xảy ra:"+e,o,c)}}var S};