import DoubanMovieSubject from "douban/model/DoubanMoveSubject";
import { get, readStream } from "tiny-network";
import { log } from "utils/logutil";
import DoubanAbstractLoadHandler from "./DoubanAbstractLoadHandler";
import cheerio, { CheerioAPI } from 'cheerio';


export default class DoubanMovieLoadHandler extends DoubanAbstractLoadHandler<DoubanMovieSubject> {
    
    
    
    getSubject(url:string): DoubanMovieSubject {
        return this.fetchFromDouban(url);
    }
    getTextResult(url:string): string {
        throw new Error("Method not implemented.");
    }
    getType(): string {
        throw new Error("Method not implemented.");
    }
 
    fetchFromDouban(url:string):DoubanMovieSubject {
        const reuslt = await this.fetchFromDoubanWeb(url);
        return reuslt;
    }

    fetchFromDoubanWeb(url:string):Promise<DoubanMovieSubject> {
        return Promise
            .resolve()
            .then(() => get(url, JSON.parse(this.doubanSettings.searchHeaders)))
            .then(readStream)
            .then(log.info)
            .then(cheerio.load)
            .then(this.parseMovieSubjectFromHtml);
    }

    parseMovieSubjectFromHtml(responseHtml:CheerioAPI):DoubanMovieSubject {
        return responseHtml('.result')
        .get()
        .map((i:any) => {
            const item = responseHtml(i);
            var idPattern = /(\d){5,10}/g;
            var urlPattern = /(https%3A%2F%2F)\S+(\d){5,10}/g;
            var linkValue = item.find("div.content > div > h3 > a").text();
            var ececResult = idPattern.exec(linkValue);
            var urlResult = urlPattern.exec(linkValue);
            var cast = item.find(".subject-cast").text();
            const result:DoubanMovieSubject = {
                id: ececResult?ececResult[0]:'',
                title: item.find("div.content > div > h3 > a").text(),
                score: item.find(".rating_nums").text(),
                // duration: item.attr('data-duration'),
                // region: item.attr('data-region'),
                // director: item.attr('data-director'),
                // actors: item.attr('data-actors'),
                // poster: item.find('.poster img').attr('src'),
                cast: cast,
                type: item.find("div.content > div > h3 > span").text(),
                desc: item.find("div.content > p").text(),
                url: urlResult?decodeURIComponent(urlResult[0]):'https://www.douban.com',
            };
            return result;
        })[0];
    }


}