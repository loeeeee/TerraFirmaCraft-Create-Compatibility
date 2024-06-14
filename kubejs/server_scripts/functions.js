
const tfcCalendar = Java.loadClass('net.dries007.tfc.util.calendar.Calendars') //only works if kubejs/config/common.properties has disableClassFilter = true


BlockEvents.rightClicked(event=>
{
    //LIGHTING COAL FORGE
    if (event.block.id == 'minecraft:coal_block' && event.item == 'minecraft:flint_and_steel') {

        event.player.damageHeldItem("MAIN_HAND", 1)
        event.player.addItemCooldown('minecraft:flint_and_steel', 1) //prevents lighting fires
        event.block.set('create:blaze_burner', {blaze: 'smouldering'})
    }

    //LIGHTING VANILLA CANDLE WITH TFC TORCH
    if (event.block.hasTag('minecraft:candles') && event.item == 'tfc:torch'){
        event.cancel()
        event.block.set(event.block.id, {lit: 'true', candles: event.block.properties.candles})
    }

    // --DEPLOYER EVENTS BELOW--
    if (!event.player.isFake()){
        return
    }

    //LIGHTING TFC BLOCKS
    if (event.item == 'minecraft:flint_and_steel' || event.item == 'tfc:firestarter'){

        //LIGHTING CHARCOAL FORGE
        if (event.block.properties.heat_level == '0'){

            if (!(event.block.north.hasTag('tfc:forge_insulation') && 
                event.block.south.hasTag('tfc:forge_insulation') && 
                event.block.east.hasTag('tfc:forge_insulation') && 
                event.block.west.hasTag('tfc:forge_insulation') && 
                event.block.down.hasTag('tfc:forge_insulation'))){
                return
            }

            event.player.damageHeldItem("MAIN_HAND", 1)
            event.block.set('tfc:charcoal_forge', {heat_level: '1'})
        }

        //LIGHTING BLAST FURNACE
        if (event.block.id == 'tfc:blast_furnace' && event.block.up == 'tfc:molten' && event.block.properties.lit == 'false') {
            event.player.damageHeldItem("MAIN_HAND", 1)
            event.block.set('tfc:blast_furnace', {lit: 'true'})
        }

        //LIGHTING BLOOMERY 
        if (event.block.id == 'tfc:bloomery' && event.block.properties.lit == 'false' && event.block.properties.open == 'false'){
            event.cancel()
            
            var invertFacing = {
                'east': event.block.west,
                'west': event.block.east,
                'north': event.block.south,
                'south': event.block.north
            }

            var blockBehind = invertFacing[event.block.properties.facing]         
            if (blockBehind.id != 'tfc:molten') {
                return
            }

            event.player.damageHeldItem('MAIN_HAND', 1)
            event.block.mergeEntityData({litTick: tfcCalendar.get(event.block.minecraftLevel).getTicks()})
            event.block.set('tfc:bloomery', {lit: 'true', open: 'false', facing: event.block.properties.facing})
        }
    }
})
