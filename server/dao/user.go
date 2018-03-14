package dao

import "github.com/go-bongo/bongo"

type ConsumerUser struct {
	bongo.DocumentBase `bson:",inline"`
	firstName          string
	lastName           string
	facebookId         string
	events             *bongo.Collection
}
