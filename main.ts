player.onChat("run", function () {
    player.say(":)")
})
agent.teleportToPlayer()
blocks.place(IRON_SHOVEL, pos(90, 100, 0))
agent.setAssist(PLACE_ON_MOVE, true)
