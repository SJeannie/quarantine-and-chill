import { Model, string, integer, include, belongsTo } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Message extends Resource {
	@include(Model)
	@string
	content = '';

	@belongsTo({a: 'User'})
	user = null;

	// @belongsTo({a: 'User'})  // argument for Users as players ???
	// player = null;
}
