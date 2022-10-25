import {AggregateRating, Person} from 'schema-dts';

import DoubanSubject from "./DoubanSubject";

export default class DoubanGameSubject extends DoubanSubject  {
	director:Person[];
	author:Person[];
	actor:Person[];
	aggregateRating:AggregateRating;
	datePublished:Date;
	image:string;
	genre:string[];
	originalTitle:string;

}
