import { Model, string, integer, include, hasMany, session } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class Rank extends Resource {
	@include(Model)
	@string
	title = '' // levels = egg 0, raptor 1, chicken 2, overlord 3

	// @string
	// image = ''

	@integer  // rank as a number
	position = 0

	@hasMany({ as: 'rank'})
  	users = []

}