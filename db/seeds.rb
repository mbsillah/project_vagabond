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
    description: "Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood. It’s known for its parks, bridges and bicycle paths, as well as for its eco-friendliness and its microbreweries and coffeehouses. Hipsters everywhere you turn.",
    population: 639863,
    photo_url: "http://bouchon-portland.com/wp-content/uploads/2017/01/portland-oregon.jpg"
)

newyork = City.create(
    name: "New York City",
    description: "Often called one of, if not the, greatest cities in the world. The Big Apple, The City That Never Sleeps, Gotham: whatever its name, New York City has something for every taste and every traveler.",
    population: 8538000,
    photo_url: "https://fortunedotcom.files.wordpress.com/2015/10/stnmtz_20150716_68953.jpg?w=720&quality=85"
)

bangkok = City.create(
    name: "Bangkok",
    description: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life.",
    population: 8281000,
    photo_url: "http://static.asiawebdirect.com/m/bangkok/portals/bangkok-maps-com/homepage/pagePropertiesImage/bangkok.jpg.jpg"
)

milan = City.create(
    name: "Milan",
    description: "Milan, a metropolis in Italy's northern Lombardy region, is a global capital of fashion and design.",
    population: 1331000,
    photo_url: "https://www.flybe.com/cheap-flights/milan/milan-overview-16x9.jpg"
)

london = City.create(
    name: "London",
    description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times",
    population: 8788000,
    photo_url: "https://www.laoistoday.ie/wp-content/uploads/2017/10/london.png"
)

sanFran = City.create(
    name: "San Fransico",
    description: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay.",
    population: 864816,
    photo_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjW8b_u5KLXAhWKOSYKHeqdBzcQjRwIBw&url=http%3A%2F%2Fwww.travelandleisure.com%2Ftravel-guide%2Fsan-francisco&psig=AOvVaw3qov-ui9eLEY2NrPCAE7CI&ust=1509811655720240"
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

bangkokPostOne = Post.create(
    title: "Visit the Grand Palace",
    text: "The most famous attraction in the entire city",
    city_id: bangkok.id
)

milanPostOne = Post.create(
    title: "Go to the Duomo",
    text: "If you only have time to see one sight in Milan, the Duomo should be it.",
    city_id: milan.id
)

newyorkPostone = Post.create(
    title: "Brooklyn Bridge",
    text: "For some excercise and wonderful views of the city, walk the Brooklyn Bridge.",
    city_id: newyork.id
)