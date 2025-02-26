// db.help();

use("footy-test");

//1. INSERT ONE

// let player = {
// 	name: "Sadio Mane",
// 	height: 180,
// 	country: "Senegal",
// 	market_value: 50000,
// 	goals: 400,
// };
// db.players.insertOne(player);

// db.players.insertOne({
// 	name: "Harry Kane",
// 	height: 189,
// 	country: "England",
// 	market_value: 150000,
// 	goals: 500,
// });

// 2. INSERT MANY
// let players = [
// 	{
// 		name: "Lionel Messi",
// 		height: 170,
// 		country: "Argentina",
// 		market_value: 50000000,
// 		all_time_goals: 800,
// 	},
// 	{
// 		name: "Cristiano Ronaldo",
// 		height: 187,
// 		country: "Portugal",
// 		market_value: 45000000,
// 		all_time_goals: 850,
// 	},
// 	{
// 		name: "Neymar Jr",
// 		height: 175,
// 		country: "Brazil",
// 		market_value: 70000000,
// 		all_time_goals: 400,
// 	},
// 	{
// 		name: "Kylian Mbappe",
// 		height: 178,
// 		country: "France",
// 		market_value: 180000000,
// 		all_time_goals: 250,
// 	},
// 	{
// 		name: "Robert Lewandowski",
// 		height: 185,
// 		country: "Poland",
// 		market_value: 60000000,
// 		all_time_goals: 500,
// 	},
// 	{
// 		name: "Kevin De Bruyne",
// 		height: 181,
// 		country: "Belgium",
// 		market_value: 90000000,
// 		all_time_goals: 150,
// 	},
// 	{
// 		name: "Mohamed Salah",
// 		height: 175,
// 		country: "Egypt",
// 		market_value: 100000000,
// 		all_time_goals: 200,
// 	},
// 	{
// 		name: "Virgil van Dijk",
// 		height: 193,
// 		country: "Netherlands",
// 		market_value: 70000000,
// 		all_time_goals: 50,
// 	},
// ];

// db.players.insertMany(players);

// 3. Find
// db.players.find();
// db.players.find({ country: "Bangladesh" });

// 4. Projection
// let skippedField = { height: 0, all_time_goals: 0, _id: 0 };
// db.players.find({}, skippedField);
// db.players.find({}, { name: 1, country: 1, _id: 0 });
// db.players.find({}, { name: 1, all_time_goals: 1, _id: 0 });

// 5. Comparison
// $gt - greater than >
// $gte - greater than equals to
// $lte - less than equals to
// $lt - less than
// $eq - equals to
// $ne - not equals to
// $in - in []
// $nin - not in []

// db.players.find({ all_time_goals: { $gt: 400 } });
// db.players.find({ height: { $gte: 180 } });
// db.players.find({ height: { $eq: 289 } });
// db.players.find({ market_value: { $nin: [50000, 150000] } });

// 6. Logical Operator Query
// $and
// $or
// $not
// $nor

// db.players.find({ $not: { country: "Argentina" } });
// db.inventory.find({ country: { $not: "Argentina" } });

// 7. Element query
// $exist
// db.players.find({ goals: { $exists: true } });

// 8. Evaluation query

// db.players.find({name: {$regex: /o$/}})

// 9. Sort

// db.players.find().sort({market_value: 1})
// db.players.find().sort({ height: -1 });

// 10. Limit

// db.players.find().limit(2);
// let limitData = 2;
// db.players.find({ all_time_goals: { $gt: 400 } }).limit(limitData);

// 11. DISTINCT

// db.players.distinct("country");

// 12; COUNT
db.players.countDocuments({ all_time_goals: { $gt: 400 } });

// 13. DELETE

db.player.deleteOne({ name: "Jamal" });
