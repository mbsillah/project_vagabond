# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
User.destroy_all
Post.destroy_all

cities = []
users = []
posts = []

atlanta = City.create(
    name: "Atlanta",
    description: "Capital of the South. ATL. Home of Coke, Chick-fil-A, and mediocre sports. Once burned by Sherman - rude.",
    population: 472522,
    photo_url: "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000"
)

portland = City.create(
    name: "Portland",
    description: "only hipsters allowed.",
    population: 639863,
    photo_url: "http://bouchon-portland.com/wp-content/uploads/2017/01/portland-oregon.jpg"
)

jonathan = User.create(
    username: "lil.bow.wow",
    current_city: "Atlanta"
)

musa = User.create(
    username: "silla",
    current_city: "Philadelphia"
)

erica = User.create(
    username: "ebhinch",
    current_city: "New York"
)

atlPostOne = Post.create(
    title: "Peace Up",
    text: "A-Town Down",
    city_id: atlanta.id
)

atlPostTwo = Post.create(
    title: "Rise Up",
    text: "but not too hard...just for first half. sit down for second",
    city_id: atlanta.id
)

portlandPostOne = Post.create(
    title: "Portlandia",
    text: "There's more to our town than a stupid show.",
    city_id: portland.id
)