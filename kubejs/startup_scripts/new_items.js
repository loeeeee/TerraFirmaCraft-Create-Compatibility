
StartupEvents.registry('item', event =>
{
    event.create('crushed_bismuth_ore').displayName('Crushed Bismuth Ore')
    event.create('crushed_nickel_ore').displayName('Crushed Nickel Ore')
    event.create('crushed_silver_ore').displayName('Crushed Silver Ore')
    event.create('crushed_tin_ore').displayName('Crushed Tin Ore')

    event.create('pig_iron_sheet').displayName('Pig Iron Sheet')
    event.create('weak_steel_sheet').displayName('Weak Steel Sheet')
    event.create('weak_blue_steel_sheet').displayName('Weak Blue Steel Sheet')
    event.create('weak_red_steel_sheet').displayName('Weak Red Steel Sheet')
    event.create('unknown_sheet').displayName('Unknown Sheet')

    event.create('copper_chain_mesh').displayName('Copper Chain Mesh')
    event.create('bismuth_bronze_chain_mesh').displayName('Bismuth Bronze Chain Mesh')
    event.create('black_bronze_chain_mesh').displayName('Black Bronze Chain Mesh')
    event.create('bronze_chain_mesh').displayName('Bronze Chain Mesh')
    event.create('wrought_iron_chain_mesh').displayName('Wrought Iron Chain Mesh')
    event.create('steel_chain_mesh').displayName('Steel Chain Mesh')
    event.create('black_steel_chain_mesh').displayName('Black Steel Chain Mesh')
    event.create('blue_steel_chain_mesh').displayName('Blue Steel Chain Mesh')
    event.create('red_steel_chain_mesh').displayName('Red Steel Chain Mesh')

    event.create('incomplete_brass_mechanisms').displayName('Incomplete Brass Mechanisms')
    event.create('incomplete_circular_saw').displayName('Incomplete Circular Saw')
    event.create('circular_saw').displayName('Circular Saw')
    event.create('propeller_blade').displayName('Propeller Blade')
    event.create('wood_ash').displayName('Wood Ash')
    event.create('crystalisation_catalyst').displayName('Crystallisation Catalyst')
    event.create('sugarcane_strip').displayName('Sugarcane Strip')

    event.create('bone_broth').displayName('Bone Broth').food(food => 
    {
		food.hunger(8).saturation(8)
	})
})
