//简体中文
export default {
	//main.ts
	'110001': 'search douban by current file name',
	'110002': 'search douban and import to current file',
	'110003': `Enter Search Term:`,
	'110004': `Search`,
	'110005': `Cancel`,
	'110006': `sync douban broadcast ot Obsidian`,
	'110101': 'search douban and create file',
	'110201': `{0} already exists`,
	'110202': `{0} template can not read`,



	//DoubanSettingTab
	'1201': `Obsidian Douban`,
	'120001': `Douban Search Url`,
	'120002': `Douban search page request address. `,
	'120003': `First go to:`,
	'120004': `Don't enter anything in the search input box, just click Search,`,
	'120005': `The redirected web page address is the search address,`,
	'120006': `Just copy the web address to the current input box.`,

	'100101': `Login Douban`,


	'1210': `Basic Setting`,
	'1203': `Template Setting`,
	'1220': `Output Setting`,
	'1230': `Usable Variables`,
	'1204': `Set template file path. If keep empty, it will use the default template file to create file. All the usable variables at the end.👇`,
	'1205': `🧡Tip: You can click the 'Copy' button to copy default template content, then create and paste to your own template file. After that, back to select the file. `,
	'1240': `Custom Variable`,
	'1241': `To use the custom variables, you need to wrap them in double curly brackets. For example, {{myType}} will be replaced with the your custom type value. `,
	'1242': `Add custom variable, so that you can use it in the template file or file name. `,
	'124101': `Add`,
	'124108': `Add a new variable`,
	'124102': `Name:`,
	'124103': `Input custom variable name`,
	'124104': `Value:`,
	'124105': `Input custom variable value`,
	'124106': `Active type`,
	'124107': `Delete custom variable`,

	'120101': `Movie Template File`,
	'120102': `This template will be used when creating new notes for Movie from Obsidian-Douban.`,
	'120103': `Available template variables are :`,
	'120104': `{{id}}, {{title}}, {{type}}, {{score}}, {{image}},`,
	'120105': `{{url}}, {{desc}}, {{datePublished}}, {{genre}}, `,
	'120106': `{{originalTitle}},{{director}}, {{author}},`,
	'120107': ` {{actor}}`,
	'120110': `Movie Template File`,



	'120201': `Book Template File`,
	'120202': `This template will be used when creating new notes for Movie from Obsidian-Douban. `,
	'120203': `Available Book template variables are :`,
	'120204': `{{id}}, {{title}}, {{type}}, {{score}}, {{image}},`,
	'120205': `{{url}}, {{desc}}, {{datePublished}}, {{publisher}}`,
	'120206': `{{originalTitle}}, {{subTitle}}, {{author}},`,
	'120207': `{{translator}}, {{isbn}}, {{price}}, {{totalPage}}`,
	'120208': `{{series}}, {{binding}}, {{menu}}`,

	'120301': `Music Template File`,
	'120302': `This template will be used when creating new notes for Music from Obsidian-Douban.`,
	'120303': `Available Music template variables are :`,
	'120304': `{{id}}, {{title}}, {{type}}, {{score}}, {{image}},`,
	'120305': `{{url}}, {{desc}}, {{datePublished}}, {{genre}},`,
	'120306': `{{actor}}, {{medium}}, {{albumType}},`,
	'120307': `{{barcode}}, {{records}}`,

	'120401': `Article Template File`,
	'120402': `This template will be used when creating new notes for Article from Obsidian-Douban.`,
	'120403': `Available Article template variables are :`,
	'120404': `{{id}}, {{title}}, {{type}}, {{image}},`,
	'120405': `{{url}}, {{desc}}, {{datePublished}}`,
	'120406': `{{author}}, {{authorUrl}}, {{content}}`,
	'120407': `{{timePublished}}`,

	'121301': `Game Template File`,
	'121302': `This template will be used when creating new notes for Game from Obsidian-Douban.`,
	'121303': `Available Game template variables are :`,
	'121304': `{{id}}, {{title}}, {{type}}, {{score}}, {{image}},`,
	'121305': `{{url}}, {{desc}}, {{publisher}}, {{datePublished}}`,
	'121306': `{{genre}}, {{aliases}}, {{developer}}, {{platform}}`,

	'121801': `Teleplay Template File`,
	'121802': `This template will be used when creating new notes for Teleplay from Obsidian-Douban.`,

	'120501': `Date Format`,
	'120502': `Time Format`,
	'120503': `This format will be used when available template variables contain date.`,
	'120504': `This format will be used when available template variables contain time.`,

	'120506': `For more syntax, refer to`,
	'120507': `Your current syntax looks like this`,
	'120508': `format reference`,
	'120601': `Array Spilt String`,
	'120602': `string to join between array type, such as authors, actors. 
    example: ','
    the list of actor's name will be shown as: 'actor1,actor2,actor3'`,
	'120701': `Douban Request Headers`,
	'120801': `This type of import is not supported temporarily, please go to github to submit issues for help`,
	'120901': `Douban`,
	'121201': `Person Name Language Mode`,
	'121202': `options:`,
	'121203': `Chinese Name mode, person name only show Chinese name`,
	'121204': `English Name mode, person name only show English name`,
	'121205': `Chinese English Name mode, show Chinese and English name both`,
	'121206': `Chinese Name`,
	'121207': `English Name`,
	'121208': `Chinese And English Name`,

	'121401': `Status Bar`,
	'121402': `Display status bar when import data ?`,

	'121501': `Note folder`,
	'121502': `Nodes created from Obsidian-Douban will be placed in this folder, If blank, they will be placed in the default location for this vault. `,
	'121503': `Default Folder`,

	'121601': `Note Name`,
	'121602': `Nodes created from Obsidian-Douban will use this fileName as template(also support filePath),
	 If blank, they will be created by default name. support all basic template variables. example: {{type}}/{{title}}`,

	'121701': `Search Template File`,
	// '121702': `Movie created from Obsidian-Douban will be placed in this folder, If blank, they will be placed in the default location for this vault. `,
	'121703': `Default`,

	'121901': `Copy default template content to clipboard`,
	'121902': `Reset to default value`,



	//error
	'130101': `Fetch Data Error, You can go to Github add Issues`,
	'140101': `Not support for current type. You can add Issues at Github:Wanxp/obsidian-douban`,

	'140201': `[Obsidian Douban]: searching '{0}'...`,
	'140202': `[Obsidian Douban]: result {0} rows`,
	'140203': `[Obsidian Douban]: request '{0}'`,
	'140204': `[Obsidian Douban]: replace '{0}'`,
	'140205': `[Obsidian Douban]: complete '{0}'`,
	'140206': `[Obsidian Douban]: occur error '{0}'`,

	'150101': `Choose an item...`,





	//content
	'200101': `. `,

	'210101': `Default`,
	'210201': `Search...`,

	'122001': `Basic Variables`,
	'122002': `Extra Variables`,
	'122003': `Basic Variables must has value, Extra Variables can be empty`,
	'122004': `To use the template variables, you need to wrap them in double curly brackets. For example, {{title}} will be replaced with the title of the note.`,





	'410101': `Unknown`,

	//参数
	'300101': `参数`,
	'300102': `书籍`,
	'300103': `电影`,
	'300104': `电视剧`,
	'300105': `音乐`,
	'300106': `日记`,
	'300107': `游戏`,
	'300108': `广播`,

	//书籍
	'310101': `豆瓣ID`,
	'310102': `书名`,
	'310103': `类型`,
	'310104': `评分`,
	'310105': `封面URL`,
	'310106': `豆瓣网址`,
	'310107': `内容简介`,
	'310108': `出版社`,
	'310109': `出版时间`,
	'310110': `其他`,
	'310111': `author:原作者`,
	'310112': `translator:译者`,
	'310113': `isbn:isbn`,
	'310114': `originalTitle:原作名`,
	'310115': `subTitle:副标题`,
	'310116': `totalPage:页数`,
	'310117': `binding:装帧`,
	'310118': `producer:出品方`,

	//电影
	'310201': `豆瓣ID`,
	'310202': `电影名称`,
	'310203': `类型`,
	'310204': `评分`,
	'310205': `封面`,
	'310206': `豆瓣网址`,
	'310207': `简介`,
	'310208': `(未知)`,
	'310209': `上映日期`,
	'310210': `类型`,
	'310211': `director:导演`,
	'310212': `author:编剧`,
	'310213': `actor:主演`,
	'310214': `originalTitle:原作名`,
	'310215': `-`,
	'310216': `-`,
	'310217': `-`,
	'310218': `-`,


	//电视剧
	'310301': `豆瓣ID`,
	'310302': `电视剧名称`,
	'310303': `类型`,
	'310304': `评分`,
	'310305': `封面`,
	'310306': `豆瓣网址`,
	'310307': `简介`,
	'310308': `(未知)`,
	'310309': `上映日期`,
	'310310': `类型`,
	'310311': `director:导演`,
	'310312': `author:编剧`,
	'310313': `actor:主演`,
	'310314': `originalTitle:原作名`,
	'310315': `-`,
	'310316': `-`,
	'310317': `-`,
	'310318': `-`,



	//音乐
	'310401': `豆瓣ID`,
	'310402': `音乐名`,
	'310403': `类型`,
	'310404': `评分`,
	'310405': `封面`,
	'310406': `豆瓣网址`,
	'310407': `简介`,
	'310408': `出版者`,
	'310409': `发行时间`,
	'310410': `流派`,
	'310411': `actor: 表演者`,
	'310412': `albumType:专辑类型`,
	'310413': `medium:介质`,
	'310414': `records:唱片数`,
	'310415': `barcode:条形码`,
	'310416': `-`,
	'310417': `-`,
	'310418': `-`,

	//日记
	'310501': `豆瓣ID`,
	'310502': `日记标题`,
	'310503': `类型`,
	'310504': `评分`,
	'310505': `图片`,
	'310506': `豆瓣网址`,
	'310507': `简介`,
	'310508': `发布者`,
	'310509': `发布时间`,
	'310510': `(其它)`,
	'310511': `author:作者`,
	'310512': `(其它)`,
	'310513': `authorUrl:作者网址`,
	'310514': `content:日记内容`,
	'310515': `-`,
	'310516': `-`,
	'310517': `-`,
	'310518': `-`,

	//游戏
	'310601': `豆瓣ID`,
	'310602': `游戏名称`,
	'310603': `类型`,
	'310604': `评分`,
	'310605': `封面`,
	'310606': `豆瓣网址`,
	'310607': `简介`,
	'310608': `发行商`,
	'310609': `发行日期`,
	'310610': `类型`,
	'310611': `aliases:别名`,
	'310612': `developer:开发商`,
	'310613': `platform:平台`,
	'310614': `-`,
	'310615': `-`,
	'310616': `-`,
	'310617': `-`,
	'310618': `-`,

	//广播
	'310701': `待开发`,
	'310702': `待开发`,
	'310703': `待开发`,
	'310704': `待开发`,
	'310705': `待开发`,
	'310706': `待开发`,
	'310707': `待开发`,
	'310708': `待开发`,
	'310709': `待开发`,
	'310710': `待开发`,
	'310711': `-`,
	'310712': `-`,
	'310713': `-`,
	'310714': `-`,
	'310715': `-`,
	'310716': `-`,
	'310717': `-`,
	'310718': `-`,

	'320101': `扩展1`,
	'320102': `扩展2`,
	'320103': `扩展3`,
	'320104': `扩展4`,
	'320105': `扩展5`,
	'320106': `扩展6`,
	'320107': `扩展7`,
	'320108': `扩展8`,
	'320109': `扩展9`,
	'320110': `扩展10`,
	'320111': `扩展11`,

	'330101': `今日日期`,
	'330102': `当前时间`,


	'ALL': `all`,
	'MOVIE': `movie`,
	'BOOK': `book`,
	'MUSIC': `music`,
	'NOTE': `note`,
	'GAME': `game`,
	'TELEPLAY': `teleplay`,
}
