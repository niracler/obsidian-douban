import {DoubanPluginSetting} from "../douban/setting/model/DoubanPluginSetting";
import {PersonNameMode, SupportType} from "./Constsant";

export const DEFAULT_SETTINGS: DoubanPluginSetting = {
	onlineSettingsFileName: "obsidian_douban_plugin_online_settings.json",
	onlineSettingsGistId: "35693f9ece9bd6abba98f94e81afde19",
	movieTemplateFile: ``,
	bookTemplateFile: ``,
	musicTemplateFile: ``,
	noteTemplateFile: ``,
	gameTemplateFile: ``,
	teleplayTemplateFile: ``,
	searchUrl: 'https://www.douban.com/search?q=',
	dateFormat: "yyyy-MM-DD",
	timeFormat: "HH:mm:ss",
	arraySpilt: ", ",
	personNameMode: PersonNameMode.CH_NAME,
	dataFilePath: "",
	dataFileNamePath: "/{{type}}/{{title}}",
	statusBar: true,
	debugMode: false,
	customProperties: [
		{name: 'myType', value: 'movie', field: SupportType.MOVIE},
		{name: 'myType', value: 'book', field: SupportType.BOOK},
		{name: 'myType', value: 'music', field: SupportType.MUSIC},
		{name: 'myType', value: 'note', field: SupportType.NOTE},
		{name: 'myType', value: 'game', field: SupportType.GAME},
		{name: 'myType', value: 'teleplay', field: SupportType.TELEPLAY},
	],
	loginCookiesContent: '',
	loginHeadersContent: '',
	cacheImage: true,
	cacheHighQuantityImage: true,
	attachmentPath: 'assets',
	syncHandledDataArray: []
}
