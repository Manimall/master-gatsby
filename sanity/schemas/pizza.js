export default {
  // computer name
  name: 'Pizza',
  // visible title
  title: 'Pizzas',
  icon: () => '🍕',
  type: 'document',
  fields: [
    {
      name: 'Name',
      titile: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'Slug',
      titile: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'Image',
      titile: `Pizza's Image`,
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'Price',
      titile: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000),
      // TODO: add custom input component
    },
  ],
};
