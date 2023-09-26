import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sivu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Otsikko',
      type: 'string',
    }),
    defineField({
      name: "content",
      title: "Sisältö",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Vaihtoehtoinen teksti",
            },
          ]
        }
      ],
    }),
  ],
})
