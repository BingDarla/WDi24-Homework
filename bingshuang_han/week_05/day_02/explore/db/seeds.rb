# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

# CREATE TABLE moutains (
#   id INTEGER PRIMARY KEY AUTOINCREMENT,
#   name TEXT,
#   country TEXT,
#   height INTEGER,
#   image TEXT,
#   intro TEXT
#
# );

Mountain.create :name => 'Fuji', :country =>'Japan',:height => '3776M',:image => 'https://i.imgur.com/yS6L6qL.jpg',:intro =>''
Mountain.create :name => 'Kita', :country =>'Japan',:height => '3193M',:image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mount_Aino_fom_Mount_Kita_2001-7-2.jpg/1200px-Mount_Aino_fom_Mount_Kita_2001-7-2.jpg',:intro =>''
Mountain.create :name => 'Hotakadake', :country =>'Japan',:height => '3190M',:image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Hotakadake_from_Tokugotoge_1994-4-30.jpg/1200px-Hotakadake_from_Tokugotoge_1994-4-30.jpg',:intro =>''
Mountain.create :name => 'Kosciuszko', :country =>'Australia',:height => '2228M',:image => 'https://indaily.com.au/wp-content/uploads/2016/12/Mt-Kosciuszko.jpg',:intro =>''
Mountain.create :name => 'Tai', :country =>'China',:height => '1533M',:image => 'https://theredlist.com/media/database/architecture/history/architecture-extreme-orient/architecture-chinoise/le-taishan/003_le-taishan_theredlist.jpg',:intro =>''
Mountain.create :name => 'Hua', :country =>'China',:height => '2160M',:image => '',:intro =>''
Mountain.create :name => 'Heng', :country =>'China',:height => '2017M',:image => '',:intro =>''
