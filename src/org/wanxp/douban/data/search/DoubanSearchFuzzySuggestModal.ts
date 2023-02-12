import {FuzzySuggestModal} from "obsidian";

import DoubanPlugin from "../../../main";
import DoubanSearchResultSubject from "../model/DoubanSearchResultSubject";
import {log} from "src/org/wanxp/utils/Logutil";
import {i18nHelper} from "../../../lang/helper";
import HandleContext from "../model/HandleContext";

export {DoubanFuzzySuggester}


class DoubanFuzzySuggester extends FuzzySuggestModal<DoubanSearchResultSubject> {

	private plugin: DoubanPlugin;
	private doubanSearchResultExtract: DoubanSearchResultSubject[];
	private context: HandleContext;

	constructor(plugin: DoubanPlugin, context: HandleContext) {
		super(app);
		this.plugin = plugin;
		this.context = context;
		this.setPlaceholder(i18nHelper.getMessage('150101'));
	}


	getItems(): DoubanSearchResultSubject[] {
		return this.doubanSearchResultExtract;
	}

	getItemText(item: DoubanSearchResultSubject): string {
		let text: string = item.type + "/" + (item.score ? item.score : '-') + "/" + item.title + "/" + item.cast;
		return text;
	}

	onChooseItem(item: DoubanSearchResultSubject, evt: MouseEvent | KeyboardEvent): void {
		this.plugin.showStatus(i18nHelper.getMessage('140204', item.title));
		this.context.listItem = item;
		if (item) {
			this.plugin.settingsManager.debug(`选择了:${item.type}:${item.id}:${item.title}`)
		}
		this.plugin.doubanExtractHandler.handle(item, this.context);
	}

	public showSearchList(doubanSearchResultExtractList: DoubanSearchResultSubject[]) {
		this.doubanSearchResultExtract = doubanSearchResultExtractList;
		this.start();
	}

	public start(): void {
		try {
			this.open();
		} catch (e) {
			log.error(e.toString(), e);
		}
	}

}
