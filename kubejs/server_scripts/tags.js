
ServerEvents.tags('block', event =>
{
    event.add('tfc:toughness_1', '@create')

    event.remove('tfc:toughness_1', 'create:controller_rail')
})
