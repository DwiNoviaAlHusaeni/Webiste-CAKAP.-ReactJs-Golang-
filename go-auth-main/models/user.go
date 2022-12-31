package models

type User struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Telp	 string `json:"telp"`
	Password []byte `json:"-"`
}
