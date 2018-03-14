package dao

import "github.com/go-bongo/bongo"
import "time"

type Event struct {
	bongo.DocumentBase `bson:",inline"`
	name               string
	startDate          time.Time
	endDate            time.Time
	badgeImageName     string
	offers             *bongo.Collection
}
