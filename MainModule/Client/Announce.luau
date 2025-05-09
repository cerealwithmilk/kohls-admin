local TextService = game:GetService("TextService")

local _K = require(script.Parent.Parent)
local UI = require(script.Parent.UI)
local UserFrame = require(script.Parent.UserFrame)
local existing = {}

local function resetOffset()
	local heightOffset = 0
	for i, list in ipairs(existing) do
		local card, _, offset = unpack(list)
		offset:set(heightOffset)
		heightOffset += card.AbsoluteSize.Y + UI.Theme.Padding._value.Offset
	end
	return heightOffset
end

local function hide(info, height: number?)
	local card, visible, _offset, delay = unpack(info)
	local found = table.find(existing, info)
	if not found or (delay == 0 and height) then
		return
	end
	UI.Sound.Swipe:Play()

	table.remove(existing, found)
	resetOffset()
	card.ZIndex = -1
	visible:set(nil)
	task.delay(1 + UI.Theme.TweenOut._value.Time, card.Destroy, card)
end

return function(text: string, from: number?, delay: number?, name: string?, image: string?)
	delay = delay or 4 + 0.125 * #text

	local visible = UI.state(false)
	local offset = UI.state(0)
	local self

	local function close()
		if not self then
			return
		end
		hide(self)
	end

	local userFrame = UserFrame(from, name, image)

	local dialog
	dialog = UI.new "Dialog" {
		Parent = UI.LayerTopInset,
		Close = close,
		Duration = delay,
		ExitButton = true,

		Size = UDim2.fromScale(0.5, 0),
		AnchorPoint = UI.tween(
			UI.Theme.TweenInOut,
			UI.compute(function(use)
				return Vector2.new(0.5, if use(visible) then 0 else 1)
			end)
		),
		Position = UI.tween(
			UI.Theme.TweenInOut,
			UI.compute(function(use)
				local height = use(UI.TopbarInset).Height
				local padding = use(UI.Theme.Padding).Offset
				local heightOffset = use(offset)
				return UDim2.new(0.5, 0, 0, if use(visible) then padding + heightOffset else -height)
			end)
		),

		UI.new "UIPadding" {
			PaddingLeft = UI.Theme.Padding,
			PaddingRight = UI.Theme.Padding,
			PaddingTop = UI.Theme.Padding,
			PaddingBottom = UI.Theme.Padding,
		},

		userFrame,
		Text = text,
	}

	UI.edit(dialog._content.Text, {
		TextSize = UI.Theme.FontSizeLarge,
		RichText = true,
	})

	UI.new "UISizeConstraint" {
		Parent = dialog._instance,
		MaxSize = Vector2.new(512, 9e9),
	}

	UI.edit(userFrame, {
		UI.new "UIListLayout" {
			SortOrder = Enum.SortOrder.LayoutOrder,
			Padding = UDim.new(0, 4),
			FillDirection = Enum.FillDirection.Horizontal,
		},
		UI.new "Frame" {
			LayoutOrder = 8,
			Name = "Spacer",
			BackgroundTransparency = 1,
			UI.new "UIFlexItem" {
				FlexMode = Enum.UIFlexMode.Fill,
			},
		},
		dialog._exitButton,
	})

	self = { dialog._instance, visible, offset, delay }
	table.insert(existing, 1, self)
	visible:set(true)

	local height =
		TextService:GetTextSize(text, UI.Theme.FontSizeLarge._value, UI.Theme.Font._value, Vector2.new(512, 9e9)).Y

	if resetOffset() > UI.LayerTopInset.AbsoluteSize.Y / 2 then
		hide(existing[#existing], height)
	end

	UI.Sound.Notification_Low:Play()
end
