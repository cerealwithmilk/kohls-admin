local Players = game:GetService("Players")

local generateValidate = require(script.Parent.Parent:WaitForChild("generateValidate"))
local sanitizePlayer = require(script.Parent.Parent:WaitForChild("sanitizePlayer"))

local function allParse(arg, self)
	local players = {}
	for _, player in Players:GetPlayers() do
		player = sanitizePlayer(self, player)
		if player then
			table.insert(players, player)
		end
	end
	return #players > 0 and players, "No valid player found"
end

local typeEveryone = {
	listable = true,
	transform = string.lower,
	validate = generateValidate(allParse),
	parse = allParse,
}

return function(_K)
	_K.Registry.registerType("allPlayers", typeEveryone)
end
