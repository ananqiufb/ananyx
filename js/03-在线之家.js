{
  "ua": "",
  "homeUrl": "https://www.zxzjtv.com",
  "dcVipFlag": "true",
    "pCfgJs": "https://www.zxzjtv.com/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'stui-header__menu')]/li/a[contains(@href, 'list')]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/list/(\\d+).html",
  "cateManual":{},
  "homeVodNode": "//a[contains(@class,'stui-vodlist__thumb')]",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/detail/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "/span[contains(@class,'pic-text')]/text()",
  "cateUrl": "https://www.zxzjtv.com/list/{cateId}-{catePg}.html",
  "cateVodNode": "//a[contains(@class,'stui-vodlist__thumb')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/detail/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "/span[contains(@class,'pic-text')]/text()",
  "dtUrl": "https://www.zxzjtv.com/detail/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[@class='stui-content__thumb']/a[contains(@class,'pic')]/@title",
  "dtNameR": "",
  "dtImg": "//div[@class='stui-content__thumb']/a[contains(@class,'pic')]/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '类型')]/following-sibling::*/text()",
  "dtCateR": "",
  "dtArea": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '地区')]/following-sibling::*/text()",
  "dtAreaR": "",
  "dtYear": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '年份')]/following-sibling::*/text()",
  "dtYearR": "",
  "dtActor": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '主演')]/following-sibling::*/text()",
  "dtActorR": "",
  "dtDirector": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '导演')]/following-sibling::*/text()",
  "dtDirectorR": "",
  "dtMark": "//div[@class='stui-content__detail']//p[contains(@class,'data') and contains(text(), '更新')]/following-sibling::*/text()",
  "dtMarkR": "",
  "dtDesc": "//span[@class='detail-sketch']/text()",
  "dtDescR": "",
  "dtFromNode":"//div[2][@class='stui-vodlist__head']/h3",
  "dtFromName": "/text()",
  "dtFromName": "/text()",
  "dtFromName": "[substring-before(text(),'(')]",
  "dtFromNameR": "",
  "dtUrlNode": "//ul[contains(@class, 'stui-content__playlist clearfix')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/video/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.zxzjtv.com/video/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://www.zxzjtv.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": ""
}