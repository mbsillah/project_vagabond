# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all

cities = []

cities << City.create(
    name: "Atlanta",
    description: "Capital of the South. ATL. Home of Coke, Chick-fil-A, and mediocre sports. Once burned by Sherman - rude.",
    population: 472522,
    photo_url: "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000"
)

